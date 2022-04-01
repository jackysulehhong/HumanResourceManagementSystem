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
  Form,
  Select,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllLeaves, fetchTodayLeaves } from '../../actions/leaves';
import { fetchDeptUsers } from '../../actions/users';
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
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const Home = ({ user }) => {
  const screens = useBreakpoint();

  const { leaves, isLoading, todayLeaves } = useSelector(
    (state) => state.leaves
  );
  const { users } = useSelector((state) => state.users);
  const { depts } = useSelector((state) => state.depts);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const { Option } = Select;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  var deptId;

  useEffect(() => {
    dispatch(fetchAllLeaves());
    dispatch(fetchTodayLeaves());
    dispatch(getLeaveTypes());
    dispatch(fetchDeptUsers(user.department._id)).then(() => {
      setIsloading(false);
    });

    if (user.roles.name == 'admin') {
      setIsModalVisible(true);
      dispatch(getDepts());
    }
  }, [dispatch]);
  const onFinish = (values) => {
    dispatch(fetchDeptUsers(values.department));

    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (!users.length) deptId = user.department._id;
  else deptId = users[0].department._id;
  const filterDept = todayLeaves.filter(
    (todayLeaves) => todayLeaves.department._id == deptId
  );

  users.sort(function (a, b) {
    return b.completedHours - a.completedHours;
  });
  const top3Users = users.slice(0, 3);

  var supervisorNames = [];
  users.map((element) => {
    if (element.roles.name == 'supervisor')
      supervisorNames.push(`${element.first_name} ${element.last_name}`);
  });

  var max = 0;

  const calcLeaveByMonth = (month, type) => {
    var count = 0;
    leaves.forEach((element) => {
      var d = new Date(element.fromDate);
      if (
        element.status == 'Approved' &&
        element.department._id == deptId &&
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
  const renderCustomizedLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} fill='black' textAnchor='end' alignmentBaseline='auto'>
        {value}
      </text>
    );
  };
  if (loading) return <PageLoading />;
  return (
    <>
      <Modal
        title='Select Department to View'
        visible={isModalVisible}
        footer={[
          <Button onClick={() => navigate(-1)}>Back</Button>,
          <Button form='myForm' key='submit' htmlType='submit'>
            Submit
          </Button>,
        ]}
        onCancel={handleCancel}
      >
        <Form id='myForm' onFinish={onFinish}>
          <Form.Item
            label='Departments'
            name='department'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder='Please choose a department'>
              {depts.map((depts) => (
                <Option key={depts._id} value={depts._id}>
                  {depts.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Typography.Title level={2}>Department Dashboard</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <Descriptions
              layout={screens.md ? 'horizontal' : 'vertical'}
              title='Department Details'
              bordered
              contentStyle={{ wordBreak: 'keep-all' }}
              column={{ sm: 3, xs: 1 }}
            >
              <Descriptions.Item label='Name' span={3}>
                {users[0].department.name}
              </Descriptions.Item>

              <Descriptions.Item label='Supervisors' span={3}>
                <List
                  dataSource={supervisorNames}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text mark></Typography.Text> {item}
                    </List.Item>
                  )}
                />
              </Descriptions.Item>
              <Descriptions.Item label='No. of Staff' span={3}>
                {users.length}
              </Descriptions.Item>
            </Descriptions>
            {user.roles.name == 'admin' && (
              <>
                <br />
                <Button type='primary' onClick={showModal}>
                  Change Departments
                </Button>
              </>
            )}
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <div style={{ textAlign: 'right' }}>
              <Button type='primary' shape='round'>
                <Link to='/leaves/list'>To Leaves</Link>
              </Button>
            </div>
            <h4>Leaves Taken by Month for Employees in Department</h4>
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
      <Typography.Title level={2}>Department Overview</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <b>Currently on Leave in Department:</b>
            {filterDept &&
              (!filterDept.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={filterDept} rowKey='_id'>
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
                      title='Action'
                      key='action'
                      render={(text, record) => (
                        <Space size='middle' key={record._id}>
                          <Link to={`/leaves/view/${record._id}`}>View</Link>
                        </Space>
                      )}
                    ></Table.Column>
                  </Table>
                </>
              ))}
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} sm={12}>
          <Card bordered>
            <b>Top Training Hours Completed:</b>
            {top3Users &&
              (!top3Users.length ? (
                <Empty></Empty>
              ) : (
                <>
                  <Table dataSource={top3Users} rowKey='_id'>
                    <Table.Column
                      title='Name'
                      dataIndex='name'
                      render={(text, record) => {
                        return `${record.first_name} ${record.last_name}`;
                      }}
                    ></Table.Column>
                    <Table.Column
                      title='Hours Completed'
                      dataIndex='completedHours'
                      key='completedHours'
                      sorter={(a, b) => a.completedHours - b.completedHours}
                      defaultSortOrder='desc'
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
/**var pass2MonthC = 0,
    pass2MonthM = 0,
    pass1MonthC = 0,
    pass1MonthM = 0,
    currentMonthC = 0,
    currentMonthM = 0,
    next1MonthC = 0,
    next1MonthM = 0,
    next2MonthC = 0,
    next2MonthM = 0,
    next3MonthC = 0,
    next3MonthM = 0,
    max = 0; 
    
    
    leaves.map((element) => {
    var d = new Date(element.fromDate);
    if (element.status == 'approve' && element.department._id == deptId) {
      if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().subtract(2, 'months').month()
      )
        max = Math.max(++pass2MonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().subtract(2, 'months').month()
      )
        max = Math.max(++pass2MonthM, max);
      else if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().subtract(1, 'months').month()
      )
        max = Math.max(++pass1MonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().subtract(1, 'months').month()
      )
        max = Math.max(++pass1MonthM, max);
      else if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().month()
      )
        max = Math.max(++currentMonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().month()
      )
        max = Math.max(++currentMonthM, max);
      else if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().add(1, 'months').month()
      )
        max = Math.max(++next1MonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().add(1, 'months').month()
      )
        max = Math.max(++next1MonthM, max);
      else if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().add(2, 'months').month()
      )
        max = Math.max(++next2MonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().add(2, 'months').month()
      )
        max = Math.max(++next2MonthM, max);
      else if (
        element.leaveType == 'casual' &&
        d.getMonth() == moment().add(3, 'months').month()
      )
        max = Math.max(++next3MonthC, max);
      else if (
        element.leaveType == 'medical' &&
        d.getMonth() == moment().add(3, 'months').month()
      )
        max = Math.max(++next3MonthM, max);
    }
  });

  const empLeaveData1 = [
    {
      name: moment().subtract(2, 'months').format('MMMM'),
      Casual: pass2MonthC,
      Medical: pass2MonthM,
    },
    {
      name: moment().subtract(1, 'months').format('MMMM'),
      Casual: pass1MonthC,
      Medical: pass1MonthM,
    },
    {
      name: moment().format('MMMM'),
      Casual: currentMonthC,
      Medical: currentMonthM,
    },
    {
      name: moment().add(1, 'months').format('MMMM'),
      Casual: next1MonthC,
      Medical: next1MonthM,
    },
    {
      name: moment().add(2, 'months').format('MMMM'),
      Casual: next2MonthC,
      Medical: next2MonthM,
    },
    {
      name: moment().add(3, 'months').format('MMMM'),
      Casual: next3MonthC,
      Medical: next3MonthM,
    },
  ];*/
