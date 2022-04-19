import { SubSymptom, Symptom } from 'documents';

export const symptomLabels: { [key: string]: string } = {
  [Symptom.Balance]: 'Balance',
  [Symptom.Fatigue]: 'Fatigue',
  [Symptom.Emotions]: 'Emotions',
  [Symptom.ExertionTolerance]: 'Exertion Tolerance',
  [Symptom.Headache]: 'Headache',
  [Symptom.Neck]: 'Neck',
  [Symptom.Pain]: 'Pain',
  [Symptom.Sleep]: 'Sleep',
  [Symptom.Thinking]: 'Thinking',
  [Symptom.Vision]: 'Vision'
};

export const symptomsToSso: Record<string, string> = {
  [Symptom.Balance]: 'Vestibular',
  [Symptom.Fatigue]: 'Vestibular',
  [Symptom.Emotions]: 'Mood',
  [Symptom.ExertionTolerance]: 'Autonomic Nervous System',
  [Symptom.Headache]: 'Headache',
  [Symptom.Neck]: 'Cervical',
  [Symptom.Pain]: '',
  [Symptom.Sleep]: 'Sleep',
  [Symptom.Thinking]: 'Cognition',
  [Symptom.Vision]: 'Oculomotor'
};

export const subSymptomLabels: { [key: string]: string } = {
  [SubSymptom.Anxiety]: 'Anxiety',
  [SubSymptom.BalanceTesting]: 'Balance Testing',
  [SubSymptom.CervicalFlexionExtension]: 'Cervical Flexion Extension',
  [SubSymptom.CervicalRotation]: 'Cervical Rotation',
  [SubSymptom.CervicalSidebend]: 'Cervical Sidebend',
  [SubSymptom.CervicogenicHeadache]: 'Cervicogenic Headache',
  [SubSymptom.ConditionalFitness]: 'Conditional Fitness',
  [SubSymptom.Coping]: 'Coping',
  [SubSymptom.CxTension]: 'Cx Tension',
  [SubSymptom.Depression]: 'Depression',
  [SubSymptom.Dizziness]: 'Dizziness',
  [SubSymptom.FallingAsleep]: 'Falling Asleep',
  [SubSymptom.HeartRateVariability]: 'Heart Rate Variability',
  [SubSymptom.Migraine]: 'Migraine',
  [SubSymptom.MotionSensitivity]: 'Motion Sensitivity',
  [SubSymptom.Neuroscan]: 'Neuroscan',
  [SubSymptom.PainCoping]: 'Pain Coping',
  [SubSymptom.PainIntensity]: 'Pain Intensity',
  [SubSymptom.PCS]: 'PCS',
  [SubSymptom.PainInterference]: 'Pain Interference',
  [SubSymptom.PositionalTolerance]: 'Positional Tolerance',
  [SubSymptom.ReactionTime]: 'ReactionTime',
  [SubSymptom.RestorativeSleep]: 'Restorative Sleep',
  [SubSymptom.Saccades]: 'Saccades',
  [SubSymptom.SleepHours]: 'Sleep Hours',
  [SubSymptom.SmoothPursuits]: 'Smooth Pursuits',
  [SubSymptom.SocialFunctioning]: 'Social Functioning',
  [SubSymptom.SocialSupport]: 'Social Support',
  [SubSymptom.SoftTissueMsk]: 'Soft Tissue Msk',
  [SubSymptom.StayingAsleep]: 'Staying Asleep',
  [SubSymptom.ThinkingConcerns]: 'Thinking Concerns',
  [SubSymptom.VerbalMemory]: 'Verbal Memory',
  [SubSymptom.VMPS]: 'VMPS',
  [SubSymptom.VOR]: 'VOR'
};
