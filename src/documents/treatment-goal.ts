import { Document } from './document';

export interface TreatmentGoal extends Document {
  name: string;
  levels: Record<number, string[]>;
}
