import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { Header } from '../../components/Header/Header';
import { Posts } from '../Posts/Posts';

import styles from './Router.module.css';
import { switchMenu } from './routerSlice';

export function Router() {
  const dispatch = useAppDispatch();

  return (
    <main className={styles.Main}>
      <Header onSwitchMenu={() => dispatch(switchMenu())} />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </main>
  );
}
