import { Document } from 'documents';
import fb from 'firebase/app';

export type WhereCondition = [
  string | fb.firestore.FieldPath,
  fb.firestore.WhereFilterOp,
  any
];

export type OrderByCondition = [
  string | fb.firestore.FieldPath,
  'asc' | 'desc' | undefined
];

export function createQuery<T extends Document>(
  collectionName: string,
  db: fb.firestore.Firestore,
  dataConverter: fb.firestore.FirestoreDataConverter<T>,
  where?: WhereCondition | WhereCondition[],
  orderBy?: OrderByCondition
) {
  let ref: fb.firestore.Query = db.collection(collectionName);
  if (where) {
    // `WhereCondition` is an array, if the first element is also an array than `where` type is `WhereCondition[]`
    if (Array.isArray(where[0])) {
      where.forEach((w: WhereCondition) => (ref = ref.where(w[0], w[1], w[2])));
    } else {
      const whereCondition = where as WhereCondition;
      ref = ref.where(whereCondition[0], whereCondition[1], whereCondition[2]);
    }
  }

  if (orderBy) {
    ref = ref.orderBy(orderBy[0], orderBy[1]);
  }

  return ref.withConverter(dataConverter);
}
