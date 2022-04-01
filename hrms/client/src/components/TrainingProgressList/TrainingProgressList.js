import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveRequests } from '../../actions/leaves';
import { getLeaveTypes } from '../../actions/leaveTypes';
import { getDepts } from '../../actions/depts';
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
  Input,
  Typography,
} from 'antd';
import {
  PlusOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';

import PageLoading from '../PageLoading/PageLoading';
import { ProFormDateRangePicker } from '@ant-design/pro-form';
import {
  getTrainingProgressDept,
  getTrainingProgresses,
} from '../../actions/trainingProgress';
const { Text } = Typography;

const TrainingProgressList = ({ user }) => {
  const { depts } = useSelector((state) => state.depts);
  const { trainingProgresses, isLoading } = useSelector(
    (state) => state.trainingProgress
  );
  const [loading, setLoading] = useState(false);
  // const user = JSON.parse(localStorage.getItem('profile')).result;
  const navigate = useNavigate();
  var deptFilters = [];
  const statusFilter = [
    { text: 'Wating Completion', value: 'Waiting Completion' },
    { text: 'Pending Approval', value: 'Pending Approval' },
    { text: 'Approved', value: 'Approved' },
    { text: 'Rejected', value: 'Rejected' },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getDepts());
    if (user.roles.name == 'admin') {
      dispatch(getTrainingProgresses()).then(() => setLoading(false));
    } else {
      dispatch(getTrainingProgressDept(user.department._id)).then(() =>
        setLoading(false)
      );
    }
  }, [dispatch]);
  if (user.roles.name == 'admin')
    depts.map((element) => {
      deptFilters.push({ text: element.name, value: element.name });
    });

  const capitalizeFirstLetter = (string) => {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  };

  const filterResult = trainingProgresses.filter(
    (trainingProgresses) => trainingProgresses.user._id != user._id
  );

  const columns = [
    {
      title: 'Employee Name',
      dataIndex: 'user',
      key: 'user',
      valueType: 'text',
      render: (text, record) => `${text.first_name} ${text.last_name}`,
    },
    {
      title: 'Department',
      dataIndex: ['user', 'department', 'name'],
      key: 'department',
      hideInSearch: true,
      filters: deptFilters,
      onFilter: (value, record) =>
        record.user.department.name.indexOf(value) === 0,
      //  render: (text, record) => `${record.department.name}`,
    },
    {
      title: 'Training Type',
      dataIndex: ['training', 'trainingType'],
      key: 'trainingType',
      filters: [
        { text: 'Internal', value: 'Internal' },
        { text: 'External', value: 'External' },
      ],
      hideInSearch: true,
      onFilter: (value, record) =>
        record.training.trainingType.indexOf(value) === 0,
    },
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
      hideInSearch: true,
      filters: statusFilter,
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
        </Space>
      ),
    },
  ];
  const actionRef = useRef();

  const reverseArr = (input) => {
    var ret = new Array();
    if (input)
      for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
      }
    return ret;
  };
  let temp = reverseArr(filterResult);
  if (isLoading) return <PageLoading />;
  return (
    <>
      <h2>Employee Training Completion</h2>
      {!filterResult.length ? (
        <Empty></Empty>
      ) : (
        <>
          <ConfigProvider locale={enUSIntl}>
            <ProTable
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

export default TrainingProgressList;
