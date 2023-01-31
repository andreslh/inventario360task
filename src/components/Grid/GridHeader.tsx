import React from 'react';

import { ENTITIES } from '../../app/constants';

import styles from './Grid.module.css';

interface IGridHeaderProps {
  content: ENTITIES;
}

export function GridHeader(props: IGridHeaderProps) {
  return (
    <thead>
      <tr className={'hide-mobile'}>
        <th className={styles['first-column']}>
          <span>ID</span>
          <i></i>
        </th>
        <th></th>
        <th>
          <span>{props.content === 'posts' ? 'Title' : 'Name'}</span>
          <i></i>
        </th>
        <th>
          <span>{props.content === 'posts' ? 'Author' : 'Phone'}</span>
          <i></i>
        </th>
      </tr>
    </thead>
  );
}
