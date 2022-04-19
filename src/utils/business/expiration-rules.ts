import {
  ExpirationPeriod,
  PatientSymptom,
  Symptom,
  SymptomSource,
  SymptomSources
} from 'documents';
import moment, { Moment } from 'moment';
import { clearTimezone } from 'utils/object';

export function getSymptomExpiredSources(
  symptomName: Symptom,
  symptom: PatientSymptom,
  inventoryExpirations?: ExpirationPeriod
): SymptomSource[] {
  const symptomSources = SymptomSources[symptomName];

  const expiredSources: SymptomSource[] = [];
  if (!notExpirable.includes(symptomName)) {
    if (symptomSources.includes('Cgs')) {
      const days = inventoryExpirations?.cgs ?? 30;
      if (isExpired(symptom.date, days)) {
        expiredSources.push('Cgs');
      }
    }
    if (symptomSources.includes('Promis')) {
      const days = inventoryExpirations?.otherOutcomeMeasures ?? 30;
      if (isExpired(symptom.date, days)) {
        expiredSources.push('Promis');
      }
    }
  }

  return expiredSources;
}

export const isQolExpired = (date: Moment) =>
  date.clone().add(7, 'day').isBefore(moment());

const isExpired = (date: Moment, days: number) =>
  date.clone().add(days, 'day').isBefore(clearTimezone(moment()));

export const notExpirable: Readonly<Symptom[]> = [
  Symptom.Neck,
  Symptom.ExertionTolerance
];
