import { Document } from './document';

export interface PatientHealthItem extends Document {
  issue: string;
  yearOfOnset: string;
}
