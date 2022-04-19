import { Document } from './document';

export interface ClinicianWorksheet extends Document {
  data: Record<string, WorksheetItemValue>;
}

export interface WorksheetItemValue {
  score?: string | number;
  rating?: ClinicianRating;
}

export enum ClinicianRating {
  Normal = 'normal',
  Mild = 'mild',
  Moderate = 'moderate',
  Severe = 'severe'
}
