import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Grid } from '../../components/Grid/Grid';
import { getUsers } from '../Users/UsersAPI';
import { requestUsers, setUsers, usersError } from '../Users/usersSlice';
import { getPosts } from './PostsAPI';
import {
  postsError,
  requestPosts,
  selectPosts,
  setPosts,
  switchFavorite,
} from './postsSlice';

export function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(requestUsers());
    getUsers()
      .then((usersList) => {
        dispatch(setUsers({ users: usersList }));
        dispatch(requestPosts());
        getPosts(usersList)
          .then((postsList) => dispatch(setPosts({ posts: postsList })))
          .catch(() => dispatch(postsError()));
      })
      .catch(() => dispatch(usersError()));
  }, [dispatch]);

  const handleFavoriteSwitch = (id: string) => {
    dispatch(switchFavorite({ id }));
  };

  return (
    <Grid items={posts} onSwitchFavorite={(id) => handleFavoriteSwitch(id)} />
  );
}
