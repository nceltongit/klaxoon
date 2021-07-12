import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '../../../app/button/Button';

const BookmarkModifModal = ({ isOpened, close, bookmark, onSubmitParent }) => {
  const { control, register, handleSubmit, trigger, reset } = useForm({
    mode: 'onSubmit'
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'keyWords'
  });

  useEffect(() => {
    if (bookmark.keyWords) {
      reset({
        keyWords: bookmark.keyWords.map(keyWord => ({
          value: keyWord
        }))
      });
    }
  }, [bookmark, isOpened]);

  const appendKeyWord = () => {
    append({ value: '' });
  };

  const onSubmit = data => {
    if (data) {
      onSubmitParent(data.keyWords.map(keyWord => keyWord.value), bookmark.id);
    }
  };

  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={close}
      className="bookmark-modal"
      overlayClassName="bookmark-modal__overlay"
    >
      <h3>Mots-clé :</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((keyWord, keyWordIndex) => (
          <div key={keyWord.id} className={'bookmark-modal__form-row'}>
            <input
              {...register(`keyWords[${keyWordIndex}].value`)}
              control={control}
              required
            />

            <Button
              type={'button'}
              className={'button--secondary'}
              onClick={() => {
                remove(keyWordIndex);
                trigger();
              }}
            >
              Supprimer
            </Button>
          </div>
        ))}
        <div className={'bookmark-modal__footer'}>
          <Button type={'button'} onClick={appendKeyWord}>
            Ajouter mot-clé
          </Button>
          <Button type={'submit'}>Sauvegarder</Button>
        </div>
      </form>
    </Modal>
  );
};

BookmarkModifModal.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  onSubmitParent: PropTypes.func,
  bookmark: PropTypes.object
};

BookmarkModifModal.defaultProps = {
  close: () => {},
  onSubmitParent: () => {},
  bookmark: {}
};

export default BookmarkModifModal;
