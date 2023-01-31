import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Posts } from '../Posts/Posts';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
}
