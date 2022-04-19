import { Moment } from 'moment';

import { Document } from './document';

export interface ExpirationPeriod {
  cgs?: number;
  otherOutcomeMeasures?: number;
}

export interface Patient extends Document {
  displayName: string;
  email: string;
  birthDate?: Moment;
  inventoryExpirations?: ExpirationPeriod;
  memo?: string;
}
