import { Document } from './document';

export interface PatientAllergyItem extends Document {
  name: string;
  approximateOnset: string;
  note: string;
}
