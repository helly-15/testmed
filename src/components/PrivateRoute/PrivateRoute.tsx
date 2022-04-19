import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Skeleton } from 'antd';
import { Routes } from 'routes';

import { RootState } from 'app/rootReducer';
import { Role } from 'features/auth/authSlice';

export declare type PrivateRouteProps = {
  role: Role;
} & RouteProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  role,
  render,
  ...rest
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  if (!user && isLoading) return <Skeleton active={true} />;

  return (
    <Route
      {...rest}
      render={props =>
        user?.role === role ? (
          render?.(props) ?? ((Component && <Component {...props} />) || null)
        ) : (
          <Redirect
            to={{
              pathname:
                role === Role.Clinician
                  ? Routes.ClinicianSignIn
                  : Routes.PatientSignIn,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
