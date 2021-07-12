import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { Button } from '../../../app/button/Button';

const BookmarkAddModal = ({ isOpened, close, onSubmitParent }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({
      url: ''
    });
  }, [isOpened]);

  const onSubmit = data => {
    onSubmitParent(data.url);
  };

  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={close}
      className="bookmark-modal"
      overlayClassName="bookmark-modal__overlay"
    >
      <h3>Bookmark :</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'bookmark-modal__form-row'}>
          <input placeholder={'Lien Vimeo ou Flickr'} {...register('url')} required />
          <Button type={'submit'}>Importer</Button>
        </div>
      </form>
    </Modal>
  );
};

BookmarkAddModal.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  onSubmitParent: PropTypes.func
};

BookmarkAddModal.defaultProps = {
  close: () => {},
  onSubmitParent: () => {}
};

export default BookmarkAddModal;
