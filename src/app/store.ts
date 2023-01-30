import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import routerReducer from '../features/Router/routerSlice';

export const store = configureStore({
  reducer: {
    router: routerReducer,
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
