import React from 'react';
import { useSelector } from 'react-redux';

import { HomeOutlined } from '@ant-design/icons';
import { Routes } from 'routes';

import { RootState } from 'app/rootReducer';
import { MenuItem, SideMenu } from 'components';

const items: MenuItem[] = [
  {
    title: 'Home',
    link: Routes.ClinicianPatientList,
    icon: <HomeOutlined />,
    lvl: 0
  }
];

export const ClinicianMenu: React.FC = () => {
  const location = useSelector((state: RootState) => state.router.location);
  const pathname =
    location.pathname.search('/clinician/patient') === -1
      ? location.pathname
      : Routes.ClinicianPatientList;

  return <SideMenu items={items} selectedKey={pathname} />;
};
