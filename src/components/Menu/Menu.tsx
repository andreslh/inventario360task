import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <nav className={styles.Menu}>
      <img src={logo} className={styles.logo} alt='Lead go-go' />
      <ul>
        <li className={styles.posts}>
          <NavLink
            to='posts'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            <i />
            <span>Posts</span>
          </NavLink>
        </li>

        <li className={styles.users}>
          <NavLink
            to='users'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            <i />
            <span>Users</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
