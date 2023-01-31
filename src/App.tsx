import React from 'react';
import classnames from 'classnames';

import { Menu } from './components/Menu/Menu';
import { Router } from './features/Router/Router';

import { useAppSelector } from './app/hooks';
import { selectMenu } from './features/Router/routerSlice';

import './variables.css';
import './App.css';
import './common.css';

function App() {
  const mobileMenuState = useAppSelector(selectMenu);
  const classes = classnames('app-inner', {
    'menu-open': !!mobileMenuState,
  });

  return (
    <div className='App'>
      <div className={classes}>
        <Menu />
        <Router />
      </div>
    </div>
  );
}

export default App;
