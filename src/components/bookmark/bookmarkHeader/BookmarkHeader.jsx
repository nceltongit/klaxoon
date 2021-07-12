import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { saveBookmark } from '../bookmarkActionCreators';
import BookmarkAddModal from '../bookmarkAddModal/BookmarkAddModal';
import { Button } from '../../../app/button/Button';
import { useModalManagement } from '../../../utils/useModalManagement';

const BookmarkHeader = () => {
  const { isModalOpened, openModal, closeModal } = useModalManagement();

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    url => {
      closeModal();
      dispatch(saveBookmark(url));
    },
    [dispatch]
  );

  return (
    <>
      <BookmarkAddModal
        close={closeModal}
        isOpened={isModalOpened}
        onSubmitParent={handleSubmit}
      />
      <div className={'bookmark-header'}>
        <span className={'bookmark-header__title'}>Liste Bookmarks : </span>
        <div className={'bookmark-header__add-button'}>
          <Button type={'button'} onClick={openModal}>
            Ajouter
          </Button>
        </div>
      </div>
    </>
  );
};

BookmarkHeader.displayName = 'BookmarkHeader';
export default BookmarkHeader;
