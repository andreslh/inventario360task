import React from 'react';

import logo from './logo.svg';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <div className={styles.Menu}>
      <img src={logo} className="App-logo" alt="logo" />
      <div>Menu</div>
    </div>
  );
};