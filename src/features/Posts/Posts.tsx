import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../app/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { findPost } from '../../app/utils/posts';
import { Grid } from '../../components/Grid/Grid';
import { Modal } from '../../components/Modal/Modal';
import { getUsers } from '../Users/api/requests';
import { requestUsers, setUsers, usersError } from '../Users/usersSlice';
import { getComments, getPosts } from './api/requests';
import {
  Comment,
  Post,
  postsError,
  requestPosts,
  selectPosts,
  setPosts,
  switchFavorite,
} from './postsSlice';

export function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const [selectedPost, setSelectedPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>();
  const { id } = useParams();
  const navigate = useNavigate();

  const requestComments = useCallback(
    (id: string) => {
      getComments(id)
        .then((comments) => {
          const post = findPost(posts, id);
          if (post) setSelectedPost(post);
          setComments(comments);
        })
        .catch(() => dispatch(postsError()));
    },
    [dispatch, posts]
  );

  useEffect(() => {
    dispatch(requestUsers());
    getUsers()
      .then((usersList) => {
        dispatch(setUsers({ users: usersList }));
        dispatch(requestPosts());
        getPosts(usersList)
          .then((postsList) => {
            if (id) requestComments(id);
            dispatch(setPosts({ posts: postsList }));
          })
          .catch(() => dispatch(postsError()));
      })
      .catch(() => dispatch(usersError()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  useEffect(() => {
    const post = findPost(posts, id);
    if (post) setSelectedPost(post);
  }, [posts, id]);

  const handleFavoriteSwitch = (id: string) => {
    dispatch(switchFavorite({ id }));
  };

  const handleView = (id: string) => {
    requestComments(id);
    navigate(`${ROUTES.POSTS}/${id}`);
  };

  const handleModalClose = () => {
    navigate(ROUTES.POSTS);
  };

  return (
    <>
      <Grid
        content='posts'
        items={posts}
        onSwitchFavorite={handleFavoriteSwitch}
        onView={handleView}
      />

      {selectedPost && id ? (
        <Modal
          onClose={handleModalClose}
          item={selectedPost}
          comments={comments}
        />
      ) : null}
    </>
  );
}
