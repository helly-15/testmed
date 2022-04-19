import { Moment } from 'moment';

import { Document } from './document';

export enum InjuryMechanism {
  MVA = 'Motor Vehicle Accident',
  PedestrianMVA = 'Pedestrian-MVA',
  Fall = 'Fall',
  Assault = 'Assault',
  Sports = 'Sports',
  Other = 'Other'
}

export enum ImpactLocation {
  Left = 'Left',
  Right = 'Right',
  Front = 'Front',
  Back = 'Back',
  Top = 'Top (of head)'
}

export enum LocDuration {
  LessThan1min = '< 1 min',
  LessThan5mins = '< 5 mins',
  LessThan30mins = '< 30 mins',
  LessThan1hour = '< 1 hour',
  LessThan24hours = '< 24 hours',
  MoreThan24hours = '> 24 hours'
}

export enum ImmediateSymptom {
  DazedStunned = 'Dazed/Stunned',
  Confusion = 'Confusion',
  SlowToAnswerSpeak = 'Slow to answer/speak',
  RepeatingQuestions = 'Repeating questions',
  Forgetful = 'Forgetful'
}

export enum PatientInjuryKey {
  injuryDate = 'injuryDate',
  impactLocation = 'impactLocation',
  injuryMechanism = 'injuryMechanism',
  restrained = 'restrained',
  airbags = 'airbags',
  retrogradeAmnesia = 'retrogradeAmnesia',
  anterogradeAmnesia = 'anterogradeAmnesia',
  seizures = 'seizures',
  lossOfConsciousness = 'lossOfConsciousness',
  locDuration = 'locDuration',
  immediateSymptoms = 'immediateSymptoms',
  headMedicalImaging = 'headMedicalImaging',
  mri = 'mri',
  mriDate = 'mriDate',
  ct = 'ct',
  ctDate = 'ctDate',
  xRay = 'xRay',
  xRayDate = 'xRayDate',
  otherHeadMedicalImaging = 'otherHeadMedicalImaging',
  otherHeadMedicalImagingDate = 'otherHeadMedicalImagingDate',
  skullFracture = 'skullFracture',
  brainBleed = 'brainBleed',
  patientId = 'patientId'
}

export interface PatientInjury extends Document {
  injuryDate?: Moment;
  impactLocation?: ImpactLocation;
  injuryMechanism?: InjuryMechanism;
  restrained?: boolean;
  airbags?: boolean;
  retrogradeAmnesia?: boolean;
  anterogradeAmnesia?: boolean;
  seizures?: boolean;
  lossOfConsciousness?: boolean;
  locDuration?: LocDuration;
  immediateSymptoms?: ImmediateSymptom;
  headMedicalImaging?: boolean;
  mri?: boolean;
  mriDate?: Moment;
  ct?: boolean;
  ctDate?: Moment;
  xRay?: boolean;
  xRayDate?: Moment;
  otherHeadMedicalImaging?: string;
  otherHeadMedicalImagingDate?: Moment;
  skullFracture?: boolean;
  brainBleed?: boolean;
}
