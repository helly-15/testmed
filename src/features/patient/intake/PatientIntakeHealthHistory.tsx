import * as React from 'react';
import { useSelector } from 'react-redux';

import {
  Collection,
  PatientHealthHistory
} from 'documents';
import { Routes } from 'routes';

import {  useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { Page } from 'components';

export const PatientIntakeHealthHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const {
    hasError,
    isLoading,
    
  } = useDocument<PatientHealthHistory>({
    path: Collection.PatientHealthHistories,
    id: user!.uid
  });



  return (
    <Page
      title="Health History"
      isLoading={isLoading}
      hasError={hasError }
      backLink={Routes.PatientIntake}
    >
      
    </Page>
  );
};
