import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Result,
  Space,
  Statistic,
  Layout,
  Image,
  message,
  notification,
  Modal,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  LikeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ProLayout, {
  PageContainer,
  SettingDrawer,
} from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import supervisorProps from './_supervisorProps';
import adminProps from './_adminProps';
import NoticeIcon from './components/NoticeIcon';
import Avatar from './components/AvatarDropdown/AvatarDropdown';
import './App.less';

import LeaveHome from './components/LeaveHome/LeaveHome';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import LeaveForm from './components/LeaveForm/LeaveForm';
import LeaveDetail from './components/LeaveDetail/LeaveDetail';
import LeaveList from './components/LeaveList/LeaveList';
import LeaveHistory from './components/LeaveHistory/LeaveHistory';
import StaffForm from './components/StaffForm/StaffForm';
import DeptHome from './components/DeptHome/DeptHome';
import DeptForm from './components/DeptForm/DeptForm';
import StaffHome from './components/StaffHome/StaffHome';
import StaffDetail from './components/StaffDetails/StaffDetail';
import LeaveTypeForm from './components/LeaveTypeForm/LeaveTypeForm';
import LeaveTypeHome from './components/LeaveTypeHome/LeaveTypeHome';
import RoleHome from './components/RoleHome/RoleHome';
import RoleForm from './components/RoleForm/RoleForm';
import Profile from './components/Profile/Profile';
import Calendar from './components/Calendar/Calendar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Test from './components/Test/Test';
import ResetPasswordForm from './components/ResetPasswordForm/ResetPasswordForm';
import HolidayHome from './components/HolidayHome/HolidayHome';
import HolidayForm from './components/HolidayForm/HolidayForm';
import Test2 from './components/Test2/Test2';
import TrainingHome from './components/TrainingHome/TrainingHome';
import TrainingForm from './components/TrainingForm/TrainingForm';
import TrainingList from './components/TrainingList/TrainingList';
import TrainingDetails from './components/TrainingDetails/TrainingDetails';
import ExtTrainingForm from './components/ExtTrainingForm/ExtTrainingForm';
import ExtTrainingList from './components/ExtTrainingList/ExtTrainingList';
import TrainingHistory from './components/TrainingHistory/TrainingHistory';
import AdminHome from './components/AdminHome/AdminHome';
import SupervisorHome from './components/SupervisorHome/SupervisorHome';
import LeavePolicyForm from './components/LeavePolicyForm/LeavePolicyForm';
import LeavePolicyHome from './components/LeavePolicyHome/LeavePolicyHome';
import Error404 from './components/Error/Error404';

import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { LOGOUT } from './constants/actionTypes';
import jwtDecode from 'jwt-decode';
import { io } from 'socket.io-client';
import { getNotificationsById } from './actions/notification';
import CalendarPersonal from './components/CalendarPersonal/CalendarPersonal';
import TrainingProgressForm from './components/TrainingProgressForm/TrainingProgressForm';
import TrainingProgressDetail from './components/TrainingProgressDetails/TrainingProgressDetails';
import TrainingProgressHistory from './components/TrainingProgressHistory/TrainingProgressHistory';
import TrainingProgressList from './components/TrainingProgressList/TrainingProgressList';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const [showLogo, setShowLogo] = useState(true);
  const [settings, setSetting] = useState({
    fixSiderbar: true,
    navTheme: 'light',
    primaryColor: '#1890ff',
    layout: 'side',
    contentWidth: 'Fluid',
    splitMenus: false,
  });
  const [pathname, setPathname] = useState('/');
  const [socket, setSocket] = useState(null);
  const { authData } = useSelector((state) => state.auth);
  const user = authData?.result;

  const location = useLocation();
  var temp = defaultProps;
  const navigate = useNavigate();
  const logout = () => {
    socket?.emit('removeUser');
    dispatch({ type: LOGOUT });
    navigate('/auth');
  };
  useEffect(() => {
    setPathname(location.pathname);
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        message.error('Session expired. Please login again');
        logout();
      }
    }
  }, [location]);

  useEffect(() => {
    setSocket(io('http://localhost:5000'));
  }, []);
  useEffect(() => {
    if (socket) {
      if (user) {
        socket?.emit('newUser', user);
        socket?.emit('listUser');
        /** 
      beamsClient
        .start()
        .then((beamsClient) => beamsClient.getDeviceId())
        .then((deviceId) =>
          console.log(
            'Successfully registered with Beams. Device ID:',
            deviceId
          )
        )
        .then(() => beamsClient.addDeviceInterest('hello'));
*/
        socket?.on('newNotification', (data) => {
          let title = 'Notification';
          let url = '';
          let icon = <InfoCircleOutlined />;
          if (data.content.type == 'leave') {
            url += '/leaves/view';
            if (data.content.status == 'Pending') {
              title = 'Leave Request';
            } else if (data.content.status == 'Approved') {
              title = 'Leave Approval';
              icon = <CheckCircleOutlined />;
            } else if (data.content.status == 'Rejected') {
              title = 'Leave Approval';
              icon = <CloseCircleOutlined />;
            }
          } else if (data.content.type == 'training') {
            url += '/training/view';
            if (data.content.status == 'Pending') {
              title = 'Training Request';
            } else if (data.content.status == 'Approved') {
              title = 'Training Approval';
              icon = <CheckCircleOutlined />;
            } else if (data.content.status == 'Rejected') {
              title = 'Training Approval';
              icon = <CloseCircleOutlined />;
            }
          }

          notification.open({
            message: title,
            description: `${data.sender} ${data.content.message}`,
            icon: icon,
            placement: 'bottomRight',
            duration: 300,
            onClick: () => {
              navigate(`${url}/${data.content.id}`);

              notification.destroy();
            },
          });
        });
      }
    }
    return () => {
      socket?.off('newNotification');
      socket?.disconnect();
    };
  }, [socket, user]);

  if (user?.roles?.name == 'supervisor') temp = supervisorProps;
  else if (user?.roles?.name == 'admin') temp = adminProps;
  else temp = defaultProps;
  return (
    <div
      id='test-pro-layout'
      style={{
        height: '100vh',
        background: 'black',
      }}
    >
      <ProLayout
        title={false}
        logo={() =>
          showLogo ? (
            <Image className='logo' src='/INTI_Logo.png' preview={false} />
          ) : (
            false
          )
        }
        onCollapse={(collapsed) => setShowLogo(!collapsed)}
        {...temp}
        location={{
          pathname,
        }}
        menuRender={(props, defaultDom) => {
          return user ? defaultDom : false;
        }}
        menuItemRender={(item, dom) => {
          // let path = item.path.split('/./')[0];
          return <Link to={item.path || '/'}>{dom}</Link>;
        }}
        rightContentRender={() => (
          <Space size='large'>
            {user && <NoticeIcon user={user} socket={socket} />}
            <Avatar user={user} logout={logout} />
          </Space>
        )}
        locale='en-US'
        {...settings}
      >
        <div className='site-layout-background'>
          <Routes>
            {/**dashboard */}
            <Route
              path='/home'
              element={
                <PrivateRoute user={user}>
                  <Home socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/supervisor'
              element={
                <PrivateRoute user={user}>
                  <SupervisorHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/admin'
              element={
                <PrivateRoute user={user}>
                  <AdminHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaves/home'
              element={
                <PrivateRoute user={user}>
                  <LeaveHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**leave */}
            <Route
              path='/leaves/create'
              element={
                <PrivateRoute user={user}>
                  <LeaveForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaves/view/:id'
              element={
                <PrivateRoute user={user}>
                  <LeaveDetail socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaves/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <LeaveForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaves/list'
              element={
                <PrivateRoute user={user}>
                  <LeaveList socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaves/history'
              element={
                <PrivateRoute user={user}>
                  <LeaveHistory socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**leave type */}
            <Route
              path='/leaveTypes'
              element={
                <PrivateRoute user={user}>
                  <LeaveTypeHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaveTypes/create'
              element={
                <PrivateRoute user={user}>
                  <LeaveTypeForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/leaveTypes/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <LeaveTypeForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**department */}
            <Route
              path='/depts'
              element={
                <PrivateRoute user={user}>
                  <DeptHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/depts/create'
              element={
                <PrivateRoute user={user}>
                  <DeptForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/depts/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <DeptForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**user */}
            <Route
              path='/profile'
              element={
                <PrivateRoute user={user}>
                  <Profile socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/profile/changePassword'
              element={
                <PrivateRoute user={user}>
                  <ChangePasswordForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/users'
              element={
                <PrivateRoute user={user}>
                  <StaffHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/dept'
              element={
                <PrivateRoute user={user}>
                  <StaffHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/create'
              element={
                <PrivateRoute user={user}>
                  <StaffForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <StaffForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/view/:id'
              element={
                <PrivateRoute user={user}>
                  <StaffDetail socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**role */}
            <Route
              path='/roles'
              element={
                <PrivateRoute user={user}>
                  <RoleHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/roles/create'
              element={
                <PrivateRoute user={user}>
                  <RoleForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/roles/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <RoleForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**calendar */}
            <Route
              path='/calendar'
              element={
                <PrivateRoute user={user}>
                  <Calendar socket={socket} user={user} />
                </PrivateRoute>
              }
            />

            <Route
              path='/calendar/personal'
              element={
                <PrivateRoute user={user}>
                  <CalendarPersonal socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**holiday */}
            <Route
              path='/holidays'
              element={
                <PrivateRoute user={user}>
                  <HolidayHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/holidays/create/:year'
              element={
                <PrivateRoute user={user}>
                  <HolidayForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/holidays/edit/:year/:id'
              element={
                <PrivateRoute user={user}>
                  <HolidayForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**training */}
            <Route
              path='/training/home'
              element={
                <PrivateRoute user={user}>
                  <TrainingHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/create'
              element={
                <PrivateRoute user={user}>
                  <TrainingForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/list'
              element={
                <PrivateRoute user={user}>
                  <TrainingList socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/view/:id'
              element={
                <PrivateRoute user={user}>
                  <TrainingDetails socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/submitExt'
              element={
                <PrivateRoute user={user}>
                  <ExtTrainingForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/extList'
              element={
                <PrivateRoute user={user}>
                  <ExtTrainingList socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/training/history'
              element={
                <PrivateRoute user={user}>
                  <TrainingHistory socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**training progress */}
            <Route
              path='/trainingProgress/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <TrainingProgressForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/trainingProgress/view/:id'
              element={
                <PrivateRoute user={user}>
                  <TrainingProgressDetail socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/trainingProgress/history'
              element={
                <PrivateRoute user={user}>
                  <TrainingProgressHistory socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/trainingProgress/list'
              element={
                <PrivateRoute user={user}>
                  <TrainingProgressList socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**policy */}
            <Route
              path='/policy'
              element={
                <PrivateRoute user={user}>
                  <LeavePolicyHome socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/policy/create'
              element={
                <PrivateRoute user={user}>
                  <LeavePolicyForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/policy/edit/:id'
              element={
                <PrivateRoute user={user}>
                  <LeavePolicyForm socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            {/**auth */}
            <Route
              path='/auth'
              element={
                <PublicRoute user={user}>
                  <Auth socket={socket} user={user} />
                </PublicRoute>
              }
            />
            <Route
              path='/resetPassword'
              element={<ResetPasswordForm socket={socket} user={user} />}
            />
            {/**other */}
            <Route
              path='/test'
              element={
                <PrivateRoute user={user}>
                  <Test socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path='/test2'
              element={
                <PrivateRoute user={user}>
                  <Test2 socket={socket} user={user} />
                </PrivateRoute>
              }
            />
            <Route path='/' element={<Navigate to='/auth' replace />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
        {/**   <div
            style={{
              height: '120vh',
            }}
          >
            <Result
              status='404'
              style={{
                height: '100%',
                background: '#fff',
              }}
              title='Hello World'
              subTitle='Sorry, you are not authorized to access this page.'
              extra={<Button type='primary'>Back Home</Button>}
            />
          </div>*/}
      </ProLayout>
      {/**
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
       */}
    </div>
  );
};
export default App;

/**
 * 
 *    content={content}
            tabList={[
              {
                tab: '基本信息',
                key: 'base',
              },
              {
                tab: '详细信息',
                key: 'info',
              },
            ]}
            extraContent={
              <Space size={24}>
                <Statistic
                  title='Feedback'
                  value={1128}
                  prefix={<LikeOutlined />}
                />
                <Statistic title='Unmerged' value={93} suffix='/ 100' />
              </Space>
            }
            extra={[
              <Button key='3'>操作</Button>,
              <Button key='2'>操作</Button>,
              <Button key='1' type='primary'>
                主操作
              </Button>,
            ]}
            footer={[
              <Button key='3'>重置</Button>,
              <Button key='2' type='primary'>
                提交
              </Button>,
            ]}
 */
