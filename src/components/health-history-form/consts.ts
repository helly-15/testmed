import { FormItem } from '../family-history-form/consts';

export enum HealthConditionAnswers {
  No = 'no',
  Current = 'current',
  Past = 'past',
  Managed = 'managed',
  Unknown = 'unknown'
}

export const HealthConditionOptions = [
  { label: 'No', value: HealthConditionAnswers.No },
  { label: 'Current', value: HealthConditionAnswers.Current },
  { label: 'Past', value: HealthConditionAnswers.Past },
  { label: 'Managed', value: HealthConditionAnswers.Managed },
  { label: 'Unknown', value: HealthConditionAnswers.Unknown }
];

export const healthHistoryDeceases: FormItem[] = [
  { name: 'asthma', label: 'Asthma' },
  {
    name: 'chronicObstructivePulmonaryDisease',
    label: 'Chronic Obstructive Pulmonary Disease'
  },
  { name: 'chronsDisease', label: "Chron's Disease" },
  {
    name: 'chronicPancreatitis',
    label: 'Chronic Pancreatitis'
  },
  {
    name: 'type1Diabetes',
    label: 'Type 1 Diabetes'
  },
  {
    name: 'type2Diabetes',
    label: 'Type 2 Diabetes'
  },
  {
    name: 'highBloodSugar',
    label: 'High Blood Sugar'
  },
  {
    name: 'highBloodPressure',
    label: 'High Blood Pressure'
  },
  {
    name: 'highCholesterol',
    label: 'High Cholesterol'
  },
  { name: 'cancer', label: 'Cancer' }
];

export const healthHistoryHeaders = ['Health Issue', 'Answer', 'Year of onset'];

export const healthHistoryKeyCondition = {
  cancer: (value: HealthConditionAnswers) =>
    value !== HealthConditionAnswers.Current &&
    value !== HealthConditionAnswers.Managed
};
