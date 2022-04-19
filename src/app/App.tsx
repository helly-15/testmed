import './App.scss';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Layout } from 'antd';
import { desktopMinWidth } from 'constants/media-queries';

import { auth } from 'api/firebase';

import { Footer, Hidden, SiteHeader } from 'components';
import { restoreAuth } from 'features/auth/authSlice';
import { BottomNavigation, Navigation } from 'features/navigation';
import {
  closeMenu,
  openMenu,
  toggleMenuCollapse
} from 'features/navigation/navigationSlice';
import { RouteSwitch } from 'features/RouteSwitch';

import { RootState } from './rootReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const title = useSelector((state: RootState) => state.uiPref.title);

  const triggerClick = React.useCallback(() => dispatch(toggleMenuCollapse()), [
    dispatch
  ]);

  const isDesktop = useMediaQuery(desktopMinWidth);

  React.useEffect(() => {
    dispatch(restoreAuth(auth));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(isDesktop ? openMenu() : closeMenu());
  }, [dispatch, isDesktop]);

  return (
    <Layout className="layout-wrapper">
      {user && <Navigation />}
      <Layout className="site-layout">
        {user && (
          <SiteHeader
            title={title}
            user={user}
            onMenuClick={isDesktop ? undefined : triggerClick}
          />
        )}
        <Layout.Content>
          <RouteSwitch />
        </Layout.Content>
        <Hidden onDesktop onTablet onMobile={!user}>
          <BottomNavigation />
        </Hidden>
        <Hidden onMobile>
          <Footer />
        </Hidden>
      </Layout>
    </Layout>
  );
};

export default App;
