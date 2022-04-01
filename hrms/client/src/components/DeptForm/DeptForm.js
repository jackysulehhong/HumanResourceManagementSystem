import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Select, Typography, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import './DeptForm.css';
import { createDept, getDept, updateDept } from '../../actions/depts';
import { useForm } from 'antd/lib/form/Form';
import { PageLoading } from '@ant-design/pro-layout';
import { userInfo } from 'os';
const { Title } = Typography;
const DeptForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [form] = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (id) {
      dispatch(updateDept(id, values));
      Modal.success({
        content: 'Department updated',
        onOk() {
          navigate('/depts');
        },
      });
    } else {
      dispatch(createDept(values));
    }
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(getDept(id)).then((data) => {
        form.setFieldsValue(data);
        setLoading(false);
      });
    }
  }, [dispatch, id]);

  if (loading) return <PageLoading />;
  return (
    <>
      <Title level={2} style={{ textAlign: 'center' }}>
        Create Department
      </Title>
      <Form
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 8 },
        }}
        form={form}
        name='basic'
        onFinish={onFinish}
        autoComplete='off'
      >
        {/** 
        <Form.Item
          label='Code'
          name='code'
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <Input autoFocus placeholder='Please enter code' />
        </Form.Item>
*/}
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Please enter name' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            sm: { offset: 8 },
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button>
            <Link to='/depts'>Back</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DeptForm;
