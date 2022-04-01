import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  Modal,
  Image,
  Space,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './Auth.css';
import { signIn } from '../../actions/auth';
const { Title } = Typography;
const Auth = () => {
  const { error, success, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const result = await dispatch(signIn(values, navigate));
    if (!result) {
      Modal.error({ content: error });
    }
  };

  return (
    <>
      <Image
        src='/INTI_logo.png'
        preview={false}
        // style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%',
        }}
      />
      <Title level={2} style={{ textAlign: 'center', padding: '20px' }}>
        Sign In
      </Title>

      <Form
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 8 },
        }}
        name='basic'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}
        >
          <Input autoFocus />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
            },
            {
              pattern:
                '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
              message:
                'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character',
            },
          ]}
        >
          <Input.Password placeholder='Please enter password' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            sm: { offset: 8 },
          }}
        >
          <Button type='primary' htmlType='submit'>
            Sign In
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center' }}>
        <Link to='/resetPassword'>Forgot Password</Link>
      </div>
    </>
  );
};

export default Auth;
