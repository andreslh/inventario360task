import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MenuState {
  visible: boolean;
}

const initialState: MenuState = {
  visible: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchMenu: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { switchMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.visible;

export default menuSlice.reducer;
