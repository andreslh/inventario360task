import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../app/constants';
import { RootState } from '../../app/store';

export interface User {
  id: string;
  name: string;
  phone: string;
  favorite: boolean;
}

export interface UsersState {
  data: User[];
  status: REQUEST_STATUS;
}

const initialState: UsersState = {
  data: [],
  status: 'idle',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    requestUsers: (state) => {
      state.status = 'loading';
    },
    setUsers: (state, action: { payload: { users: User[] } }) => {
      state.data = action.payload.users;
      state.status = 'idle';
    },
    usersError: (state) => {
      state.status = 'failed';
    },
  },
});

export const { requestUsers, setUsers, usersError } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.data;

export default usersSlice.reducer;
