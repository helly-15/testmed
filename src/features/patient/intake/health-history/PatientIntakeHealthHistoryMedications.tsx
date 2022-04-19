import { useSelector } from 'react-redux';

import {
  Collection,
  PatientHealthHistorySubcollection,
  PatientMedication
} from 'documents';

import { useCollection } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { DynamicFormList, Page } from 'components';

export const PatientIntakeHealthHistoryMedications: React.FC = () => {
  const patientId = useSelector((state: RootState) => state.auth.user!.uid);

  const [
    hasError,
    isLoading,
    items,
    update,
    remove
  ] = useCollection<PatientMedication>({
    path: `${Collection.PatientHealthHistories}/${patientId}/${PatientHealthHistorySubcollection.Medications}`
  });

  return (
    <Page
      title="Medications, Supplements & Vitamins"
      isLoading={isLoading}
      hasError={hasError}
    >
      <p>
        Please list all current medications, supplements and vitamins you are
        currently taking:
      </p>
      <DynamicFormList
        labels={['Name', 'Approximate onset', 'Note']}
        keys={['name', 'approximateOnset', 'note']}
        values={items}
        onItemChange={update}
        onItemRemove={remove}
      />
    </Page>
  );
};
