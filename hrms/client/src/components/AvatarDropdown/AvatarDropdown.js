import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import styles from './index.less';

const AvatarDropdown = ({ user, logout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const login = () => {
    navigate('/auth');
  };

  const menu = true;
  const currentUser = {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    name: 'Cheah',
  };
  const menuHeaderDropdown = (
    <Menu className={styles.menu}>
      <Menu.Item key='profile'>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item key='logout' onClick={logout}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );
  return user ? (
    <HeaderDropdown overlay={menuHeaderDropdown} trigger={['click']}>
      <span className={`${styles.action} ${styles.account}`}>
        {/**
         <Avatar
          size='small'
          className={styles.avatar}
          src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
          alt='avatar'
        />
       */}

        <span className={`${styles.name} anticon`}>
          <Typography.Text
            ellipsis
            style={{ paddingTop: '35px', paddingBottom: '10px' }}
          >{`${user.first_name} ${user.last_name}`}</Typography.Text>
        </span>
      </span>
    </HeaderDropdown>
  ) : (
    <Link to='/auth'>Login</Link>
  );
};

export default AvatarDropdown;
