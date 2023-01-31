import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Posts } from './Posts';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import setupServer from '../../setupServer';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Posts', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      </Provider>
    );
  });

  test('Loads posts', async () => {
    let items = [];
    await waitFor(() => {
      items = screen.getAllByText('Leanne Graham');
    });

    expect(items.length).toBe(10);
  });

  test('Loads next page posts', async () => {
    await waitFor(() => screen.getAllByText('Leanne Graham'));
    await waitFor(() => userEvent.click(screen.getAllByText('Next')[0]));
    expect(screen.getAllByText('Ervin Howell').length).toBe(10);
  });

  test('Loads prev page posts', async () => {
    await waitFor(() => screen.getAllByText('Leanne Graham'));
    await waitFor(() => userEvent.click(screen.getAllByText('Next')[0]));
    await waitFor(() => userEvent.click(screen.getAllByText('Prev')[0]));
    expect(screen.getAllByText('Leanne Graham').length).toBe(10);
  });
});
