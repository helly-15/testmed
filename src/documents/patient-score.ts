import { Moment } from 'moment';

import { Document } from './document';

export interface PatientScore extends Document {
  date: Moment;
  sectionId: string;
  score: number;
}
