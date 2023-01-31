import React, { useMemo, useState } from 'react';
import classnames from 'classnames';

import { Button } from '../Button/Button';
import { Container } from '../Container/Container';

import activeStar from './icon_star.png';
import inactiveStar from './icon_star_inactive.png';
import arrowRight from './icon_arrow_right.svg';
import arrowLeft from './icon_arrow_left.svg';

import styles from './Grid.module.css';

const ITEMS_PER_PAGE = 14;
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

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
  const itemsLength = props.items.length;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages: number = useMemo(
    () => (itemsLength ? Math.round(itemsLength / ITEMS_PER_PAGE) : 0),
    [itemsLength]
  );
  const startItem = useMemo(() => currentPage * ITEMS_PER_PAGE, [currentPage]);
  const endItem = useMemo(
    () => currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    [currentPage]
  );

  const handlePageChange = (action: string) => {
    if (action === INCREMENT && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }

    if (action === DECREMENT && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const itemsList: JSX.Element[] = [];
  props.items.slice(startItem, endItem).forEach((item) => {
    const starClass = item.favorite ? activeStar : inactiveStar;

    itemsList.push(
      <tr key={item.id}>
        <td
          className={classnames(styles['first-column'], 'hide-mobile')}
          width='6%'
        >
          {item.id}
        </td>
        <td className={styles['first-column-mobile']} width='5%'>
          <img src={starClass} alt='Favorite' />
        </td>
        <td className={classnames(styles['main-text'])}>
          <p className={styles.title}>{item.title}</p>
          <p className={classnames('display-mobile', styles.detail)}>
            ID: {item.id} / By {item.author}
          </p>
        </td>
        <td className='hide-mobile' width='25%'>
          {item.author}
        </td>
        <td className={classnames(styles['last-column'], 't-right')} width='5%'>
          <div className='hide-mobile'>
            <Button text={'View'} onClick={() => {}} />
          </div>
          <img src={arrowRight} alt='View' className='display-mobile' />
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.Grid}>
      <Container>
        <div className={styles.info}>
          <p>
            Showing{' '}
            <span className={styles['highlighted-text']}>
              {startItem + 1} to{' '}
              {endItem <= itemsLength ? endItem : itemsLength}
            </span>{' '}
            of <span className={styles['highlighted-text']}>{itemsLength}</span>{' '}
            posts
          </p>
          <div className={styles['controls-top']}>
            <Button
              text='Prev'
              icon={arrowLeft}
              theme='light'
              size='big'
              onClick={() => handlePageChange(DECREMENT)}
            />
            <Button
              text='Next'
              icon={arrowRight}
              iconPosition='right'
              theme='light'
              size='big'
              onClick={() => handlePageChange(INCREMENT)}
            />
          </div>
        </div>
      </Container>

      <Container mobileBehavior='nopadding'>
        <table className={styles.content} cellPadding='0' cellSpacing='0'>
          <thead>
            <tr className={'hide-mobile'}>
              <th className={styles['first-column']}>
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
          </thead>
          <tbody>{itemsList}</tbody>
        </table>
      </Container>

      <Container>
        <div className={styles.controls}>
          <Button
            text='Prev'
            icon={arrowLeft}
            theme='light'
            size='big'
            onClick={() => handlePageChange(DECREMENT)}
          />
          <Button
            text='Next'
            icon={arrowRight}
            iconPosition='right'
            theme='light'
            size='big'
            onClick={() => handlePageChange(INCREMENT)}
          />
        </div>
      </Container>
    </div>
  );
}
