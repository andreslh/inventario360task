import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '../Container/Container';
import { ROUTES } from '../../app/constants';

import sidebar from './icon_sidebar.svg';
import avatar from './user_avatar.png';

import styles from './Header.module.css';

interface IHeaderProps {
  onSwitchMenu: () => void;
}

export function Header(props: IHeaderProps) {
  const location = useLocation();

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles['header-content']}>
          <div className={styles.mobile}>
            <img
              className={styles.sidebar}
              src={sidebar}
              alt='Menu'
              onClick={() => props.onSwitchMenu()}
            />
            <h1>{location.pathname === ROUTES.USERS ? 'Users' : 'Posts'}</h1>
          </div>

          <div className={styles.user}>
            <img src={avatar} alt='Avatar' />
            <p>
              <span className={styles.username}>Dan Romero</span>
              <span className={styles.position}>Sales Manager</span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
