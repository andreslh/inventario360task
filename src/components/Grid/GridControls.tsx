import React from 'react';
import { Button } from '../Button/Button';

import arrowRight from './icon_arrow_right.svg';
import arrowLeft from './icon_arrow_left.svg';
import { DECREMENT, INCREMENT } from '../../app/constants';

interface IGridControlProps {
  onPageChange: (action: string) => void;
}

export function GridControls(props: IGridControlProps) {
  return (
    <>
      <Button
        text='Prev'
        icon={arrowLeft}
        theme='light'
        size='big'
        onClick={() => props.onPageChange(DECREMENT)}
      />
      <Button
        text='Next'
        icon={arrowRight}
        iconPosition='right'
        theme='light'
        size='big'
        onClick={() => props.onPageChange(INCREMENT)}
      />
    </>
  );
}
