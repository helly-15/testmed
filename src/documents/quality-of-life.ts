import { Moment } from 'moment';

import { Document } from './document';

export interface QualityOfLifeData {
  value: number;
}

export interface QualityOfLife extends Document {
  date: Moment;
  dailyLiving: QualityOfLifeData;
  physicalActivity: QualityOfLifeData;
  selfRating: QualityOfLifeData;
}
