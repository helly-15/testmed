import { Document } from './document';
import { Moment } from "moment";

export interface PatientProblem extends Document {
  data: string[];
  date: Moment;
}
