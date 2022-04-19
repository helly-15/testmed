import * as React from 'react';

import { Document } from 'documents';
import fb from 'firebase/app';

import { createQuery, db, getDataConverter } from 'api/firebase';

import { CollectionQuery } from './use-editable-collection';

export function useCollection<T extends Document>({
  path,
  where,
  orderBy
}: CollectionQuery): [
  boolean,
  boolean,
  T[],
  (item: T) => Promise<void>,
  (id: string) => Promise<void>
] {
  const [items, setItems] = React.useState<T[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  const collectionRef = React.useRef<fb.firestore.CollectionReference<T>>();

  React.useEffect(() => {
    const dataConverter = getDataConverter<T>();
    collectionRef.current = db.collection(path).withConverter(dataConverter);

    const query = createQuery<T>(path, db, dataConverter, where, orderBy);

    const unsubscribe = query.onSnapshot(
      snapshot => {
        const freshItems: T[] = [];
        snapshot.forEach(doc => freshItems.push(doc.data()));
        setItems(freshItems);
        setLoading(false);
      },
      err => {
        setError(true);
        console.error(err);
      }
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = React.useCallback(async (item: T) => {
    try {
      await (item.id
        ? collectionRef.current?.doc(item.id).set(item)
        : collectionRef.current?.add(item));
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, []);

  const remove = React.useCallback(async (id: string) => {
    try {
      await collectionRef.current?.doc(id).delete();
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, []);

  return [hasError, isLoading, items, update, remove];
}
