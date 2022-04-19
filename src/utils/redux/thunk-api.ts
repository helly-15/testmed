import { PageState } from './page-state';

export interface ThunkApi<TState extends PageState> {
  state: TState;
}
