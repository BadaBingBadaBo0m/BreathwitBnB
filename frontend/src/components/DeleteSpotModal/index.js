import React, { useEffect, useState } from 'react';
import { useModal } from "../../context/Modal";
import './DeleteSpotModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpotById } from '../../store/user';

const DeleteSpotModal = ({ spotId }) => {
  const { closeModal } = useModal();
  const spotObj = useSelector((state) => state.user.spots)
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const deleted = await dispatch(deleteSpotById(spotId)).then(closeModal)
  }

  return (
    <div id='confirmDeleteContainer'>
      <h2>Confirm Delete</h2>
      <p id='deleteModalText'>Are you sure you want to remove this spot from the listings?</p>
      <button className='deleteModalButtons yes' onClick={handleDelete}>Yes (Delete Spot)</button>
      <button className='deleteModalButtons no' onClick={closeModal}>No (Keep Spot)</button>
    </div>
  )
}

export default DeleteSpotModal;