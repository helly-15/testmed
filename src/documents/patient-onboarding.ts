import { Document } from './document';

export enum OnboardingStep {
  Profile,
  Injury,
  History,
  HowAreYou
}

export interface PatientOnboarding extends Document {
  lastCompletedStep: OnboardingStep;
}
