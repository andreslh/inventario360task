import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../app/constants';
import { RootState } from '../../app/store';
import { toggleFavorite } from '../../app/utils';

export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  favorite: boolean;
}

export interface PostsState {
  data: Post[];
  status: REQUEST_STATUS;
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
    switchFavorite: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      const { index, isFavorite } = toggleFavorite(id, state, 'posts');
      state.data[index].favorite = isFavorite;
    },
  },
});

export const { requestPosts, setPosts, postsError, switchFavorite } =
  postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
