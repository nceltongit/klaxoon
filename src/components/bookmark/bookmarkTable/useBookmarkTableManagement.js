import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { geBookmarkByPage, getAllBookmarksLength } from '../bookmarkSelectors';
import { useModalManagement } from '../../../utils/useModalManagement';
import { deleteBookmark, saveKeyWords } from '../bookmarkActionCreators';

export const useBookmarkTableManagement = () => {
  const bookmarks = useSelector(geBookmarkByPage);
  const bookmarksLength = useSelector(getAllBookmarksLength);
  const [isModalModifOpened, setIsModalModifOpened] = useState(false);
  const [bookmarkDataModal, setBookmarkDataModal] = useState({});
  const {
    isModalOpened: isModalDeleteOpened,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal
  } = useModalManagement();

  const dispatch = useDispatch();

  const openModifModal = bookmark => () => {
    setBookmarkDataModal(bookmark);
    setIsModalModifOpened(true);
  };

  const handleOpenModalDeleteBookmark = bookmark => () => {
    setBookmarkDataModal(bookmark);
    openDeleteModal();
  };

  const handleSubmitModif = useCallback(
    (keyWords, bookmarkId) => {
      setIsModalModifOpened(false);
      dispatch(saveKeyWords(keyWords, bookmarkId));
    },
    [dispatch]
  );

  const handleSubmitDelete = useCallback(
    (isDelete, bookmarkId) => {
      if (isDelete) {
        dispatch(deleteBookmark(bookmarkId));
      }
      closeDeleteModal();
    },
    [dispatch]
  );

  const closeModifModal = useCallback(() => {
    setIsModalModifOpened(false);
  }, []);

  return {
    bookmarks,
    bookmarksLength,
    isModalDeleteOpened,
    closeDeleteModal,
    openModifModal,
    closeModifModal,
    isModalModifOpened,
    handleOpenModalDeleteBookmark,
    handleSubmitDelete,
    handleSubmitModif,
    bookmarkDataModal
  };
};
