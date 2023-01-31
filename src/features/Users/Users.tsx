import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Grid } from '../../components/Grid/Grid';
import { getUsers } from '../Users/UsersAPI';
import {
  requestUsers,
  selectUsers,
  setUsers,
  usersError,
  switchFavorite,
} from '../Users/usersSlice';

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
    />
  );
}
