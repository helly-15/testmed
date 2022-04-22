import * as React from 'react';
import { useSelector } from 'react-redux';

import { Collection, ItemSubcollection, PatientHealthHistory } from 'documents';
import { Routes } from 'routes';

import { useCollection, useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { DynamicFormList, Page, WizardNavigation } from 'components';
import { Form } from 'antd';
import { HealthHistoryForm } from '../../../components/health-history-form/HealthHistoryForm';
import { PatientHealthItem } from '../../../documents/patient-health-item';
import { handleFormChange } from '../../../utils/antd';
import { keyDependency } from '../../../components/cancer-checkbox-group';
import { healthHistoryKeyCondition } from '../../../components/health-history-form/consts';
import { FormTextarea } from '../../../components/form-textarea/FormTextarea';

const labels = ['Issue', 'Year of onset'];
const keys = ['issue', 'yearofonset'];

export const PatientIntakeHealthHistory: React.FC = () => {
  const patientId = useSelector((state: RootState) => state.auth.user!.uid);
  const [form] = Form.useForm();
  const [formTextarea] = Form.useForm();

  const {
    hasError,
    isLoading,
    doc,
    update
  } = useDocument<PatientHealthHistory>({
    path: Collection.PatientHealthHistories,
    id: patientId
  });

  React.useEffect(() => {
    form.setFieldsValue({ ...doc });
    formTextarea.setFieldsValue({ ...doc });
  }, [form, formTextarea, doc]);

  const [
    itemsError,
    itemsLoading,
    items,
    updateItem,
    removeItem
  ] = useCollection<PatientHealthItem>({
    path: `${Collection.PatientHealthHistories}/${patientId}/${ItemSubcollection}`,
    orderBy: ['metadata.created', 'asc']
  });

  const handleValuesChange = React.useCallback(
    (changedValue: any, changedValues: any) => {
      update(
        handleFormChange(
          changedValue,
          changedValues,
          doc,
          keyDependency,
          healthHistoryKeyCondition
        )
      );
    },
    [update, doc]
  );

  return (
    <Page
      title="Health History"
      isLoading={isLoading && itemsLoading}
      hasError={hasError && itemsError}
      backLink={Routes.PatientIntake}
    >
      <Form
        form={form}
        name="health-history-form"
        layout="horizontal"
        onValuesChange={handleValuesChange}
      >
        <p>Have you ever been diagnosed with any of the following:</p>
        <HealthHistoryForm value={doc} />
        <p>Are there any other issues that are bothering you?</p>
        <DynamicFormList
          labels={labels}
          keys={keys}
          values={items}
          onItemChange={updateItem}
          onItemRemove={removeItem}
        />
        <FormTextarea />
      </Form>
      <WizardNavigation
        back={Routes.PatientIntakeProfile}
        next={Routes.PatientIntakeHealthHistoryAllergies}
      />
    </Page>
  );
};
