import { Moment } from 'moment';

import { Document } from './document';
import { SymptomValue } from './patient-symptom';

export enum SubSymptom {
  Anxiety = 'anxiety',
  BalanceTesting = 'balanceTesting',
  CervicalFlexionExtension = 'cervicalFlexionExtension',
  CervicalRotation = 'cervicalRotation',
  CervicalSidebend = 'cervicalSidebend',
  CervicogenicHeadache = 'cervicogenicHeadache',
  ConditionalFitness = 'conditionalFitness',
  Coping = 'coping',
  CxTension = 'cxTension',
  Depression = 'depression',
  Dizziness = 'dizziness',
  FallingAsleep = 'fallingAsleep',
  HeartRateVariability = 'heartRateVariability',
  Migraine = 'migraine',
  MotionSensitivity = 'motionSensitivity',
  Neuroscan = 'neuroscan',
  PainCoping = 'painCoping',
  PainIntensity = 'painIntensity',
  PCS = 'pcs',
  PainInterference = 'painInterference',
  PositionalTolerance = 'positionalTolerance',
  ReactionTime = 'reactionTime',
  RestorativeSleep = 'restorativeSleep',
  Saccades = 'saccades',
  SleepHours = 'sleepHours',
  SmoothPursuits = 'smoothPursuits',
  SocialFunctioning = 'socialFunctioning',
  SocialSupport = 'socialSupport',
  SoftTissueMsk = 'softTissueMsk',
  StayingAsleep = 'stayingAsleep',
  ThinkingConcerns = 'thinkingConcerns',
  VerbalMemory = 'verbalMemory',
  VMPS = 'vmps',
  VOR = 'vor'
}

export interface PatientSubSymptom extends Document {
  date: Moment;
  [SubSymptom.Anxiety]?: SymptomValue;
  [SubSymptom.BalanceTesting]?: SymptomValue;
  [SubSymptom.CervicalFlexionExtension]?: SymptomValue;
  [SubSymptom.CervicalRotation]?: SymptomValue;
  [SubSymptom.CervicalSidebend]?: SymptomValue;
  [SubSymptom.CervicogenicHeadache]?: SymptomValue;
  [SubSymptom.ConditionalFitness]?: SymptomValue;
  [SubSymptom.Coping]?: SymptomValue;
  [SubSymptom.CxTension]?: SymptomValue;
  [SubSymptom.Depression]?: SymptomValue;
  [SubSymptom.Dizziness]?: SymptomValue;
  [SubSymptom.FallingAsleep]?: SymptomValue;
  [SubSymptom.HeartRateVariability]?: SymptomValue;
  [SubSymptom.Migraine]?: SymptomValue;
  [SubSymptom.MotionSensitivity]?: SymptomValue;
  [SubSymptom.Neuroscan]?: SymptomValue;
  [SubSymptom.PainCoping]?: SymptomValue;
  [SubSymptom.PainIntensity]?: SymptomValue;
  [SubSymptom.PCS]?: SymptomValue;
  [SubSymptom.PainInterference]?: SymptomValue;
  [SubSymptom.PositionalTolerance]?: SymptomValue;
  [SubSymptom.ReactionTime]?: SymptomValue;
  [SubSymptom.RestorativeSleep]?: SymptomValue;
  [SubSymptom.Saccades]?: SymptomValue;
  [SubSymptom.SleepHours]?: SymptomValue;
  [SubSymptom.SmoothPursuits]?: SymptomValue;
  [SubSymptom.SocialFunctioning]?: SymptomValue;
  [SubSymptom.SocialSupport]?: SymptomValue;
  [SubSymptom.SoftTissueMsk]?: SymptomValue;
  [SubSymptom.StayingAsleep]?: SymptomValue;
  [SubSymptom.ThinkingConcerns]?: SymptomValue;
  [SubSymptom.VerbalMemory]?: SymptomValue;
  [SubSymptom.VMPS]?: SymptomValue;
  [SubSymptom.VOR]?: SymptomValue;
}
