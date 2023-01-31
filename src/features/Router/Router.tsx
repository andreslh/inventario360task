import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../app/constants';

import { Posts } from '../Posts/Posts';
import { Users } from '../Users/Users';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path={`${ROUTES.POSTS}/:id?`} element={<Posts />} />
      <Route path={`${ROUTES.USERS}/:id?`} element={<Users />} />
    </Routes>
  );
}
