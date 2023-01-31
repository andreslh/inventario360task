import { createSlice } from '@reduxjs/toolkit';
import { LEAD_GO_GO, REQUEST_STATUS } from '../../app/constants';
import { RootState } from '../../app/store';

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
      const isFavorite = !!localStorage.getItem(`${LEAD_GO_GO}-post-${id}`);

      if (!isFavorite) {
        localStorage.setItem(`${LEAD_GO_GO}-post-${id}`, 'true');
      } else {
        localStorage.removeItem(`${LEAD_GO_GO}-post-${id}`);
      }

      const index = state.data.findIndex((post) => post.id === id);
      state.data[index].favorite = isFavorite ? false : true;
    },
  },
});

export const { requestPosts, setPosts, postsError, switchFavorite } =
  postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
