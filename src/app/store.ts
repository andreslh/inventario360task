import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import menuReducer from '../components/Menu/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    posts: postsReducer,
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
