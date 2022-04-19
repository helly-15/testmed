import { Document } from 'documents';
import { firestore } from 'firebase/app';
import { cloneDeepWith } from 'lodash';
import moment from 'moment';

function convertFrom(value: any): any {
  if (value instanceof firestore.Timestamp) {
    return moment.utc((value as firestore.Timestamp).toDate());
  }
  return;
}

function convertTo(value: any): any {
  if (value === undefined) {
    return null;
  }

  if (moment.isMoment(value)) {
    // .utc(true): we convert TZ to UTC w/o changing the datetime value.
    // That's how we agree to keep dates in Firestore
    // (see README.md, "Working with Dates in CareChart" for details)
    return (value as moment.Moment).utc(true).toDate();
  }

  return;
}

/**
 * Converts data from db to app representation
 */
export function getDataConverter<
  T extends Document
>(): firestore.FirestoreDataConverter<T> {
  return {
    toFirestore: function (document: T) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...data } = document;

      const metadata = {
        schemaVersion: process.env.REACT_APP_DB_SCHEME_VERSION,
        created:
          document.metadata?.created?.utc(true).toDate() ||
          firestore.FieldValue.serverTimestamp(),
        updated: firestore.FieldValue.serverTimestamp()
      };

      return {
        ...cloneDeepWith(data, convertTo),
        metadata
      };
    },

    fromFirestore: function (
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions
    ) {
      const data = snapshot.data(options);

      return {
        id: snapshot.id,
        ...cloneDeepWith(data, convertFrom)
      } as T;
    }
  };
}
