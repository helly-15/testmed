import * as React from 'react';
import { useSelector } from 'react-redux';

import {
  Collection,
  ItemSubcollection,
  PatientAllergy,
  PatientAllergyItem
} from 'documents';

import { useCollection, useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { AllergyForm, Page } from 'components';

export const PatientIntakeHealthHistoryAllergies: React.FC = () => {
  const patientId = useSelector((state: RootState) => state.auth.user!.uid);

  const { hasError, isLoading, doc, update } = useDocument<PatientAllergy>({
    path: Collection.PatientAllergies,
    id: patientId
  });

  const [
    itemsError,
    itemsLoading,
    items,
    updateItem,
    removeItem
  ] = useCollection<PatientAllergyItem>({
    path: `${Collection.PatientAllergies}/${patientId}/${ItemSubcollection}`,
    orderBy: ['metadata.created', 'asc']
  });

  return (
    <Page
      title="Allergies and Sensitivities"
      isLoading={isLoading && itemsLoading}
      hasError={hasError && itemsError}
    >
      <AllergyForm
        value={doc}
        items={items}
        onChange={update}
        onItemChange={updateItem}
        onItemRemove={removeItem}
      />
    </Page>
  );
};
