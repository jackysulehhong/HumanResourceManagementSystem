import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExtTraining,
  fetchUpcomingTraining,
} from '../../actions/training';
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
  Alert,
  Descriptions,
} from 'antd';

import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import recharts, {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

import './TrainingHome.css';
import { set } from 'lodash';
import PageLoading from '../PageLoading/PageLoading';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const TrainingHome = ({ socket, user }) => {
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const { trainings, upcomingTraining, isLoading } = useSelector(
    (state) => state.trainings
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var count = 0;

  var totalTraining = user.trainingHours,
    completedTraining = user.completedHours;
  var trainingNeeded = totalTraining - completedTraining;
  var completionPercentage = completedTraining / totalTraining;
  trainingNeeded = trainingNeeded < 0 ? '' : trainingNeeded;

  const data = [
    { name: 'Hours Completed', value: completedTraining },
    { name: 'Hours Required', value: trainingNeeded },
  ];
  const COLORS = ['#0088FE', '#de0b0b'];

  const renderCustomizedLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} fill='black' textAnchor='end' alignmentBaseline='auto'>
        {value}
      </text>
    );
  };

  useEffect(() => {
    dispatch(fetchUpcomingTraining(user._id));
    if (user.roles.name != 'staff')
      dispatch(
        fetchExtTraining(user.roles.name, user._id, user.department.name)
      );
  }, [dispatch]);

  for (var element of trainings) {
    if (element.status == 'Pending') count++;
  }

  if (isLoading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2}>Current Training Status</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} md={12} lg={16}>
          <Card bordered>
            <Descriptions
              title='Profile Details'
              bordered
              layout={screens.md ? 'horizontal' : 'vertical'}
              column={{ sm: 2, xs: 1 }}
            >
              <Descriptions.Item label='Name' span={2}>
                {`${user.first_name} ${user.last_name}`}
              </Descriptions.Item>
              <Descriptions.Item label='Department' span={2}>
                {user.department.name}
              </Descriptions.Item>
              <Descriptions.Item label='Total Training Hours Required' span={1}>
                {user.trainingHours}
              </Descriptions.Item>
              <Descriptions.Item label='Training Hours Completed' span={1}>
                {user.completedHours}
              </Descriptions.Item>
            </Descriptions>
            <br />
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
        <Col className='gutter-row' xs={24} md={12} lg={8}>
          <Card bordered>
            <ResponsiveContainer minWidth={200} minHeight={300}>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  fill='#8884d8'
                  paddingAngle={3}
                  startAngle={-270}
                  dataKey='value'
                  isAnimationActive={false}
                  label={renderCustomizedLabel}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
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
      <Typography.Title level={2}>Quick Overview</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className='gutter-row'
          xs={24}
          sm={user.roles.name != 'staff' ? 12 : 24}
        >
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round'>
                <Link to='/training/history'>To Training History</Link>
              </Button>
            </div>
            <b>Upcoming Trainings:</b>
            {upcomingTraining &&
              (!upcomingTraining.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={upcomingTraining} rowKey='_id'>
                    <Table.Column
                      title='Organizer'
                      dataIndex='organizer'
                      key='organizer'
                    ></Table.Column>
                    <Table.Column
                      title='Title'
                      dataIndex='title'
                      key='title'
                    ></Table.Column>
                    <Table.Column
                      title='Type'
                      dataIndex='trainingType'
                      key='trainingType'
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
        {user.roles.name != 'staff' && (
          <Col className='gutter-row' xs={24} sm={12}>
            <Card bordered>
              <Space
                wrap
                align='baseline'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography.Text strong>
                  Pending External Training Requests:{` ${count}`}
                </Typography.Text>

                <Button type='primary' shape='round'>
                  <Link to='/training/extList'>To Requests</Link>
                </Button>
              </Space>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
};

export default TrainingHome;
