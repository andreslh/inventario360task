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
            <Button text={'View'} onClick={() => {}} />
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
          Showing{' '}
          <span className={styles.highlightedText}>
            {startItem + 1} to {endItem <= itemsLength ? endItem : itemsLength}
          </span>{' '}
          of <span className={styles.highlightedText}>{itemsLength}</span> posts
        </p>
      </Container>

      <Container mobileBehavior='nopadding'>
        <table className={styles.content} cellPadding='0' cellSpacing='0'>
          <thead>
            <tr className={'hiddenMobile'}>
              <th
                className={classnames(styles.firstColumn, styles.firstHeader)}
              >
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
