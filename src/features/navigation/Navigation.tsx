import './Navigation.scss';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import { HomeOutlined } from '@ant-design/icons';
import { Layout, Skeleton } from 'antd';
import { desktopMinWidth } from 'constants/media-queries';
import logo from 'img/logo.png';
import { Routes } from 'routes';

import { RootState } from 'app/rootReducer';
import { ConditionalWrapper, MenuItem, SideMenu } from 'components';
import { Role } from 'features/auth/authSlice';

import { closeMenu } from './navigationSlice';

const { Sider } = Layout;

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.router.location);
  const user = useSelector((state: RootState) => state.auth.user);
  const collapsed = useSelector(
    (state: RootState) => state.uiPref.menuCollapsed
  );
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const isDesktop = useMediaQuery(desktopMinWidth);

  const pathname =
    location.pathname.search('/clinician/patient') === -1
      ? location.pathname
      : Routes.ClinicianPatientList;

  const menuItemClickHandler = React.useCallback(() => {
    if (isDesktop) return;

    dispatch(closeMenu());
  }, [dispatch, isDesktop]);

  return (
    <ConditionalWrapper
      wrapper={children => (
        <div
          className="sider-wrapper"
          style={{ visibility: collapsed ? 'hidden' : 'visible' }}
          onClick={menuItemClickHandler}
        >
          {children}
        </div>
      )}
      condition={!isDesktop}
    >
      <Sider
        trigger={null}
        width={236}
        className="crx-sider"
        collapsedWidth={0}
        collapsed={collapsed}
      >
        <Link className="logo" to="/">
          <img src={logo} alt="CarechartHarrison logo" />
        </Link>
        {user && (
          <SideMenu
            items={
              user.role === Role.Clinician
                ? clinicianMenuItems
                : patientMenuItems
            }
            selectedKey={pathname}
            onClick={menuItemClickHandler}
          />
        )}
        {isLoading && <Skeleton />}
      </Sider>
    </ConditionalWrapper>
  );
};

const clinicianMenuItems: MenuItem[] = [
  {
    title: 'Home',
    link: Routes.ClinicianPatientList,
    icon: <HomeOutlined />,
    lvl: 0
  }
];

const patientMenuItems: MenuItem[] = [
  {
    icon: <HomeOutlined />,
    title: 'Intake',
    link: Routes.PatientIntake,
    lvl: 0
  },
  {
    title: 'Profile',
    link: Routes.PatientIntakeProfile,
    lvl: 1
  },
  {
    title: 'Health History',
    link: Routes.PatientIntakeHealthHistory,
    lvl: 1
  },
  {
    title: 'Allergies',
    link: Routes.PatientIntakeHealthHistoryAllergies,
    lvl: 2
  },
  {
    title: 'Immunization',
    link: Routes.PatientIntakeHealthHistoryImmunization,
    lvl: 2
  },
  {
    title: 'Medications',
    link: Routes.PatientIntakeHealthHistoryMedications,
    lvl: 2
  },
  {
    title: 'Stress & Sleep',
    link: Routes.PatientIntakeHealthHistoryStressAndSleep,
    lvl: 2
  },
  {
    title: 'Lifestyle',
    link: Routes.PatientIntakeHealthHistoryLifestyle,
    lvl: 2
  },
  {
    title: 'Environment',
    link: Routes.PatientIntakeHealthHistoryEnvironment,
    lvl: 2
  },
  {
    title: 'Reproductive Health',
    link: Routes.PatientIntakeHealthHistoryReproductiveHealth,
    lvl: 2
  },
  {
    title: 'Family History',
    link: Routes.PatientIntakeFamilyHistory,
    lvl: 1
  }
];
