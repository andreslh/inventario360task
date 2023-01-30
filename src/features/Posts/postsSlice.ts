import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Post {
  id: string;
  title: string;
  favorite: boolean;
  body: string;
  author: string;
}

export interface PostsState {
  data: Post[];
  status: 'loading' | 'idle' | 'failed';
}

const initialState: PostsState = {
  data: [],
  status: 'idle',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    requestPosts: (state) => {
      state.status = 'loading';
    },
    setPosts: (state, action: { payload: { posts: Post[] } }) => {
      state.data = action.payload.posts;
      state.status = 'idle';
    },
    postsError: (state) => {
      state.status = 'failed';
    },
  },
});

export const { requestPosts, setPosts, postsError } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
