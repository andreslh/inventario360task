import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import usersReducer from '../features/Users/usersSlice';
import menuReducer from '../components/Menu/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
