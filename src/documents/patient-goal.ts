import { Document } from './document';

export enum SubgoalFrequency {
  Day = 'day',
  Week = 'week',
  Month = 'month'
}

export interface Subgoal {
  name: string;
  duration: number;
  times: number;
  frequency: SubgoalFrequency;
  note?: string;
}

export interface PatientGoal extends Document {
  name: string;
  level: number;
  subgoals: Subgoal[];
}
