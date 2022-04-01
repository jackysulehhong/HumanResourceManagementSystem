import React, { useEffect, useState } from 'react';

import './StaffDetail.css';
import { useDispatch, useSelector } from 'react-redux';

import { Descriptions, Badge, Button } from 'antd';
import { getUser } from '../../actions/users';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import PageLoading from '../PageLoading/PageLoading';
const StaffDetail = () => {
  const screens = useBreakpoint();
  const { user: u, isLoading } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    await dispatch(getUser(id));
    setLoading(false);
  };
  if (loading) return <PageLoading />;

  return (
    <>
      <Descriptions
        title='User Info'
        bordered
        layout={screens.md ? 'horizontal' : 'vertical'}
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label='Employee ID'>{u.emp_id}</Descriptions.Item>
        <Descriptions.Item label='First Name'>{u.first_name}</Descriptions.Item>
        <Descriptions.Item label='Last Name'>{u.last_name}</Descriptions.Item>

        <Descriptions.Item label='Email'>{u.email}</Descriptions.Item>
        <Descriptions.Item label='Department'>
          {u.department?.name}
        </Descriptions.Item>
        <Descriptions.Item label='Employment Date'>
          {moment(u.employment_date).format('YYYY-MM-DD')}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title='Leave Balance' bordered>
        {u?.leaveCount?.map((leave) => (
          <Descriptions.Item
            key={leave.leaveType._id}
            label={leave.leaveType.name}
          >
            {leave.count}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <br />
      <br />
      <br />
      <Button>
        <Link to='/users'>Back</Link>
      </Button>
    </>
  );
};

export default StaffDetail;
