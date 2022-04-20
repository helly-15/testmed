import * as React from 'react';
import { useSelector } from 'react-redux';

import { Collection, PatientHealthHistory } from 'documents';
import { Routes } from 'routes';

import { useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { Page, WizardNavigation } from 'components';
import { Form } from 'antd';
import { HealthHistoryForm } from '../../../components/health-history-form/HealthHistoryForm';
import { FormTextarea } from '../../../components/form-textarea/FormTextarea';

export const PatientIntakeHealthHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const {
    hasError,
    isLoading,
    doc,
    update
  } = useDocument<PatientHealthHistory>({
    path: Collection.PatientHealthHistories,
    id: user!.uid
  });

  const [form] = Form.useForm();
  // const handleValuesChange = React.useCallback((changedValue: any) => {
  //   if (Object.keys(changedValue)[0] === 'cancer') {
  //     form.resetFields();
  //   }
  // }, []);

  return (
    <Page
      title="Health History"
      isLoading={isLoading}
      hasError={hasError}
      backLink={Routes.PatientIntake}
    >
      <p>Have you ever been diagnosed with any of the following:</p>

      <HealthHistoryForm value={doc} onChange={update} />
      <Form
        form={form}
        name="health-history-form-comment"
        layout="vertical"
        //onValuesChange={handleValuesChange}
      >
        <FormTextarea />
      </Form>

      <WizardNavigation
        back={Routes.PatientIntakeProfile}
        next={Routes.PatientIntakeHealthHistoryAllergies}
      />
    </Page>
  );
};
