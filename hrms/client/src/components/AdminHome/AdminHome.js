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
  List,
  Modal,
  Statistic,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllLeaves, fetchLeaveCount } from '../../actions/leaves';
import { fetchTrainingCount } from '../../actions/training';
import { getUsers } from '../../actions/users';
import { getDepts } from '../../actions/depts';
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

import PageLoading from '../PageLoading/PageLoading';
import { UserOutlined } from '@ant-design/icons';
import RcResizeObserver from 'rc-resize-observer';
import { StatisticCard } from '@ant-design/pro-card';
import { FcDepartment } from 'react-icons/fc';

import { FiUsers } from 'react-icons/fi';
import './AdminHome.less';
const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const { leaves, isLoading, leaveCount } = useSelector(
    (state) => state.leaves
  );
  const { users } = useSelector((state) => state.users);
  const { trainingCount } = useSelector((state) => state.trainings);
  const { depts } = useSelector((state) => state.depts);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var max = 0;

  const calcLeaveByMonth = (month, type) => {
    var count = 0;
    leaves.forEach((element) => {
      var d = new Date(element.fromDate);
      if (
        element.status == 'Approved' &&
        element.leaveType._id == type &&
        d.getMonth() == moment().add(month, 'months').month()
      ) {
        max = Math.max(++count, max);
      }
    });
    return count;
  };

  var empLeaveData = [];

  for (var i = -2; i < 4; i++) {
    var temp = { name: moment().add(i, 'months').format('MMMM') };
    leaveTypes.forEach((element) => {
      var leaveName = element.name;
      var countTemp = {};
      countTemp[leaveName] = calcLeaveByMonth(i, element._id);
      temp = { ...temp, ...countTemp };
    });
    empLeaveData.push(temp);
  }

  useEffect(() => {
    dispatch(fetchAllLeaves());
    dispatch(fetchTrainingCount());
    dispatch(fetchLeaveCount());
    dispatch(getUsers());
    dispatch(getDepts());
    dispatch(getLeaveTypes());
  }, [dispatch]);
  const { Divider } = StatisticCard;
  const top3Users = users.slice(0, 3);

  const renderCustomizedLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} fill='black' textAnchor='end' alignmentBaseline='auto'>
        {value}
      </text>
    );
  };
  if (isLoading || !leaves || !leaveCount) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2}>Admin Dashboard</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <Statistic
              title='Users Count'
              value={users.length}
              prefix={<FiUsers />}
            />
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <Statistic
              title='Departments Count'
              value={depts.length}
              prefix={<FcDepartment />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={24}>
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round' style={{ margin: '10px' }}>
                <Link to='/calendar'>View on Calendar</Link>
              </Button>
              <Button type='primary' shape='round' style={{ margin: '10px' }}>
                <Link to='/leaves/list'>More Details...</Link>
              </Button>
            </div>
            <h3>Leaves Taken by Month for All Employees</h3>
            <ResponsiveContainer minHeight={300}>
              <LineChart
                width='100%'
                height='100%'
                data={empLeaveData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey='name' />
                <YAxis domain={[0, max + 2]} allowDecimals={false} />
                <Tooltip />
                <Legend wrapperStyle={{ top: 0, left: 70 }} />
                {leaveTypes.map((entry, index) => (
                  <Line
                    type='monotone'
                    dataKey={entry.name}
                    stroke={entry.color}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <br />
      <Typography.Title level={2}>Overview</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <b>Leaves Taken by Department:</b>
            <Table dataSource={leaveCount} rowKey='_id'>
              <Table.Column
                title='Name'
                dataIndex={['department', 'name']}
                dataKey={['department', 'name']}
              ></Table.Column>
              <Table.Column
                title='Leaves Taken'
                dataIndex='count'
                dataKey='count'
                defaultSortOrder='descend'
                sorter={(a, b) => a.count - b.count}
              ></Table.Column>
            </Table>
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <b>External Trainings Attended by Department:</b>
            <Table dataSource={trainingCount} rowKey='_id'>
              <Table.Column
                title='Name'
                dataIndex={['department', 'name']}
                dataKey={['department', 'name']}
              ></Table.Column>
              <Table.Column
                title='Trainings Organized'
                dataIndex='count'
                dataKey='count'
                defaultSortOrder='descend'
                sorter={(a, b) => a.count - b.count}
              ></Table.Column>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
