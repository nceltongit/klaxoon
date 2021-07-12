import React from 'react';
import BookmarkRow from './BookmarkRow';
import BookmarkModifModal from '../bookmarkModifModal/BookmarkModifModal';
import { MAX_BOOKMARK_BY_PAGE } from '../../../utils/constants';
import Pagination from '../../pagination/Pagination';
import BookmarkDeleteModal from '../bookmarkDeleteModal/BookmarkDeleteModal';
import { useBookmarkTableManagement } from './useBookmarkTableManagement';

const bookmarkTableHeader = ['Url', 'Titre', 'Auteur', 'Date création', ''];

const BookmarkTable = () => {
  const {
    closeModifModal,
    openModifModal,
    bookmarkDataModal,
    isModalModifOpened,
    handleSubmitModif,
    closeDeleteModal,
    handleSubmitDelete,
    isModalDeleteOpened,
    handleOpenModalDeleteBookmark,
    bookmarks,
    bookmarksLength
  } = useBookmarkTableManagement();

  return (
    <>
      <BookmarkModifModal
        close={closeModifModal}
        bookmark={bookmarkDataModal}
        isOpened={isModalModifOpened}
        onSubmitParent={handleSubmitModif}
      />
      <BookmarkDeleteModal
        close={closeDeleteModal}
        isOpened={isModalDeleteOpened}
        onSubmitParent={handleSubmitDelete}
        bookmark={bookmarkDataModal}
      />
      <table className={'bookmark-table'}>
        <thead>
          <tr>
            {bookmarkTableHeader.map(bookmarkTitle => (
              <th key={bookmarkTitle} className={'bookmark-table__header'}>
                {bookmarkTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookmarks.map(bookmark => (
            <BookmarkRow
              key={bookmark.id}
              onEditBookmark={openModifModal(bookmark)}
              onDeleteBookmark={handleOpenModalDeleteBookmark(bookmark)}
              bookmark={bookmark}
            />
          ))}
        </tbody>
      </table>
      <Pagination dataLength={bookmarksLength} maxItemByPage={MAX_BOOKMARK_BY_PAGE} />
    </>
  );
};

BookmarkTable.displayName = 'BookmarkTable';
export default BookmarkTable;
