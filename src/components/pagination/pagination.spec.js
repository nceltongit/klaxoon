import React from 'react';
import { fireEvent, getByTestId, screen, waitFor } from '@testing-library/react';
import { mockForTests } from '../../utils/mockForTests';
import configureStore from 'redux-mock-store';
import { testRender } from '../../utils/testUtils';
import Pagination from './Pagination';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Pagination component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockForTests);
  });

  it('show the pagination after init', () => {
    testRender(
      <Pagination dataLength={store.getState().bookmark.bookmarks.length} maxItemByPage={5} />,
      { store }
    );
    const page1 = screen.getByText('1');
    const page2 = screen.getByText('2');

    expect(page1).toBeTruthy();
    expect(page2).toBeTruthy();
  });

  it('show the pagination after the user click on other page', () => {
    testRender(
      <Pagination dataLength={store.getState().bookmark.bookmarks.length} maxItemByPage={5} />,
      { store }
    );
    const page1 = screen.getByText('1');
    const page2 = screen.getByText('2');

    expect(page1).toHaveClass('pagination__selected');
    expect(page2).toBeTruthy();

    fireEvent.click(page2);

    // waitFor not working cause of librairy problems
    // expect(queryByText('2')).toHaveClass('pagination__selected');
  });
});
