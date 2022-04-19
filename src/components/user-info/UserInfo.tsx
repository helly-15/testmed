import './UserInfo.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

import { auth } from 'api/firebase';

import { signOut, User } from 'features/auth/authSlice';

export interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }: UserInfoProps) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut(auth));
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={handleSignOut}>
            <LogoutOutlined /> Sign out
          </Menu.Item>
        </Menu>
      }
      className="user-info"
    >
      <span className="user-info__name">
        {user.displayName} <DownOutlined />
      </span>
    </Dropdown>
  );
};
