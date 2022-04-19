import React from 'react';
import { useSelector } from 'react-redux';

import { Collection, PatientFamilyHistory } from 'documents';
import { Routes } from 'routes';

import { useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { FamilyHistoryForm, Page, WizardNavigation } from 'components';

export const PatientIntakeFamilyHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const {
    hasError,
    isLoading,
    doc,
    update
  } = useDocument<PatientFamilyHistory>({
    path: Collection.PatientFamilyHistories,
    id: user!.uid
  });

  return (
    <Page
      title="Family History"
      isLoading={isLoading}
      hasError={hasError}
      backLink={Routes.PatientIntake}
    >
      <FamilyHistoryForm value={doc} onChange={update} />
      <WizardNavigation
        back={Routes.PatientIntakeHealthHistoryReproductiveHealth}
      />
    </Page>
  );
};
