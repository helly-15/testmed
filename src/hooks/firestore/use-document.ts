import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Document } from 'documents';
import fb from 'firebase/app';
import { debounce } from 'lodash';

import {
  createQuery,
  db,
  getDataConverter,
  OrderByCondition,
  WhereCondition
} from 'api/firebase';

export interface DocQuery {
  path: string;
  id?: string;
  where?: WhereCondition | WhereCondition[];
  orderBy?: OrderByCondition;
  updateWait?: number;
}

export type SetDocAction<T extends Document> = (doc?: T) => T;

export const useDocument = <T extends Document>({
  path,
  id,
  where,
  orderBy,
  updateWait = 1000
}: DocQuery) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [doc, setDoc] = useState<T>();
  const docRef = useRef<fb.firestore.DocumentReference<T>>();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const dataConverter = getDataConverter<T>();
        if (id) {
          docRef.current = db
            .collection(path)
            .doc(id)
            .withConverter(dataConverter);

          const docSnapshot = await docRef.current.get();
          setDoc(docSnapshot.data());
          setIsLoading(false);
        } else {
          const snapshot = await createQuery<T>(
            path,
            db,
            dataConverter,
            where,
            orderBy
          )
            .limit(1)
            .get();
          if (snapshot.docs.length > 0) {
            docRef.current = snapshot.docs[0].ref;
            setDoc(snapshot.docs[0].data());
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createDoc = useMemo(
    () =>
      debounce(async (doc: T) => {
        try {
          const ref = await db
            .collection(path)
            .withConverter(getDataConverter<T>())
            .add(doc);
          doc.id = ref.id;
          docRef.current = ref;
        } catch (error) {
          console.error(error);
          setHasError(true);
        }
      }, updateWait),
    [path, updateWait]
  );

  const updateDoc = useMemo(
    () =>
      debounce(async (doc: T) => {
        try {
          await docRef.current?.set(doc);
        } catch (error) {
          console.error(error);
          setHasError(true);
        }
      }, updateWait),
    [updateWait]
  );

  const update = useCallback(
    async (func: SetDocAction<T> | T) => {
      setDoc(prev => {
        const next: T = typeof func === 'function' ? func(prev) : func;

        if (docRef.current) {
          updateDoc(next);
        } else {
          createDoc(next);
        }

        return next;
      });
    },
    [updateDoc, createDoc]
  );

  const remove = useCallback(async () => {
    if (docRef.current) {
      try {
        await docRef.current.delete();
        setDoc(undefined);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    }
  }, []);

  return { hasError, isLoading, doc, update, remove };
};
