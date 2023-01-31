import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Posts } from '../Posts/Posts';
import { Users } from '../Users/Users';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  );
}
