import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Post {

}

export interface PostsState {
  data: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
  data: [],
  status: 'idle',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.data = [];
    },
  },
});

export const { getPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
