import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveRequests, fetchUpcomingLeaves } from '../../actions/leaves';
import { getLeaveTypes } from '../../actions/leaveTypes';
import {
  Spin,
  Table,
  Space,
  Button,
  Badge,
  Empty,
  Tag,
  Row,
  Col,
  Card,
  Typography,
  Descriptions,
} from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import recharts, {
  BarChart,
  Bar,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  YAxis,
  XAxis,
} from 'recharts';

import './LeaveHome.css';
import { set } from 'lodash';
import PageLoading from '../PageLoading/PageLoading';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
const { Text } = Typography;

const LeaveHome = () => {
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const { leaves, upcomingLeave, isLoading } = useSelector(
    (state) => state.leaves
  );
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var count = 0;

  const leaveData = [];

  user.leaveCount.forEach((element) => {
    var temp = { name: element.leaveType.name, value: element.count };
    leaveData.push(temp);
  });
  const COLORS = ['#0088FE', '#2ce654', '#ff00f0'];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    dispatch(fetchUpcomingLeaves(user._id));
    dispatch(getLeaveTypes());
    if (user.roles.name != 'staff')
      dispatch(
        fetchLeaveRequests(user.roles.name, user._id, user.department.name)
      );
  }, [dispatch]);

  for (var element of leaves) {
    if (element.status == 'Pending') count++;
  }

  if (isLoading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2}>Current Leave Status</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} md={12} lg={16}>
          <Card bordered>
            <Descriptions
              title='Profile Details'
              bordered
              column={{ sm: 2, xs: 1 }}
              layout={screens.md ? 'horizontal' : 'vertical'}
            >
              <Descriptions.Item label='Name' span={2}>
                {`${user.first_name} ${user.last_name}`}
              </Descriptions.Item>
              <Descriptions.Item label='Department' span={2}>
                {user.department.name}
              </Descriptions.Item>
              {user.leaveCount.map((entry, index) => (
                <Descriptions.Item
                  label={entry.leaveType.name}
                  span={1}
                  key={entry.leaveType._id}
                >
                  {entry.count}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} md={12} lg={8}>
          <Card bordered>
            <ResponsiveContainer minHeight={215}>
              <BarChart
                data={leaveData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <Bar fill='#0088FE' dataKey='value'>
                  {leaveData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
                <YAxis />
                <XAxis dataKey='name' />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <br />
      <Typography.Title level={2}>Quick Overview</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round' style={{ margin: '10px' }}>
                <Link to='/leaves/create'>To Leave Application</Link>
              </Button>
              <Button type='primary' shape='round' style={{ margin: '10px' }}>
                <Link to='/leaves/history'>To Leave History</Link>
              </Button>
            </div>
            <b>Upcoming Leaves:</b>
            {upcomingLeave &&
              (!upcomingLeave.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={upcomingLeave} rowKey='_id'>
                    <Table.Column
                      title='Leave Type'
                      dataIndex='leaveType'
                      key='leaveType'
                      render={(text, record) => (
                        <Tag color={text.color}>
                          {capitalizeFirstLetter(text.code)}
                        </Tag>
                      )}
                    ></Table.Column>
                    <Table.Column
                      title='Reason'
                      dataIndex='reason'
                      key='reason'
                      //render={(text, record) => <Text ellipsis>{text}</Text>}
                    ></Table.Column>
                    <Table.Column
                      title='Date'
                      dataIndex='date'
                      key='date'
                      render={(text, record) =>
                        `${moment(record.fromDate).format(
                          'YYYY-MM-DD'
                        )} - ${moment(record.toDate).format('YYYY-MM-DD')}`
                      }
                    ></Table.Column>
                  </Table>
                </>
              ))}
            <br />
          </Card>
        </Col>
        {user.roles.name != 'staff' && (
          <Col className='gutter-row' xs={24} sm={12}>
            <Card bordered>
              <Space
                wrap
                align='baseline'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography.Text>
                  Pending Leave Requests:{` ${count}`}
                </Typography.Text>

                <Button type='primary' shape='round'>
                  <Link to='/leaves/list'>To Requests</Link>
                </Button>
              </Space>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
};

export default LeaveHome;
