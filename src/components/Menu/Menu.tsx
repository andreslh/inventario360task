import React from 'react';
import classnames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

import logo from './logo.svg';
import styles from './Menu.module.css';

export function Menu() {
  const location = useLocation();

  return (
    <nav className={styles.Menu}>
      <img src={logo} className={styles.logo} alt='Lead go-go' />
      <ul>
        <li className={styles.posts}>
          <NavLink
            to='posts'
            className={classnames({
              [styles.active]: location.pathname !== '/users',
            })}
          >
            <i />
            <span>Posts</span>
          </NavLink>
        </li>

        <li className={styles.users}>
          <NavLink
            to='users'
            className={classnames({
              [styles.active]: location.pathname === '/users',
            })}
          >
            <i />
            <span>Users</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
