import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

interface IButtonProps {
  text: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  theme?: 'standard' | 'light';
  size?: 'standard' | 'big';
  onClick: () => void;
}

export function Button(props: IButtonProps) {
  const classes = classnames(styles.Button, {
    [styles[`position-${props.iconPosition ? props.iconPosition : 'left'}`]]:
      !!props.icon,
    [styles.light]: props.theme === 'light',
    [styles.big]: props.size === 'big',
  });

  return (
    <button className={classes} onClick={() => props.onClick()}>
      {props.icon ? (
        <img src={props.icon} alt='icon' className={styles.icon} />
      ) : null}
      <span>{props.text}</span>
    </button>
  );
}
