import React from 'react';
import { useSelector } from 'react-redux';

import { Collection, PatientProfile } from 'documents';
import { Routes } from 'routes';

import { useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { Page, ProfileForm, WizardNavigation } from 'components';

export function PatientIntakeProfile() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { hasError, isLoading, doc, update } = useDocument<PatientProfile>({
    path: Collection.PatientProfiles,
    id: user!.uid
  });

  return (
    <Page
      title="Profile"
      isLoading={isLoading}
      hasError={hasError}
      backLink={Routes.PatientIntake}
    >
      <ProfileForm value={doc} onChange={update} />
      <WizardNavigation next={Routes.PatientIntakeHealthHistory} />
    </Page>
  );
}
