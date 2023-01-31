import React from 'react';
import classnames from 'classnames';

import { Button } from '../Button/Button';
import { parseEntity } from '../../app/utils/parsers';
import { IGridElement } from './Grid';

import activeStar from './icon_star.png';
import inactiveStar from './icon_star_inactive.png';
import arrowRight from './icon_arrow_right.svg';

import styles from './Grid.module.css';

interface IGridItemProps {
  item: IGridElement;
  onView: (id: string) => void;
  onSwitchFavorite: (id: string) => void;
}

export function GridItem(props: IGridItemProps) {
  const { item } = props;
  const starClass = item.favorite ? activeStar : inactiveStar;
  const handleView = () => props.onView(item.id);
  const entity = parseEntity(item);

  return (
    <tr key={item.id}>
      <td
        className={classnames(styles['first-column'], 'hide-mobile')}
        width='6%'
      >
        {item.id}
      </td>
      <td className={styles['first-column-mobile']} width='5%'>
        <img
          className={styles.favorite}
          src={starClass}
          alt='Favorite'
          onClick={() => props.onSwitchFavorite(item.id)}
        />
      </td>
      <td className={classnames(styles['main-text'])}>
        <p className={styles.title}>{entity.name}</p>
        <p className={classnames('display-mobile', styles.detail)}>
          ID: {item.id} / {entity.detailPrefix}
          {entity.detail}
        </p>
      </td>
      <td className='hide-mobile' width='25%'>
        {entity.detail}
      </td>
      <td className={classnames(styles['last-column'], 't-right')} width='5%'>
        <div className='hide-mobile'>
          <Button text={'View'} onClick={handleView} />
        </div>
        <img
          src={arrowRight}
          alt='View'
          className='display-mobile'
          onClick={handleView}
        />
      </td>
    </tr>
  );
}
