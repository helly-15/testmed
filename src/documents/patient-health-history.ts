import { Document } from './document';
import { CancerSheet } from './patient-family-history';

export interface Issue {
  answer?: string;
  onsetYear?: string;
}

export interface PatientHealthHistory extends Document {
  asthma: Issue;
  chronicObstructivePulmonaryDisease: Issue;
  chronsDisease: Issue;
  chronicPancreatitis: Issue;
  type1Diabetes: Issue;
  type2Diabetes: Issue;
  highBloodSugar: Issue;
  highBloodPressure: Issue;
  highCholesterol: Issue;
  cancer: Issue;
  cancerSheet?: CancerSheet;
  comments: string;
}
