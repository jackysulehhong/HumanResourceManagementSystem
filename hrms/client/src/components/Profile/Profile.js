import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Divider,
  Form,
  Row,
  Typography,
  Alert,
  Modal,
} from 'antd';
//https://github.com/nanxiaobei/antd-img-crop#styles
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateSettings } from '../../actions/auth';
import './Profile.css';

//import * as PusherPushNotifications from '@pusher/push-notifications-web';
/*
const beamsClient = new PusherPushNotifications.Client({
  instanceId: '0b883b28-92f8-4afc-9f97-ffebaa950fc8',
});
*/
const { Text } = Typography;
const { useForm } = Form;
const Profile = ({ user }) => {
  const [form] = useForm();
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const settings = {};
    settings.email = values.settings.includes('email');

    /*
    if (settings.notification) {
      beamsClient
        .start()
        .then((beamsClient) => beamsClient.getDeviceId())
        .catch((err) => {
          error = true;
          Modal.error({
            content:
              "Can't enable push notification. Please check if u disable it for this site",
          });

          settings.notification = false;
          console.log(settings);
          dispatch(updateSettings(user._id, settings));
        })
        .then(() => {
          beamsClient.addDeviceInterest(user._id.toString());
          dispatch(updateSettings(user._id, settings));
          Modal.success({ content: 'Settings Updated' });
        });
    } else {
      beamsClient.stop();
     
    }*/
    dispatch(updateSettings(user._id, settings));
    Modal.success({ content: 'Settings Updated' });
    //console.log(settings);
  };
  useEffect(() => {
    //console.log(user.settings.map(([key, value]) => key));

    //https://stackoverflow.com/a/45890604
    form.setFieldsValue({
      settings: Object.keys(user.settings).filter(
        (key) => user['settings'][key]
      ),
    });
  }, []);
  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Profile
      </Typography.Title>

      <Descriptions
        title={<Divider orientation='left'>Details</Divider>}
        bordered
        layout={screens.md ? 'horizontal' : 'vertical'}
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label='Emoployee ID'>
          {user.emp_id}
        </Descriptions.Item>
        <Descriptions.Item label='First Name'>
          {user.first_name}
        </Descriptions.Item>
        <Descriptions.Item label='Last Name'>
          {user.last_name}
        </Descriptions.Item>
        <Descriptions.Item label='Department'>
          {user.department.name}
        </Descriptions.Item>
        <Descriptions.Item label='Employment Date'>
          {moment(user.employment_date).format('YYYY-MM-DD')}
        </Descriptions.Item>
        <Descriptions.Item label='Roles'>{user.roles.name}</Descriptions.Item>
      </Descriptions>

      <Descriptions
        title={<Divider orientation='left'>Leave Balance</Divider>}
        bordered
      >
        {user.leaveCount.map((leave) => (
          <Descriptions.Item
            key={leave.leaveType._id}
            label={leave.leaveType.name}
          >
            {leave.count}
          </Descriptions.Item>
        ))}
      </Descriptions>

      <Divider orientation='left'>Settings</Divider>
      <Form form={form} name='basic' onFinish={onFinish} autoComplete='off'>
        <Form.Item name='settings'>
          <Checkbox.Group>
            <Row>
              {/*
              <Col span={24}>
                <Checkbox value='notification'>Notification</Checkbox>
              </Col>
            */}
              <Col span={24}>
                <Checkbox value='email'>Email</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Settings
          </Button>
        </Form.Item>
      </Form>
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button type='primary'>
          <Link to='/profile/changePassword'>Change Password</Link>
        </Button>
      </div>
    </>
  );
};
//https://flexiple.com/loop-through-object-javascript/

export default Profile;
