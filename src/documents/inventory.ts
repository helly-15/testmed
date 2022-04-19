import { Moment } from 'moment';

import { Document } from './document';

export interface Inventory extends Document {
  data: Record<string, number>;
  date: Moment;
}
