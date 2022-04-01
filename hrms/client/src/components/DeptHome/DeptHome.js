import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Table, Space, Button } from 'antd';

import './DeptHome.css';
import { Link, useNavigate } from 'react-router-dom';
import { deleteDept, getDepts } from '../../actions/depts';
const { Column } = Table;
const DeptHome = () => {
  const edit = (id) => {
    // dispatch(deleteDept(rec._id));
    navigate(`/depts/edit/${id}`);
  };
  const { depts } = useSelector((state) => state.depts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepts());
  }, [dispatch]);
  const navigate = useNavigate();
  const createDept = () => {
    navigate('/depts/create');
  };
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={createDept}>Create New Department</Button>
      </Space>

      {!depts.length ? (
        <>
          <br />
          <Spin size='large' />
        </>
      ) : (
        <>
          <Table dataSource={depts} rowKey='_id'>
            <Column title='Name' dataIndex='name' key='name' />
            <Column
              title='Action'
              key='action'
              render={(text, record) => (
                <Space size='middle'>
                  <Button onClick={() => edit(record._id)}>edit</Button>
                </Space>
              )}
            />
          </Table>
        </>
      )}
    </>
  );
};

export default DeptHome;
