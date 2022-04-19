import { Moment } from 'moment';

import { Document } from './document';

export enum Symptom {
  Balance = 'balance',
  Fatigue = 'fatigue',
  Emotions = 'emotions',
  ExertionTolerance = 'exertionTolerance',
  Headache = 'headache',
  Neck = 'neck',
  Pain = 'pain',
  Sleep = 'sleep',
  Thinking = 'thinking',
  Vision = 'vision'
}

export enum SymptomStatus {
  Normal = 'normal',
  Alert = 'alert',
  Warning = 'warning',
  Critical = 'critical'
}
export type SymptomSource =
  | 'Cgs'
  | 'Promis'
  | 'Dhi'
  | 'Pcs'
  | 'TreatmentPlanning'
  | 'QoL';

export interface SymptomExpirationInfo {
  sources: SymptomSource[];
  canExpire: boolean;
}

export const SymptomSources: Record<Symptom, Readonly<SymptomSource[]>> = {
  [Symptom.Balance]: ['Cgs', 'TreatmentPlanning'],
  [Symptom.Emotions]: ['Cgs', 'Promis'],
  [Symptom.ExertionTolerance]: ['TreatmentPlanning'],
  [Symptom.Fatigue]: ['Cgs', 'Promis'],
  [Symptom.Headache]: ['Cgs'],
  [Symptom.Neck]: ['TreatmentPlanning', 'QoL'],
  [Symptom.Pain]: ['Promis'],
  [Symptom.Sleep]: ['Cgs', 'Promis'],
  [Symptom.Thinking]: ['Cgs', 'Promis', 'TreatmentPlanning'],
  [Symptom.Vision]: ['Cgs', 'TreatmentPlanning']
};

export interface SymptomValue {
  value: number;
}

export interface PatientSymptom extends Document {
  date: Moment;
  [Symptom.Balance]?: SymptomValue;
  [Symptom.Fatigue]?: SymptomValue;
  [Symptom.Emotions]?: SymptomValue;
  [Symptom.ExertionTolerance]?: SymptomValue;
  [Symptom.Headache]?: SymptomValue;
  [Symptom.Neck]?: SymptomValue;
  [Symptom.Pain]?: SymptomValue;
  [Symptom.Sleep]?: SymptomValue;
  [Symptom.Thinking]?: SymptomValue;
  [Symptom.Vision]?: SymptomValue;
}
