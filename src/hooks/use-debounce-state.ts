import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';

import { debounce, DebounceSettings } from 'lodash';

export function useDebounceState<T>(
  onStateChange: (state: T) => void,
  initialState?: T,
  wait?: number,
  options?: DebounceSettings
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [state, setState] = useState<T>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceCallback = useCallback(
    debounce(onStateChange, wait, options),
    []
  );

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  useEffect(() => {
    if (state && state !== initialState) {
      debounceCallback(state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
}
