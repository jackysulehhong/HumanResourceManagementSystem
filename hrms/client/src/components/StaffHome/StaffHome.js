import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Table, Space, Button, List, Grid } from 'antd';

import './StaffHome.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchDeptUsers, getUsers } from '../../actions/users';
import { PageLoading } from '@ant-design/pro-layout';
const { Column } = Table;
const { useBreakpoint } = Grid;
const StaffHome = ({ user }) => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.roles.name == 'supervisor') {
      dispatch(fetchDeptUsers(user.department._id));
    } else {
      dispatch(getUsers());
    }
  }, [dispatch]);
  const navigate = useNavigate();
  const createUser = () => {
    navigate('/users/create');
  };
  const screens = useBreakpoint();
  if (isLoading) return <PageLoading />;

  return (
    <>
      {user.roles.name == 'admin' && (
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={createUser}>Add User</Button>
        </Space>
      )}
      <br />
      {isLoading ? (
        <>
          <Spin size='large' />
        </>
      ) : (
        <>
          <Table dataSource={users} rowKey='_id'>
            <Column title='Employee ID' dataIndex='emp_id' key='emp_id' />
            <Column
              title='Name'
              key='name'
              render={(text, record) => (
                <div>
                  {record.first_name} {record.last_name}
                </div>
              )}
            />
            <Column
              title='Department'
              dataIndex={['department', 'name']}
              key='department.name'
            />
            <Column
              title='Roles'
              dataIndex={['roles', 'name']}
              key='roles.name'
            />
            <Column
              title='Action'
              key='action'
              render={(text, record) => (
                <Space size='middle'>
                  <Button>
                    <Link to={`/users/view/${record._id}`}>View</Link>
                  </Button>
                  {user.roles.name == 'admin' && (
                    <Button>
                      <Link to={`/users/edit/${record._id}`}>Edit</Link>
                    </Button>
                  )}
                </Space>
              )}
            />
          </Table>
          <Button>
            <Link to='/'>Back</Link>
          </Button>
        </>
      )}
    </>
  );
};

export default StaffHome;
