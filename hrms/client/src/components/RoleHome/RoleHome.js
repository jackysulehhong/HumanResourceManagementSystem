import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Table, Space, Button } from 'antd';

import './RoleHome.css';
import { Link, useNavigate } from 'react-router-dom';

import { getRoles } from '../../actions/roles';
const { Column } = Table;
const RoleHome = () => {
  const { roles } = useSelector((state) => state.roles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);
  const navigate = useNavigate();
  const createRole = () => {
    navigate('/roles/create');
  };
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={createRole}>Add Roles</Button>
      </Space>
      <br />
      {!roles.length ? (
        <>
          <Spin size='large' />
        </>
      ) : (
        <>
          <Table dataSource={roles} rowKey='_id'>
            <Column title='Roles' dataIndex='name' key='name' />
            <Column
              title='Action'
              key='action'
              render={(text, record) => (
                <Space size='middle'>
                  <Button>
                    <Link to={`roles/edit/${record._id}`}>Edit</Link>
                  </Button>
                </Space>
              )}
            />
          </Table>
        </>
      )}
      <Button>
        <Link to='/'>Back</Link>
      </Button>
    </>
  );
};

export default RoleHome;
