import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, resetPassword } from '../../actions/auth';
import { Typography, Form, Input, Button } from 'antd';
const ChangePasswordForm = ({ user }) => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.users);
  const onFinish = async (values) => {
    dispatch(changePassword(user._id, { password: values.password }));
  };

  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Change Password
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
          name='password'
          label='Password'
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
          hasFeedback
        >
          <Input.Password autoFocus placeholder='Please enter new password' />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder='Please enter password again' />
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
    </>
  );
};

export default ChangePasswordForm;
