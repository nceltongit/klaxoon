import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '../../../app/button/Button';

const BookmarkDeleteModal = ({ isOpened, close, onSubmitParent, bookmark }) => {
  const { title, id } = bookmark;

  const onSubmit = isDelete => {
    onSubmitParent(isDelete, id);
  };

  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={close}
      className="bookmark-modal"
      overlayClassName="bookmark-modal__overlay"
    >
      <div className={'bookmark-modal__body'}>
        <p>Etes-vous sûr de vouloir supprimer le bookmark :</p>
        <span className={'bookmark-modal__title-name'}>{title}</span>
      </div>
      <div className={'bookmark-modal__footer'}>
        <Button type={'button'} onClick={() => onSubmit(false)}>
          Non
        </Button>
        <Button type={'button'} onClick={() => onSubmit(true)}>
          Oui
        </Button>
      </div>
    </Modal>
  );
};

BookmarkDeleteModal.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  onSubmitParent: PropTypes.func,
  bookmark: PropTypes.object
};

BookmarkDeleteModal.defaultProps = {
  close: () => {},
  onSubmitParent: () => {},
  bookmark: {}
};

export default BookmarkDeleteModal;
