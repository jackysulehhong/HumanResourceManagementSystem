import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  Typography,
  Empty,
  Table,
  Tag,
  Space,
  Button,
  Descriptions,
  Alert,
} from 'antd';
import { Link } from 'react-router-dom';
import { fetchAllLeaves, fetchTodayLeaves } from '../../actions/leaves';
import { fetchTodayTrainings } from '../../actions/training';
import { getLeaveTypes } from '../../actions/leaveTypes';
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
  PieChart,
  Pie,
  LineChart,
  CartesianGrid,
  Line,
} from 'recharts';

import './Home.less';
import PageLoading from '../PageLoading/PageLoading';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const Home = ({ user }) => {
  const screens = useBreakpoint();
  const { leaves, isLoading, todayLeaves } = useSelector(
    (state) => state.leaves
  );
  const { trainings } = useSelector((state) => state.trainings);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLeaves());
    dispatch(fetchTodayLeaves());
    dispatch(fetchTodayTrainings());
    dispatch(getLeaveTypes());
  }, [dispatch]);

  const leaveData = [];

  user.leaveCount.forEach((element) => {
    var temp = { name: element.leaveType.name, value: element.count };
    leaveData.push(temp);
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const checkSelfLeave = () => {
    if (todayLeaves.some((e) => e.user._id === user._id)) return true;
    else return false;
  };

  var totalTraining = user.trainingHours,
    completedTraining = user.completedHours;
  var trainingNeeded = totalTraining - completedTraining;
  var completionPercentage = completedTraining / totalTraining;
  trainingNeeded = trainingNeeded < 0 ? '' : trainingNeeded;

  const trainingData = [
    { name: 'Hours Completed', value: completedTraining },
    { name: 'Hours Required', value: trainingNeeded },
  ];

  const COLORS1 = ['#0088FE', '#2ce654', '#ff00f0'];
  const COLORS2 = ['#0088FE', '#de0b0b'];

  const renderCustomizedLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} fill='black' textAnchor='end' alignmentBaseline='auto'>
        {value}
      </text>
    );
  };
  if (isLoading || !leaves || !todayLeaves || !trainings)
    return <PageLoading />;

  return (
    <>
      <Typography.Title level={2}>Personal Dashboard</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12} lg={16}>
          <Card bordered>
            <Descriptions
              title='Profile Details'
              bordered
              column={{ sm: 2, xs: 1 }}
              layout={screens.md ? 'horizontal' : 'vertical'}
            >
              <Descriptions.Item label='Name' span={3}>
                {`${user.first_name} ${user.last_name}`}
              </Descriptions.Item>
              <Descriptions.Item label='Department' span={2}>
                {user.department.name}
              </Descriptions.Item>
              {user.leaveCount.map((entry, index) => (
                <Descriptions.Item
                  label={entry.leaveType.name}
                  span={2}
                  key={entry.leaveType._id}
                >
                  {entry.count}
                </Descriptions.Item>
              ))}
              <Descriptions.Item label='Total Training Hours Required' span={1}>
                {totalTraining}
              </Descriptions.Item>
              <Descriptions.Item label='Training Hours Completed' span={1}>
                {completedTraining}
              </Descriptions.Item>
            </Descriptions>
            <br />
            {checkSelfLeave() && (
              <>
                <Alert message='You are on leave today.' type='info' showIcon />
                <br />
              </>
            )}
            {completionPercentage <= 0.25 ? (
              <Alert
                message='Low Training Hours Completed'
                description='Please participate in more trainings in order to reach your quota!'
                type='error'
              />
            ) : completionPercentage < 0.75 ? (
              <Alert
                message='Moderate Training Hours Completed'
                description='Keep up the good work! Participate in more trainings to reach your quota.'
                type='warning'
              />
            ) : completionPercentage < 1 ? (
              <Alert
                message='Great Training Hours Completed'
                description='Almost there! Keep participating in trainings to reach your quota!'
                type='success'
              />
            ) : (
              <Alert
                message='Training Quota Reached'
                description='Congratulations! You have reached your training quota!'
                type='success'
              />
            )}
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12} lg={8}>
          <Card bordered>
            <h4>Your Leaves Remaining</h4>
            <ResponsiveContainer minHeight={180}>
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
                      fill={COLORS1[index % COLORS1.length]}
                    />
                  ))}
                </Bar>
                <YAxis />
                <XAxis dataKey='name' />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
            <h4>Your Training Hours</h4>
            <ResponsiveContainer minWidth={200} minHeight={210}>
              <PieChart>
                <Pie
                  data={trainingData}
                  innerRadius={40}
                  outerRadius={60}
                  fill='#8884d8'
                  paddingAngle={3}
                  startAngle={-270}
                  dataKey='value'
                  isAnimationActive={false}
                  label={renderCustomizedLabel}
                  labelLine={false}
                >
                  {trainingData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS2[index % COLORS2.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <br />
      <Typography.Title level={2}>Today's Information</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round'>
                <Link to='/leaves/home'>Leaves Dashboard</Link>
              </Button>
            </div>
            <b>Currently on Leave:</b>
            {todayLeaves &&
              (!todayLeaves.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={todayLeaves} rowKey='_id'>
                    <Table.Column
                      title='Name'
                      dataIndex='name'
                      render={(text, record) => {
                        return `${record.user.first_name} ${record.user.last_name}`;
                      }}
                    ></Table.Column>
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
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round'>
                <Link to='/training/home'>Training Dashboard</Link>
              </Button>
            </div>
            <b>Internal Trainings Today:</b>
            {trainings &&
              (!trainings.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={trainings} rowKey='_id'>
                    <Table.Column
                      title='Organizer'
                      dataIndex='organizer'
                      key='organizer'
                    ></Table.Column>
                    <Table.Column
                      title='Tite'
                      dataIndex='title'
                      key='title'
                    ></Table.Column>
                    <Table.Column
                      title='Action'
                      key='action'
                      render={(text, record) => (
                        <Space size='middle' key={record._id}>
                          <Link to={`/training/view/${record._id}`}>View</Link>
                        </Space>
                      )}
                    ></Table.Column>
                  </Table>
                </>
              ))}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;

/**<h4>Leaves Taken by Month for All Employees</h4>
            <ResponsiveContainer minHeight={425}>
              <LineChart
                width={500}
                height={300}
                data={empLeaveData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey='name' />
                <YAxis domain={[0, max + 2]} />
                <Tooltip />
                <Legend wrapperStyle={{ top: 0, left: 70 }} />
                <Line
                  type='monotone'
                  dataKey='Casual'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='Medical' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
            <Button type='primary'>
              <Link to='/calendar'>View on Calendar</Link>
            </Button> */
