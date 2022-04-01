import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
  UserOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  HistoryOutlined,
  FormOutlined,
  BarChartOutlined,
  ApartmentOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import Home from './components/Home/Home';
import LeaveHome from './components/LeaveHome/LeaveHome';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        icon: <BarChartOutlined />,
        routes: [
          {
            path: '/home',
            name: 'Personal',
            icon: <UserOutlined />,
            exact: true,
          },
          {
            path: '/supervisor',
            name: 'Department',
            icon: <ApartmentOutlined />,
            exact: true,
          },
        ],
      },
      {
        path: '/leaves',
        name: 'Leaves',
        icon: <ScheduleOutlined />,
        exact: true,
        routes: [
          {
            path: 'home',
            name: 'Leaves Dashboard',
            icon: <HomeOutlined />,
            exact: true,
          },
          {
            path: 'create',
            name: 'Apply Leave',
            icon: <UsergroupAddOutlined />,
          },
          {
            path: 'history',
            name: 'Leave History',
            icon: <HistoryOutlined />,
          },
          {
            path: 'list',
            name: 'Leave Requests',
            icon: <ExclamationCircleOutlined />,
          },
          {
            path: '/calendar/personal',
            name: 'Calendar View',
            icon: <CalendarOutlined />,
          },
        ],
      },
      {
        path: '/training',
        name: 'Training',
        icon: <SolutionOutlined />,
        routes: [
          {
            path: 'home',
            name: 'Training Dashboard',
            icon: <HomeOutlined />,
            exact: true,
          },
          {
            path: 'list',
            name: 'Internal Training List',
            icon: <UnorderedListOutlined />,
          },
          {
            path: 'history',
            name: 'Training History',
            icon: <HistoryOutlined />,
          },
          {
            path: 'submitExt',
            name: 'External Training Request',
            icon: <FormOutlined />,
          },
          {
            path: 'extList',
            name: 'External Requests List',
            icon: <ExclamationCircleOutlined />,
          },
          {
            path: '/trainingProgress/history',
            name: 'Track Training Progress',
            icon: <ExclamationCircleOutlined />,
          },
          {
            path: '/trainingProgress/list',
            name: 'Pending Training Completion',
            icon: <ExclamationCircleOutlined />,
          },
        ],
      },
      {
        path: '/users/dept',
        name: 'Employee',
        icon: <TeamOutlined />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
