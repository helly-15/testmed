import { SubSymptom, Symptom } from 'documents';

export const subSymptomMap = {
  [Symptom.Balance]: [
    SubSymptom.BalanceTesting,
    SubSymptom.Dizziness,
    SubSymptom.MotionSensitivity,
    SubSymptom.VOR
  ],
  [Symptom.Emotions]: [
    SubSymptom.Anxiety,
    SubSymptom.Coping,
    SubSymptom.Depression,
    SubSymptom.SocialSupport
  ],
  [Symptom.ExertionTolerance]: [
    SubSymptom.ConditionalFitness,
    SubSymptom.HeartRateVariability,
    SubSymptom.PositionalTolerance
  ],
  [Symptom.Fatigue]: [
    SubSymptom.PainInterference,
    SubSymptom.SocialFunctioning,
    SubSymptom.ThinkingConcerns
  ],
  [Symptom.Headache]: [
    SubSymptom.CervicogenicHeadache,
    SubSymptom.CxTension,
    SubSymptom.Migraine
  ],
  [Symptom.Neck]: [
    SubSymptom.CervicalFlexionExtension,
    SubSymptom.CervicalRotation,
    SubSymptom.CervicalSidebend,
    SubSymptom.Neuroscan
  ],
  [Symptom.Pain]: [
    SubSymptom.PCS,
    SubSymptom.PainCoping,
    SubSymptom.PainIntensity,
    SubSymptom.SoftTissueMsk
  ],
  [Symptom.Sleep]: [
    SubSymptom.FallingAsleep,
    SubSymptom.RestorativeSleep,
    SubSymptom.SleepHours,
    SubSymptom.StayingAsleep
  ],
  [Symptom.Thinking]: [
    SubSymptom.ReactionTime,
    SubSymptom.VMPS,
    SubSymptom.VerbalMemory
  ],
  [Symptom.Vision]: [
    SubSymptom.Saccades,
    SubSymptom.SmoothPursuits,
    SubSymptom.VOR
  ]
};
