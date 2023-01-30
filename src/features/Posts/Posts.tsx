import React, { useEffect } from 'react';
import { BASE_URL } from '../../app/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Grid } from '../../components/Grid/Grid';
import { parsePosts } from './helper';
import { postsError, requestPosts, selectPosts, setPosts } from './postsSlice';

export function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(requestPosts());
    fetch(`${BASE_URL}posts`)
      .then((response) =>
        response.json().then((items) => {
          const posts = parsePosts(items);
          dispatch(setPosts({ posts }));
        })
      )
      .catch(() => dispatch(postsError()));
  }, [dispatch]);

  return <Grid items={posts} />;
}
