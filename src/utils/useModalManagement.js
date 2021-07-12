import { useState } from 'react';

export const useModalManagement = () => {
  const [isModalOpened, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return {
    isModalOpened,
    openModal,
    closeModal
  };
};
