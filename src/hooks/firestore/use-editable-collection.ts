import { useEffect, useRef, useState } from 'react';

import { Document } from 'documents';
import fb from 'firebase/app';

import {
  createQuery,
  db,
  getDataConverter,
  OrderByCondition,
  WhereCondition
} from 'api/firebase';

export interface CollectionQuery {
  path: string;
  where?: WhereCondition | WhereCondition[];
  orderBy?: OrderByCondition;
  loadOnMount?: boolean;
}

export interface UseCollectionResult<T> {
  hasError: boolean;
  isLoading: boolean;
  items: T[];
  refresh: () => void;
  add: (item: T) => Promise<void>;
  update: (item: T) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const useEditableCollection = <T extends Document>({
  path,
  where,
  orderBy,
  loadOnMount = true
}: CollectionQuery): UseCollectionResult<T> => {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const collectionRef = useRef<fb.firestore.CollectionReference<T>>();
  const queryRef = useRef<fb.firestore.Query<T>>();

  useEffect(() => {
    const dataConverter = getDataConverter<T>();

    collectionRef.current = db.collection(path).withConverter(dataConverter);

    queryRef.current = createQuery<T>(path, db, dataConverter, where, orderBy);

    if (loadOnMount) {
      load(queryRef.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load(query: fb.firestore.Query<T>) {
    setLoading(true);
    try {
      const snapshot = await query.get();

      const items: T[] = [];
      snapshot.forEach(doc => items.push(doc.data()));

      setItems(items);
    } catch (error) {
      console.error(error);
      setError(true);
    }

    setLoading(false);
  }

  function refresh() {
    load(queryRef.current!);
  }

  async function add(item: T) {
    setLoading(true);
    setError(false);

    try {
      const docRef = await collectionRef.current?.add(item);
      if (!docRef) {
        return;
      }
      item.id = docRef?.id;
      setItems(items => items.concat(item));
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  async function update(item: T) {
    setError(false);

    try {
      setItems(items => {
        const index = items.findIndex(a => a.id === item.id);
        return index < 0
          ? items
          : items.map((x, i) => (i === index ? item : x));
      });

      await collectionRef.current?.doc(item.id).set(item);
    } catch (error) {
      console.error(error);
      setError(true);
      setItems(items => items.filter(i => i.id !== item.id));
    }
  }

  async function remove(id: string) {
    setError(false);
    let item: T;
    let itemIndex: number;

    try {
      setItems(items => {
        itemIndex = items.findIndex(x => x.id === id);
        item = items[itemIndex];
        return items.filter(x => x.id !== id);
      });

      await collectionRef.current?.doc(id).delete();
    } catch (error) {
      console.error(error);

      setItems(items => {
        const copy = [...items];
        copy.splice(itemIndex, 0, item);
        return copy;
      });
    }
  }

  return { hasError, isLoading, items, refresh, add, update, remove };
};
