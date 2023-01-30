import React from 'react';
import classnames from 'classnames';

import { Button } from '../Button/Button';
import { Container } from '../Container/Container';

import activeStar from './icon_star.png';
import inactiveStar from './icon_star_inactive.png';
import arrowRight from './icon_arrow_right.svg';
import arrowLeft from './icon_arrow_left.svg';

import styles from './Grid.module.css';

interface IGridElement {
  id: string;
  favorite: boolean;
  title: string;
  author: string;
}

interface IGridProps {
  items: IGridElement[];
}

export function Grid(props: IGridProps) {
  const itemsList: JSX.Element[] = [];
  props.items.forEach((item) => {
    const starClass = item.favorite ? activeStar : inactiveStar;

    itemsList.push(
      <tr>
        <td className={classnames(styles.firstColumn, 'hiddenMobile')}>
          {item.id}
        </td>
        <td className={styles.firstColumnMobile}>
          <img src={starClass} alt='Favorite' />
        </td>
        <td className={classnames(styles.bold, styles.mainText)}>
          <p className={styles.title}>{item.title}</p>
          <p className={classnames('visibleMobile', styles.detail)}>
            ID: {item.id} / By {item.author}
          </p>
        </td>
        <td className='hiddenMobile'>{item.author}</td>
        <td className={classnames(styles.lastColumn, 't-right')}>
          <div className='hiddenMobile'>
            <Button text={'View'} />
          </div>
          <img src={arrowRight} alt='View' className='visibleMobile' />
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.Grid}>
      <Container>
        <p className={styles.info}>
          Showing <span className={styles.highlightedText}>1 to 14</span> of{' '}
          <span>24</span> posts
        </p>
      </Container>

      <Container mobileBehavior='nopadding'>
        <table className={styles.content} cellPadding='0' cellSpacing='0'>
          <tr className={'hiddenMobile'}>
            <th className={classnames(styles.firstColumn, styles.firstHeader)}>
              <span>ID</span>
              <i></i>
            </th>
            <th></th>
            <th>
              <span>Title</span>
              <i></i>
            </th>
            <th>
              <span>Author</span>
              <i></i>
            </th>
          </tr>
          {itemsList}
        </table>
      </Container>

      <Container>
        <div className={styles.controls}>
          <Button text='Prev' icon={arrowLeft} theme='light' size='big' />
          <Button
            text='Next'
            icon={arrowRight}
            iconPosition='right'
            theme='light'
            size='big'
          />
        </div>
      </Container>
    </div>
  );
}
