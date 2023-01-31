import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '../../app/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { findUser } from '../../app/utils/users';
import { Grid } from '../../components/Grid/Grid';
import { Modal } from '../../components/Modal/Modal';
import {
  requestUsers,
  selectUsers,
  setUsers,
  usersError,
  switchFavorite,
  User,
  Album,
} from '../Users/usersSlice';
import { getAlbums, getUsers } from './api/requests';

export function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [albums, setAlbums] = useState<Album[]>();
  const { id } = useParams();
  const navigate = useNavigate();

  const requestAlbums = useCallback(
    (id: string) => {
      getAlbums(id)
        .then((albums) => {
          const user = findUser(users, id);
          if (user) setSelectedUser(user);
          setAlbums(albums);
        })
        .catch(() => dispatch(usersError()));
    },
    [dispatch, users]
  );

  useEffect(() => {
    dispatch(requestUsers());
    getUsers()
      .then((usersList) => {
        if (id) requestAlbums(id);
        dispatch(setUsers({ users: usersList }));
      })
      .catch(() => dispatch(usersError()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  useEffect(() => {
    const user = findUser(users, id);
    if (user) setSelectedUser(user);
  }, [users, id]);

  const handleFavoriteSwitch = (id: string) => {
    dispatch(switchFavorite({ id }));
  };

  const handleView = (id: string) => {
    requestAlbums(id);
    navigate(`${ROUTES.USERS}/${id}`);
  };

  const handleModalClose = () => {
    navigate(ROUTES.USERS);
  };

  return (
    <>
      <Grid
        content='users'
        items={users}
        onSwitchFavorite={(id) => handleFavoriteSwitch(id)}
        onView={handleView}
      />

      {selectedUser && id ? (
        <Modal onClose={handleModalClose} item={selectedUser} albums={albums} />
      ) : null}
    </>
  );
}
