import { Document } from 'documents';

import {
  createQuery,
  db,
  getDataConverter,
  OrderByCondition,
  WhereCondition
} from './index';

export interface CollectionQuery {
  where?: WhereCondition | WhereCondition[];
  orderBy?: OrderByCondition;
}

export interface DocQuery extends CollectionQuery {
  id?: string;
}

export interface Repo<T extends Document> {
  getList: (query?: CollectionQuery) => Promise<T[]>;
  find: (id: string) => Promise<T | undefined>;
  first: (query?: CollectionQuery) => Promise<T | undefined>;
  add: (item: T) => Promise<string | undefined>;
  set: (item: T) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export function createRepo<T extends Document>(path: string): Repo<T> {
  const dataConverter = getDataConverter<T>();

  return {
    getList: async (query?: CollectionQuery) => {
      const snapshot = await createQuery<T>(
        path,
        db,
        dataConverter,
        query?.where,
        query?.orderBy
      ).get();
      const items: T[] = [];
      snapshot.forEach(doc => items.push(doc.data()));

      return items;
    },
    find: async id => {
      const docSnapshot = await db
        .collection(path)
        .doc(id)
        .withConverter(dataConverter)
        .get();
      return docSnapshot.data();
    },
    first: async query => {
      let doc: T | undefined;
      const snapshot = await createQuery<T>(
        path,
        db,
        dataConverter,
        query?.where,
        query?.orderBy
      )
        .limit(1)
        .get();
      if (snapshot.docs.length > 0) {
        doc = snapshot.docs[0].data();
      }

      return doc;
    },
    add: async (item: T) => {
      const docRef = await db
        .collection(path)
        .withConverter(dataConverter)
        .add(item);
      return docRef?.id;
    },
    set: async (item: T) =>
      db.collection(path).doc(item.id).withConverter(dataConverter).set(item),
    delete: async (id: string) => db.collection(path).doc(id).delete()
  };
}
