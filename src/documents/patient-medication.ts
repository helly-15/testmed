import { Document } from './document';

export interface PatientMedication extends Document {
  name: string;
  approximateOnset: string;
  note: string;
}
