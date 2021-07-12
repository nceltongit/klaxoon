import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Bookmark from './Bookmark';
import { mockForTests } from '../../utils/mockForTests';
import configureStore from 'redux-mock-store';
import { testRender } from '../../utils/testUtils';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Bookmark component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockForTests);
  });

  it('show the 5 bookmarks', () => {
    testRender(<Bookmark />, { store });
    const title1 = screen.getByText('Pintail - Anas acuta');
    const title2 = screen.getByText('West Pentire poppy panorama');
    const title3 = screen.getByText('M83 | Fleur & Manu | DIVISION');
    const title4 = screen.getByText('toto');
    const title5 = screen.getByText('tata');

    expect(title1).toBeTruthy();
    expect(title2).toBeTruthy();
    expect(title3).toBeTruthy();
    expect(title4).toBeTruthy();
    expect(title5).toBeTruthy();
  });
  it('show the two page from pagination', () => {
    testRender(<Bookmark />, { store });
    const page1 = screen.getByText('1');
    const page2 = screen.getByText('2');

    expect(page1).toBeTruthy();
    expect(page2).toBeTruthy();
  });
  it('should open add modal', () => {
    testRender(<Bookmark />, { store });
    const buttonModalAdd = screen.getByRole('button', { name: /Ajouter/i });
    fireEvent.click(buttonModalAdd);

    const bookMarkModal = screen.getByText('Bookmark :');

    expect(bookMarkModal).toBeTruthy();
  });
});
