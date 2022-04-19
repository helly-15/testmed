import { Document } from './document';

export enum SymptomDuration {
  Days = 'Days',
  Weeks = 'Weeks',
  Months = 'Months',
  Years = 'Years',
}

export enum Treatment {
  Medication = 'Medication',
  Therapy = 'Therapy',
  Other = 'Other',
}

export enum Frequency {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}

export enum DisorderKey {
  presence = 'presence',
  treatment = 'treatment',
  familyHx = 'familyHx',
}

export enum SubstanceKey {
  presence = 'presence',
  frequency = 'frequency',
  count = 'count',
}

export enum PatientPersonalHistoryKey {
  concussionHx = 'concussionHx',
  numberPrevConcussion = 'numberPrevConcussion',
  longestSxDuration = 'longestSxDuration',
  lessForceReinjury = 'lessForceReinjury',
  headacheHx = 'headacheHx',
  priorHeadacheTx = 'priorHeadacheTx',
  familyHeadacheHx = 'familyHeadacheHx',
  migraineHx = 'migraineHx',
  familyMigraineHx = 'familyMigraineHx',

  learningDisability = 'learningDisability',
  learningDisabilityDiagnosis = 'learningDisabilityDiagnosis',
  addAdhdDx = 'addAdhdDx',
  addAdhdAgeDiagnosed = 'addAdhdAgeDiagnosed',
  speechTherapy = 'speechTherapy',
  repeatedGrade = 'repeatedGrade',
  gradeRepeatedCount = 'gradeRepeatedCount',

  anxiety = 'anxiety',
  depression = 'depression',
  sleepDisorder = 'sleepDisorder',

  alcohol = 'alcohol',
  smoking = 'smoking',
  marajuana = 'marajuana',
  otherSubstance = 'otherSubstance',
}

export interface Disorder {
  presence?: boolean;
  treatment?: Treatment;
  familyHx?: boolean;
}

export interface Substance {
  presence?: boolean;
  frequency?: Frequency;
  count?: number;
}

export interface PatientPersonalHistory extends Document {
  concussionHx?: boolean;
  numberPrevConcussion?: boolean;
  longestSxDuration?: SymptomDuration;
  lessForceReinjury?: boolean;
  headacheHx?: boolean;
  priorHeadacheTx?: boolean;
  familyHeadacheHx?: boolean;
  migraineHx?: boolean;
  familyMigraineHx?: boolean;

  learningDisability?: boolean;
  learningDisabilityDiagnosis?: string;
  addAdhdDx?: boolean;
  addAdhdAgeDiagnosed?: number;
  speechTherapy?: boolean;
  repeatedGrade?: boolean;
  gradeRepeatedCount?: number;

  anxiety?: Disorder;
  depression?: Disorder;
  sleepDisorder?: Disorder;

  alcohol?: Substance;
  smoking?: Substance;
  marajuana?: Substance;
  otherSubstance?: Substance;
}
