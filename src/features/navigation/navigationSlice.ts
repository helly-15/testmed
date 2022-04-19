import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiPrefState {
  menuCollapsed: boolean;
  title: string;
}

const initialState: UiPrefState = {
  menuCollapsed: false,
  title: ''
};

const uiPrefSlice = createSlice({
  name: 'ui-pref',
  initialState,
  reducers: {
    toggleMenuCollapse(state) {
      state.menuCollapsed = !state.menuCollapsed;
    },
    closeMenu(state) {
      state.menuCollapsed = true;
    },
    openMenu(state) {
      state.menuCollapsed = false;
    },
    setTitle(state, { payload: title }: PayloadAction<string>) {
      state.title = title;
    }
  }
});

export const {
  toggleMenuCollapse,
  closeMenu,
  openMenu,
  setTitle
} = uiPrefSlice.actions;

export default uiPrefSlice.reducer;
