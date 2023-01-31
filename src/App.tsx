import React from 'react';
import classnames from 'classnames';

import { Menu } from './components/Menu/Menu';
import { Router } from './features/Router/Router';
import { Header } from './components/Header/Header';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectMenu, switchMenu } from './components/Menu/menuSlice';

import './variables.css';
import './App.css';
import './common.css';

function App() {
  const dispatch = useAppDispatch();
  const mobileMenuState = useAppSelector(selectMenu);
  const classes = classnames('app-inner', {
    'menu-open': !!mobileMenuState,
  });

  return (
    <div className='App'>
      <div className={classes}>
        <Menu />

        <main>
          <Header onSwitchMenu={() => dispatch(switchMenu())} />
          <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
