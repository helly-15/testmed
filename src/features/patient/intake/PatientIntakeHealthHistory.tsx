import * as React from 'react';
import {useSelector} from 'react-redux';

import {
  Collection,
  PatientHealthHistory
} from 'documents';
import {Routes} from 'routes';

import {useDocument} from 'hooks/firestore';

import {RootState} from 'app/rootReducer';
import {Page, WizardNavigation} from 'components';
import {Form, Input} from "antd";
import {
  HealthHistoryForm
} from "../../../components/health-history-form/HealthHistoryForm";


export const PatientIntakeHealthHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const {
    hasError,
    isLoading,
  } = useDocument<PatientHealthHistory>({
    path: Collection.PatientHealthHistories,
    id: user!.uid
  });
  const [form] = Form.useForm();
  const handleValuesChange = React.useCallback(
    (changedValue: any) => {
      if (Object.keys(changedValue)[0] === 'cancer') {
        form.resetFields();
      }
    },
    []
  );


  return (
    <Page
      title="Health History"
      isLoading={isLoading}
      hasError={hasError }
      backLink={Routes.PatientIntake}
    >
      <p>
        Have you ever been diagnosed with any of the following:
      </p>

        < HealthHistoryForm labels={["Health Issue", "Answer", "Year of onset"]}
                            values={['Asthma',
                              'Chronic Obstructive Pulmonary Disease',
                              'Chron’s Disease',
                              'Chronic Pancreatitis',
                              'Type 1 Diabetes',
                              'Type 2 Diabetes',
                              'High Blood Sugar',
                              'High Blood Pressure',
                              'High Cholesterol',
                              'Cancer']}
        />
      <Form
        form={form}
        name="health-history-form-comment"
        layout="vertical"
        onValuesChange={handleValuesChange}
      >
        <Form.Item className="hh-comments" name="comments" label="Comments">
          <Input.TextArea
            rows={5}
            placeholder="Please add any details you consider important."
          />
        </Form.Item>
      </Form>
      <WizardNavigation
        back={Routes.PatientIntakeProfile}
      />
      <WizardNavigation
        next={Routes.PatientIntakeHealthHistoryAllergies}
      />
    </Page>
  );
};
