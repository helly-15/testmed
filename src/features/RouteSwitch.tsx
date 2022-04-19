import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from 'routes';

import { RootState } from 'app/rootReducer';
import { PrivateRoute } from 'components';
import { Role } from 'features/auth/authSlice';
import {
  PatientIntake,
  PatientIntakeFamilyHistory,
  PatientIntakeHealthHistory,
  PatientIntakeHealthHistoryAllergies,
  PatientIntakeHealthHistoryImmunization,
  PatientIntakeHealthHistoryMedications,
  PatientIntakeProfile
} from 'features/patient';
import SignIn from 'features/sign-in';

export const RouteSwitch: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Switch>
      <Route exact path={'/'}>
        <Redirect
          to={
            user?.role === Role.Clinician
              ? Routes.ClinicianHome
              : Routes.PatientIntake
          }
        />
      </Route>
      <Route exact path={'/clinician'}>
        <Redirect to={Routes.ClinicianHome} />
      </Route>
      <Route exact path={'/patient'}>
        <Redirect to={Routes.PatientIntake} />
      </Route>
      <Route path={Routes.PatientSignIn}>
        <SignIn signInRole={Role.Patient} />
      </Route>
      <Route path={Routes.ClinicianSignIn}>
        <SignIn signInRole={Role.Clinician} />
      </Route>
      <PrivateRoute
        exact
        role={Role.Patient}
        path={Routes.PatientIntake}
        component={PatientIntake}
      />
      <PrivateRoute
        role={Role.Patient}
        path={Routes.PatientIntakeFamilyHistory}
        component={PatientIntakeFamilyHistory}
      />
      <PrivateRoute
        exact
        role={Role.Patient}
        path={Routes.PatientIntakeHealthHistory}
        component={PatientIntakeHealthHistory}
      />
      <PrivateRoute
        role={Role.Patient}
        path={Routes.PatientIntakeHealthHistoryAllergies}
        component={PatientIntakeHealthHistoryAllergies}
      />
      <PrivateRoute
        role={Role.Patient}
        path={Routes.PatientIntakeHealthHistoryImmunization}
        component={PatientIntakeHealthHistoryImmunization}
      />
      <PrivateRoute
        role={Role.Patient}
        path={Routes.PatientIntakeHealthHistoryMedications}
        component={PatientIntakeHealthHistoryMedications}
      />
      <PrivateRoute
        role={Role.Patient}
        path={Routes.PatientIntakeProfile}
        component={PatientIntakeProfile}
      />
    </Switch>
  );
};
