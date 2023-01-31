import React, { useMemo, useState } from 'react';

import {
  ENTITIES,
  DECREMENT,
  INCREMENT,
  ITEMS_PER_PAGE,
} from '../../app/constants';
import { Container } from '../Container/Container';
import { GridItem } from './GridItem';
import { GridControls } from './GridControls';
import { GridHeader } from './GridHeader';

import styles from './Grid.module.css';

export interface IGridElement {
  id: string;
  favorite: boolean;
  title?: string;
  author?: string;
  phone?: string;
  name?: string;
}

interface IGridProps {
  content: ENTITIES;
  items: IGridElement[];
  onSwitchFavorite: (id: string) => void;
  onView: (id: string) => void;
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
  const canGoNext = useMemo(
    () => endItem < totalPages * ITEMS_PER_PAGE,
    [endItem, totalPages]
  );
  const canGoPrev = useMemo(() => currentPage > 0, [currentPage]);

  const handlePageChange = (action: string) => {
    if (action === INCREMENT && canGoNext) {
      setCurrentPage(currentPage + 1);
    }

    if (action === DECREMENT && canGoPrev) {
      setCurrentPage(currentPage - 1);
    }
  };

  const itemsList: JSX.Element[] = [];
  props.items.slice(startItem, endItem).forEach((item) => {
    itemsList.push(
      <GridItem
        item={item}
        onView={props.onView}
        onSwitchFavorite={props.onSwitchFavorite}
        key={item.id}
      />
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
            <GridControls
              onPageChange={handlePageChange}
              prevDisabled={!canGoPrev}
              nextDisabled={!canGoNext}
            />
          </div>
        </div>
      </Container>

      <Container mobileBehavior='nopadding'>
        <table className={styles.content} cellPadding='0' cellSpacing='0'>
          <GridHeader content={props.content} />
          <tbody>{itemsList}</tbody>
        </table>
      </Container>

      <Container>
        <div className={styles.controls}>
          <GridControls
            onPageChange={handlePageChange}
            prevDisabled={!canGoPrev}
            nextDisabled={!canGoNext}
          />
        </div>
      </Container>
    </div>
  );
}
