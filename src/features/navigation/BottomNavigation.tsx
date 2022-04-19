import './BottomNavigation.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Routes } from 'routes';

import { RootState } from 'app/rootReducer';
import { MenuItem } from 'components/SideMenu';
import { Role } from 'features/auth';

const getSelectedRoute = (role: Role | undefined, pathname: string) => {
  switch (role) {
    case Role.Clinician:
      return pathname.search('/clinician/patient') === -1
        ? pathname
        : Routes.ClinicianPatientList;

    case Role.Patient:
      return pathname.search(Routes.PatientIntake) === -1
        ? pathname
        : Routes.PatientIntake;
    default:
      return '';
  }
};

const clinicianMenuItems: MenuItem[] = [
  {
    icon: <HomeOutlined />,
    title: 'Home',
    link: Routes.ClinicianPatientList,
    lvl: 0
  }
];

const patientMenuItems: MenuItem[] = [
  {
    icon: <HomeOutlined />,
    title: 'Intake',
    link: Routes.PatientIntake,
    lvl: 0
  }
];

export const BottomNavigation: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useSelector((state: RootState) => state.router.location);
  const items =
    user == null
      ? []
      : user.role === Role.Clinician
      ? clinicianMenuItems
      : patientMenuItems;
  const selectedRoute = getSelectedRoute(user?.role, location.pathname);

  return (
    <Menu
      className="bottom-nav"
      theme="light"
      mode="horizontal"
      selectedKeys={[selectedRoute]}
    >
      {items.map(x => (
        <Menu.Item key={x.link} icon={x.icon}>
          <Link to={x.link}>{x.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
