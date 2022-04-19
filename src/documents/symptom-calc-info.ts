import { Moment } from 'moment';

import { Document } from './document';
import { SymptomSource } from './patient-symptom';

export type CalcStatus = 'success' | 'fail';

export interface SymptomCalcInfo extends Document {
  status: CalcStatus;
  date: Moment;
  missingSources: SymptomSource[];
  details: Record<string, string[]>; // <SymptomSource, InventoryColumn|ClinicianWorksheetItem[]>
}
