import { useMemo, useState } from 'react';
import { DECREMENT, INCREMENT, ITEMS_PER_PAGE } from '../../app/constants';

export const useGrid = (length: number) => {
  const itemsLength = length;
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

  return {
    itemsLength,
    currentPage,
    handlePageChange,
    startItem,
    endItem,
    canGoNext,
    canGoPrev,
  };
};
