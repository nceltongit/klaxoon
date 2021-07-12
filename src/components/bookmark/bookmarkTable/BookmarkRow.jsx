import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../app/button/Button';
import { format } from 'date-fns';

const BookmarkRow = ({ bookmark, onEditBookmark, onDeleteBookmark }) => {
  return (
    <tr className={'bookmark-table__row'}>
      <td className="bookmark-table__cell">{bookmark.url}</td>
      <td className="bookmark-table__cell">{bookmark.title}</td>
      <td className="bookmark-table__cell">{bookmark.author}</td>
      <td className="bookmark-table__cell">{format(new Date(bookmark.date), 'dd/MM/yyyy')}</td>
      <td className="bookmark-table__cell">
        <Button type={'button'} onClick={onEditBookmark}>
          Modifier
        </Button>
        <Button type={'button'} className={'button--secondary'} onClick={onDeleteBookmark}>
          Supprimer
        </Button>
      </td>
    </tr>
  );
};

BookmarkRow.propTypes = {
  bookmark: PropTypes.object,
  onEditBookmark: PropTypes.func,
  onDeleteBookmark: PropTypes.func
};

BookmarkRow.defaultProps = {
  bookmark: {},
  onEditBookmark: () => {},
  onDeleteBookmark: () => {}
};

BookmarkRow.displayName = 'BookmarkRow';
export default BookmarkRow;
