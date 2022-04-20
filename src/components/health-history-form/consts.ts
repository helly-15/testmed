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

export const healthHistoryDeceases = [
  'Asthma',
  'Chronic Obstructive Pulmonary Disease',
  'Chron’s Disease',
  'Chronic Pancreatitis',
  'Type 1 Diabetes',
  'Type 2 Diabetes',
  'High Blood Sugar',
  'High Blood Pressure',
  'High Cholesterol',
  'Cancer'
];

export const healthHistoryHeaders = ['Health Issue', 'Answer', 'Year of onset'];
