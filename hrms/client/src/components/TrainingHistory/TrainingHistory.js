import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExtTrainingHistory,
  fetchTrainingHistory,
} from '../../actions/training';
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
} from 'antd';
import {
  PlusOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import PageLoading from '../PageLoading/PageLoading';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';

const TrainingHistory = ({ socket, user }) => {
  const { trainingHistory, extTrainings, isLoading } = useSelector(
    (state) => state.trainings
  );
  const { depts } = useSelector((state) => state.depts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExtTrainingHistory(user._id));
    dispatch(fetchTrainingHistory(user._id));
    dispatch(getDepts());
  }, [dispatch]);

  var deptFilters = [];
  const statusFilter = [
    { text: 'Pending', value: 'Pending' },
    { text: 'Approved', value: 'Approved' },
    { text: 'Rejected', value: 'Rejected' },
  ];
  const calcAttendance = (data) => {
    var temp = data.filter(function (item) {
      return item.status == 'Approved';
    }).length;
    return temp;
  };
  const formatDuration = (data) => {
    if (moment.duration(data, 'hours').asDays() >= 1)
      return (
        Math.floor(data) +
        moment
          .utc(moment.duration(data, 'hours').asMilliseconds())
          .format(' [hours] mm [minutes]')
      );
    else
      return moment
        .utc(moment.duration(data, 'hours').asMilliseconds())
        .format('H [hours] mm [minutes]');
  };

  depts.forEach((element) => {
    deptFilters.push({ text: element.name, value: element.name });
  });

  const columns1 = [
    {
      title: 'Organizer',
      dataIndex: 'organizer',
      key: 'organizer',
      valueType: 'text',
    },
    { title: 'Title', dataIndex: 'title', key: 'title' },
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
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      hideInSearch: true,
      render: (text, record) => `${record.fromTime} - ${record.toTime}`,
    },
    {
      title: 'Total Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (text, record) => formatDuration(record.duration),
      hideInSearch: true,
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
          <Link to={`/training/view/${record._id}`}>View</Link>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      title: 'Organizer',
      dataIndex: 'organizer',
      key: 'organizer',
      valueType: 'text',
    },
    { title: 'Title', dataIndex: 'title', key: 'title' },
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
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      hideInSearch: true,
      render: (text, record) => `${record.fromTime} - ${record.toTime}`,
    },
    {
      title: 'Total Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (text, record) => formatDuration(record.duration),
      hideInSearch: true,
    },
    {
      title: 'Attendants',
      dataIndex: 'attendants',
      key: 'attendants',
      hideInSearch: true,
      sorter: (a, b) =>
        calcAttendance(a.attendants) - calcAttendance(b.attendants),
      render: (text, record) => calcAttendance(record.attendants),
    },
    {
      title: 'Action',
      key: '_id',
      valueType: 'option',
      render: (text, record) => (
        <Space size='middle' key={record._id}>
          <Link to={`/training/view/${record._id}`}>View</Link>
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

  let extReverse = reverseArr(extTrainings);
  let historyReverse = reverseArr(trainingHistory);

  if (isLoading || !trainingHistory || !extTrainings) return <PageLoading />;

  return (
    <>
      <h3>My External Training Requests</h3>
      {extTrainings &&
        (!extTrainings.length ? (
          <Empty></Empty>
        ) : (
          <>
            <ConfigProvider locale={enUSIntl}>
              <ProTable
                columns={columns1}
                actionRef={actionRef}
                request={(params, sorter, filter) => {
                  let dataSource = extReverse;
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
                  pageSize: 5,
                  showQuickJumper: true,
                }}
                search={{
                  layout: 'vertical',
                  defaultCollapsed: true,
                  span: 6,
                }}
                dateFormatter='string'
                toolbar={{
                  title: 'Tips:',
                  tooltip:
                    'Use the search bar above or filter icons on the columns for easy record finding',
                }}
                toolBarRender={() => [
                  <Space>
                    <Button type='primary' shape='round'>
                      <Link to='/training/submitExt'>
                        To External Training Application
                      </Link>
                    </Button>
                  </Space>,
                ]}
              />
            </ConfigProvider>
            <br />
          </>
        ))}

      <h3>My Attending Internal Training</h3>
      {!trainingHistory.length ? (
        <Empty></Empty>
      ) : (
        <>
          <ConfigProvider locale={enUSIntl}>
            <ProTable
              columns={columns2}
              actionRef={actionRef}
              request={(params, sorter, filter) => {
                let dataSource = historyReverse;
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
                pageSize: 5,
                showQuickJumper: true,
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

export default TrainingHistory;

/**<Table
              dataSource={extTrainings}
              rowKey='_id'
              style={{ overflowX: 'scroll' }}
            >
              <Table.Column
                title='Organizer'
                dataIndex='organization'
                key='organization'
              ></Table.Column>
              <Table.Column
                title='Title'
                dataIndex='title'
                key='title'
              ></Table.Column>
              <Table.Column
                title='Date'
                dataIndex='date'
                key='date'
                render={(text, record) => moment(text).format('YYYY-MM-DD')}
              ></Table.Column>
              <Table.Column
                title='Time'
                dataIndex='time'
                key='time'
              ></Table.Column>
              <Table.Column
                title='Duration(hours)'
                dataIndex='duration'
                key='duration'
              ></Table.Column>
              <Table.Column
                title='Status'
                dataIndex='status'
                key='status'
                render={(text, record) => (
                  <Badge
                    status={
                      record.status == 'pending'
                        ? 'processing'
                        : record.status == 'approve'
                        ? 'success'
                        : 'error'
                    }
                    text={record.status}
                  />
                )}
              ></Table.Column>
              <Table.Column
                title='Action'
                key='action'
                render={(text, record) => (
                  <Space size='middle' key={record._id}>
                    <Link to={`view/${record._id}`}>View</Link>
                  </Space>
                )}
              ></Table.Column>
            </Table> 
            
            
            
            <Table
            dataSource={trainings}
            rowKey='_id'
            style={{ overflowX: 'scroll' }}
          >
            <Table.Column
              title='Organizer'
              dataIndex='user'
              key='user._id'
              render={(text, record) => `${text.first_name} ${text.last_name}`}
            ></Table.Column>
            <Table.Column
              title='Department ID'
              dataIndex='department'
              key='department._id'
              render={(text, record) => `${text.name}`}
            ></Table.Column>
            <Table.Column
              title='Title'
              dataIndex='title'
              key='title'
            ></Table.Column>
            <Table.Column
              title='Date'
              dataIndex='date'
              key='date'
              render={(text, record) => moment(text).format('YYYY-MM-DD')}
            ></Table.Column>
            <Table.Column
              title='Time'
              dataIndex='time'
              key='time'
            ></Table.Column>
            <Table.Column
              title='Duration(hours)'
              dataIndex='duration'
              key='duration'
            ></Table.Column>
            <Table.Column
              title='Action'
              key='action'
              render={(text, record) => (
                <Space size='middle' key={record._id}>
                  <Link to={`view/${record._id}`}>View</Link>
                </Space>
              )}
            ></Table.Column>
          </Table>*/
