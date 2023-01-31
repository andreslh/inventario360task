import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
  test('has a click event', async () => {
    const onClick = jest.fn(() => {});
    render(<Button text='Button' onClick={onClick} />);

    await userEvent.click(screen.getByText('Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
