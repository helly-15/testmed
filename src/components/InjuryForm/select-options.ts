import {
  ImmediateSymptom,
  ImpactLocation,
  InjuryMechanism,
  LocDuration
} from 'documents';

export const impactLocationOptions = [
  { label: ImpactLocation.Left, value: ImpactLocation.Left },
  { label: ImpactLocation.Right, value: ImpactLocation.Right },
  { label: ImpactLocation.Front, value: ImpactLocation.Front },
  { label: ImpactLocation.Back, value: ImpactLocation.Back },
  { label: ImpactLocation.Top, value: ImpactLocation.Top }
];

export const injuryMechanismOptions = [
  {
    label: InjuryMechanism.MVA,
    value: InjuryMechanism.MVA
  },
  {
    label: InjuryMechanism.PedestrianMVA,
    value: InjuryMechanism.PedestrianMVA
  },
  { label: InjuryMechanism.Fall, value: InjuryMechanism.Fall },
  { label: InjuryMechanism.Assault, value: InjuryMechanism.Assault },
  { label: InjuryMechanism.Sports, value: InjuryMechanism.Sports },
  { label: InjuryMechanism.Other, value: InjuryMechanism.Other }
];

export const locDurationOptions = [
  { label: LocDuration.LessThan1min, value: LocDuration.LessThan1min },
  { label: LocDuration.LessThan5mins, value: LocDuration.LessThan5mins },
  { label: LocDuration.LessThan30mins, value: LocDuration.LessThan30mins },
  { label: LocDuration.LessThan1hour, value: LocDuration.LessThan1hour },
  { label: LocDuration.LessThan24hours, value: LocDuration.LessThan24hours },
  { label: LocDuration.MoreThan24hours, value: LocDuration.MoreThan24hours }
];

export const immediateSymptomOptions = [
  {
    label: ImmediateSymptom.DazedStunned,
    value: ImmediateSymptom.DazedStunned
  },
  { label: ImmediateSymptom.Confusion, value: ImmediateSymptom.Confusion },
  {
    label: ImmediateSymptom.SlowToAnswerSpeak,
    value: ImmediateSymptom.SlowToAnswerSpeak
  },
  {
    label: ImmediateSymptom.RepeatingQuestions,
    value: ImmediateSymptom.RepeatingQuestions
  },
  { label: ImmediateSymptom.Forgetful, value: ImmediateSymptom.Forgetful }
];
