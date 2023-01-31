import React from 'react';

import { Button } from '../Button/Button';
import { DECREMENT, INCREMENT } from '../../app/constants';

import arrowRight from './icon_arrow_right.svg';
import arrowLeft from './icon_arrow_left.svg';

interface IGridControlProps {
  onPageChange: (action: string) => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

export function GridControls(props: IGridControlProps) {
  return (
    <>
      <Button
        text='Prev'
        icon={arrowLeft}
        theme='light'
        size='big'
        disabled={props.prevDisabled}
        onClick={() => props.onPageChange(DECREMENT)}
      />
      <Button
        text='Next'
        icon={arrowRight}
        iconPosition='right'
        theme='light'
        size='big'
        disabled={props.nextDisabled}
        onClick={() => props.onPageChange(INCREMENT)}
      />
    </>
  );
}
