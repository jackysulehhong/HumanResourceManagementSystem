import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLeaveHistory,
  getTrainingProgressUser,
} from '../../actions/trainingProgress';
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

const TrainingProgressHistory = ({ user }) => {
  const { trainingProgresses, isLoading } = useSelector(
    (state) => state.trainingProgress
  );
  //  const user = JSON.parse(localStorage.getItem('profile')).result;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusFilter = [
    { text: 'Waiting Completion', value: 'Waiting Completion' },
    { text: 'Pending Approval', value: 'Pending Approval' },
    { text: 'Approved', value: 'Approved' },
    { text: 'Rejected', value: 'Rejected' },
  ];
  var typeFilter = [];

  useEffect(() => {
    dispatch(getTrainingProgressUser(user._id));
  }, [dispatch]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const actionRef = useRef();

  const columns = [
    { title: 'Title', dataIndex: ['training', 'title'], key: 'title' },
    {
      title: 'Start Date',
      dataIndex: ['training', 'fromDate'],
      key: 'fromDate',
      valueType: 'date',
      sorter: (a, b) =>
        moment(a.training.fromDate) - moment(b.training.fromDate),
      render: (text, record) =>
        moment(record.training.fromDate).format('YYYY-MM-DD'),
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
      dataIndex: ['training', 'toDate'],
      key: 'toDate',
      valueType: 'date',
      sorter: (a, b) => moment(a.training.toDate) - moment(b.training.toDate),
      render: (text, record) =>
        moment(record.training.toDate).format('YYYY-MM-DD'),
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
            record.status == 'Pending Approval' ||
            record.status == 'Waiting Completion'
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
          <Link to={`/trainingProgress/view/${record._id}`}>View</Link>
          {(record.status == 'Pending Approval' ||
            record.status == 'Waiting Completion') && (
            <Link to={`/trainingProgress/edit/${record._id}`}>Edit</Link>
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

  let temp = reverseArr(trainingProgresses);

  if (isLoading || !trainingProgresses) return <PageLoading />;

  return (
    <>
      <h2>My Training Progress</h2>
      {!trainingProgresses.length ? (
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
                            moment(item['training']['fromDate']).diff(
                              moment(params[key])
                            ) >= 0
                          );
                        } else if (key == 'endTime') {
                          return (
                            moment(item['training']['toDate']).diff(
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
            />
          </ConfigProvider>
        </>
      )}
    </>
  );
};

export default TrainingProgressHistory;
