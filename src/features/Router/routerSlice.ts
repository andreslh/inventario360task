import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface RouterState {
  menuVisible: boolean;
}

const initialState: RouterState = {
  menuVisible: false,
};

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    switchMenu: (state) => {
      state.menuVisible = !state.menuVisible;
    },
  },
});

export const { switchMenu } = routerSlice.actions;

export const selectMenu = (state: RootState) => state.router.menuVisible;

export default routerSlice.reducer;
