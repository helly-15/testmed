import {
  Dispatch,
  Reducer,
  ReducerState,
  useCallback,
  useRef,
  useState
} from 'react';

// TODO add Redux WebTools support
export function useReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>
): [ReducerState<R>, Dispatch<any>] {
  const stateRef = useRef<ReducerState<R>>(initialState);
  const [, setState] = useState(stateRef.current);

  const customDispatch = useCallback(
    (action: any) => {
      if (typeof action === 'function') {
        action(customDispatch, () => stateRef.current);
      } else {
        stateRef.current = reducer(stateRef.current, action);
        setState(stateRef.current);
      }
    },
    [reducer]
  );

  return [stateRef.current, customDispatch];
}
