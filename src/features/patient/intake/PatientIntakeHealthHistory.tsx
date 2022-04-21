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
  const {
    hasError,
    isLoading,
    doc,
    update
  } = useDocument<PatientHealthHistory>({
    path: Collection.PatientHealthHistories,
    id: patientId
  });

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

  //todo вставить debouncer и запоминание ответов в textarea, сократить компонент
  const [form] = Form.useForm();
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
  console.log(doc);
  return (
    <Page
      title="Health History"
      isLoading={isLoading && itemsLoading}
      hasError={hasError && itemsError}
      backLink={Routes.PatientIntake}
    >
      <p>Have you ever been diagnosed with any of the following:</p>

      <HealthHistoryForm value={doc} handleValuesChange={handleValuesChange} />
      <p>Are there any other issues that are bothering you?</p>
      <Form
        form={form}
        name="health-history-form-other-issues"
        layout="vertical"
        onValuesChange={handleValuesChange}
      >
        <DynamicFormList
          labels={labels}
          keys={keys}
          values={items}
          onItemChange={updateItem}
          onItemRemove={removeItem}
        />
      </Form>
      <Form
        form={form}
        name="health-history-form-textarea"
        layout="vertical"
        onValuesChange={handleValuesChange}
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
