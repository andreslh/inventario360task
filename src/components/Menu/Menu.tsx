import React from 'react';
import classnames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from './logo.svg';
import styles from './Menu.module.css';
import { ROUTES } from '../../app/constants';

interface IMenuProps {
  onSwitchMenu: () => void;
}

export function Menu(props: IMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    props.onSwitchMenu();
    navigate(route);
  };

  return (
    <nav className={styles.Menu}>
      <img src={logo} className={styles.logo} alt='Lead gogo' />
      <ul>
        <li className={styles.posts}>
          <button
            onClick={() => {
              navigateTo(ROUTES.POSTS);
            }}
            className={classnames({
              [styles.active]: location.pathname !== '/users',
            })}
          >
            <i />
            <span>Posts</span>
          </button>
        </li>

        <li className={styles.users}>
          <button
            onClick={() => {
              navigateTo(ROUTES.USERS);
            }}
            className={classnames({
              [styles.active]: location.pathname === '/users',
            })}
          >
            <i />
            <span>Users</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
