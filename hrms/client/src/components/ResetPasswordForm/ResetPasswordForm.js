import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  message,
  Alert,
  Typography,
  Modal,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../actions/auth';
import { Link, useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const onFinish = async (values) => {
    dispatch(resetPassword({ email: values.email })).then(() => {
      Modal.success({
        content: 'Email sent!',
        onOk: () => {
          navigate('/auth');
        },
      });
    });
  };

  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Reset Password
      </Typography.Title>
      <Form
        name='basic'
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 8 },
        }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          initialValue=''
          rules={[
            {
              required: true,
              type: 'email',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Please enter email' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            sm: { offset: 8 },
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center' }}>
        <Link to='/auth'>Back to Login</Link>
      </div>
    </>
  );
};

export default ResetPasswordForm;
