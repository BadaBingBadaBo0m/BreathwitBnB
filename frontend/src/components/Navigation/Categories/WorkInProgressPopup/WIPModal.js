import React, { useEffect } from 'react';
import { useModal } from '../../../../context/Modal';

const WIPModal = ({ modalComponent }) => {
  const { setModalContent, setOnModalClose } = useModal();

  useEffect(() => {
    setModalContent(modalComponent);
  }, [modalComponent, setModalContent]);

  return null; // This component doesn't render anything itself
};

export default WIPModal;
