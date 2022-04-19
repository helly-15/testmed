import './SiteHeader.scss';

import React from 'react';

import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import { Hidden } from 'components/Hidden';
import { UserInfo } from 'components/user-info';
import { User } from 'features/auth';

const { Header } = Layout;

interface SiteHeaderProps {
  user: User;
  title: string;
  onMenuClick?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  user,
  title,
  onMenuClick
}) => {
  return (
    <Header className="site-header">
      <div className="site-header__left">
        {onMenuClick !== undefined && (
          <MenuOutlined className="trigger" onClick={onMenuClick} />
        )}
        <Hidden onDesktop>
          <h1>{title}</h1>
        </Hidden>
      </div>
      <UserInfo user={user} />
    </Header>
  );
};
