import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Table, Space, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { getPolicies } from '../../actions/policy';
import { PageLoading } from '@ant-design/pro-layout';
const { Column } = Table;
const RoleHome = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { policies } = useSelector((state) => state.policy);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    await dispatch(getPolicies());
    setLoading(false);
  };

  const createPolicy = () => {
    navigate('/policy/create');
  };
  if (loading) return <PageLoading />;

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={createPolicy}>Add Policy</Button>
      </Space>
      <br />

      <>
        <Table dataSource={policies} rowKey='_id'>
          <Column title='Name' dataIndex='name' key='name' />
          <Column
            title='Departments'
            dataIndex='departments'
            key='departments'
            render={(text, record) =>
              text.map((dept, i) => <p key={dept._id}>{dept.name}</p>)
            }
          />
          <Column
            title='Policy'
            dataIndex='lists'
            key='lists'
            render={(text, record) =>
              text.map((list, i) => (
                <>
                  <b>{list.leavetype.map((lt) => `${lt.name}, `)}</b>
                  {list.stacked ? <p>Stacked</p> : <></>}
                  {list.policy.map((p, i) => (
                    <p
                      key={i}
                    >{`${p.condition1} ${p.year} years, increase by ${p.increase}`}</p>
                  ))}
                </>
              ))
            }
          />
          <Column
            title='Action'
            key='action'
            render={(text, record) => (
              <Space size='middle'>
                <Button>
                  <Link to={`/policy/edit/${record._id}`}>Edit</Link>
                </Button>
              </Space>
            )}
          />
        </Table>
      </>

      <Button>
        <Link to='/'>Back</Link>
      </Button>
    </>
  );
};

export default RoleHome;
