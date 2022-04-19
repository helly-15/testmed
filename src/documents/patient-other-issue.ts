import { Document } from './document';

export interface PatientOtherIssue extends Document {
  name: string;
  onsetYear: string;
}
