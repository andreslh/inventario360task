import React from 'react';
import classnames from 'classnames';

import styles from './Container.module.css';

type IContainerProps = {
  children: React.ReactElement;
  mobileBehavior?: 'nopadding' | 'standard';
};

export function Container(props: IContainerProps) {
  const classes = classnames(styles.Container, {
    [styles['no-padding']]: props.mobileBehavior === 'nopadding',
  });

  return <div className={classes}>{props.children}</div>;
}
