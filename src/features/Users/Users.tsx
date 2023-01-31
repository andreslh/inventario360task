import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Grid } from '../../components/Grid/Grid';
import {
  requestUsers,
  selectUsers,
  setUsers,
  usersError,
  switchFavorite,
} from '../Users/usersSlice';
import { getUsers } from './api/requests';

export function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(requestUsers());
    getUsers()
      .then((usersList) => {
        dispatch(setUsers({ users: usersList }));
      })
      .catch(() => dispatch(usersError()));
  }, [dispatch]);

  const handleFavoriteSwitch = (id: string) => {
    dispatch(switchFavorite({ id }));
  };

  return (
    <Grid
      content='users'
      items={users}
      onSwitchFavorite={(id) => handleFavoriteSwitch(id)}
      onView={() => {}}
    />
  );
}
