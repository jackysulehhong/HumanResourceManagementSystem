import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveHistory } from '../../actions/leaves';
import { getLeaveTypes } from '../../actions/leaveTypes';
import {
  Spin,
  Table,
  Space,
  Button,
  Badge,
  Empty,
  Tag,
  ConfigProvider,
  Dropdown,
  Menu,
} from 'antd';

import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import PageLoading from '../PageLoading/PageLoading';
import {
  PlusOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';
import { fetchHolidaysByYear } from '../../actions/holidays';

const LeaveHistory = () => {
  const { leaveHistory, isLoading } = useSelector((state) => state.leaves);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const { holidays } = useSelector((state) => state.holidays);
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusFilter = [
    { text: 'Pending', value: 'Pending' },
    { text: 'Approved', value: 'Approved' },
    { text: 'Rejected', value: 'Rejected' },
  ];
  var typeFilter = [];

  useEffect(() => {
    dispatch(fetchLeaveHistory(user._id));
    dispatch(getLeaveTypes());
    dispatch(fetchHolidaysByYear(moment().format('YYYY')));
  }, [dispatch]);

  leaveTypes.map((element) => {
    typeFilter.push({ text: element.name, value: element.code });
  });

  const applyLeave = () => {
    navigate('/leaves/create');
  };

  const calcWorkingDays = (startDate, endDate) => {
    let day = moment(startDate);
    let workingDays = 0;
    ///https://stackoverflow.com/a/45483646
    while (day.isSameOrBefore(endDate, 'day')) {
      if (![0, 6].includes(day.day())) workingDays++;
      day.add(1, 'd');
    }

    holidays.lists.forEach((holiday) => {
      if (startDate >= holiday.startDate && endDate <= holiday.endDate) {
        const holidayCount = moment(holiday.endDate).diff(
          moment(holiday.startDate),
          'days'
        );

        workingDays -= holidayCount;
      }
    });
    return workingDays;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const actionRef = useRef();

  const columns = [
    {
      title: 'Leave Type',
      dataIndex: 'leaveType',
      key: 'leaveType',
      filters: typeFilter,
      hideInSearch: true,
      onFilter: (value, record) => record.leaveType.code.indexOf(value) === 0,
      render: (text, record) => (
        <Tag color={text.color}>{capitalizeFirstLetter(text.code)}</Tag>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'fromDate',
      key: 'fromDate',
      valueType: 'date',
      sorter: (a, b) => moment(a.fromDate) - moment(b.fromDate),
      render: (text, record) => moment(record.fromDate).format('YYYY-MM-DD'),
    },
    {
      title: 'Start Date to End Date',
      dataIndex: 'fromDate',
      valueType: 'dateRange',
      key: 'somehtin',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: 'End Date',
      dataIndex: 'toDate',
      key: 'toDate',
      valueType: 'date',
      sorter: (a, b) => moment(a.toDate) - moment(b.toDate),
      render: (text, record) => moment(record.toDate).format('YYYY-MM-DD'),
    },
    {
      title: 'Total Days',
      hideInSearch: true,
      dataIndex: 'toDate',
      key: 'totalDays',
      render: (text, record) => calcWorkingDays(record.fromDate, record.toDate),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: statusFilter,
      hideInSearch: true,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (text, record) => (
        <Badge
          status={
            record.status == 'Pending'
              ? 'processing'
              : record.status == 'Approved'
              ? 'success'
              : 'error'
          }
          text={record.status}
        />
      ),
    },
    {
      title: 'Action',
      key: '_id',
      valueType: 'option',
      render: (text, record) => (
        <Space size='middle' key={record._id}>
          <Link to={`/leaves/view/${record._id}`}>View</Link>
          {record.status == 'Pending' && (
            <Link to={`/leaves/edit/${record._id}`}>Edit</Link>
          )}
        </Space>
      ),
    },
  ];

  const reverseArr = (input) => {
    var ret = new Array();
    if (input)
      for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
      }
    return ret;
  };

  let temp = reverseArr(leaveHistory);

  if (isLoading || !leaveHistory || !leaveTypes) return <PageLoading />;

  return (
    <>
      <h2>My Leave Applications</h2>
      {!leaveHistory.length ? (
        <Empty></Empty>
      ) : (
        <>
          <ConfigProvider locale={enUSIntl}>
            <ProTable
              search={{
                span: 24,
              }}
              rowKey='id'
              columns={columns}
              actionRef={actionRef}
              request={(params, sorter, filter) => {
                let dataSource = temp;

                if (params) {
                  if (Object.keys(params).length > 0) {
                    dataSource = dataSource.filter((item) => {
                      return Object.keys(params).every((key) => {
                        if (!params[key]) {
                          return true;
                        }
                        if (key == 'pageSize' || key == 'current') {
                          return true;
                        }

                        if (params[key] == 'all') {
                          return true;
                        }
                        let val = item[key];
                        if (key == 'user') {
                          val = `${item.user.first_name} ${item.user.last_name}`;
                        } else if (key == 'department') {
                          val = `${item.department.name}`;
                        } else if (key == 'startTime') {
                          return (
                            moment(item['fromDate']).diff(
                              moment(params[key])
                            ) >= 0
                          );
                        } else if (key == 'endTime') {
                          return (
                            moment(item['toDate']).diff(
                              moment(params[key]),
                              'days'
                            ) <= 0
                          );
                        }
                        if (!val) {
                          return true;
                        }
                        if (
                          val.search(
                            new RegExp('.*' + params[key] + '.*', 'gi')
                          ) != -1
                        ) {
                          return true;
                        }
                        return false;
                      });
                    });
                  }
                }

                return Promise.resolve({
                  data: dataSource,
                  success: true,
                });
              }}
              rowKey='_id'
              pagination={{
                pageSize: 10,
                showQuickJumper: true,
              }}
              search={{
                labelWidth: 'auto',
              }}
              dateFormatter='string'
              toolbar={{
                title: 'Tips:',
                tooltip:
                  'Use the search bar above or filter icons on the columns for easy record finding',
              }}
              toolBarRender={() => [
                <Button type='primary' key='primary' shape='round'>
                  <Link to='/leaves/create'>To Leave Application</Link>
                </Button>,
              ]}
            />
          </ConfigProvider>
        </>
      )}
    </>
  );
};

export default LeaveHistory;
