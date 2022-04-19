import React from 'react';

import { Routes } from 'routes';

import { Page, WizardNavigation } from 'components';

export const PatientIntake: React.FC = () => (
  <Page title="Intake" noHeader hideBack>
    <h1>Welcome to Harrison Healthcare Intake Form</h1>
    <p>
      Answering all questions to the best of your knowledge will help your
      health team to come up with the personalized healthcare plan best suited
      to your individual needs and unique circumstances.
    </p>
    <WizardNavigation next={Routes.PatientIntakeProfile} />
  </Page>
);
