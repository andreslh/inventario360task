import React from 'react';

import { Container } from '../Container/Container';

import sidebar from './icon_sidebar.svg';
import avatar from './user_avatar.png';
import styles from './Header.module.css';

interface IHeaderProps {
  onSwitchMenu: () => void;
}

export function Header(props: IHeaderProps) {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.mobile}>
            <img
              className={styles.sidebar}
              src={sidebar}
              alt='Menu'
              onClick={() => props.onSwitchMenu()}
            />
            <h1>Posts</h1>
          </div>

          <div className={styles.User}>
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
