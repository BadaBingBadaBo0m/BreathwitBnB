import React, { useEffect, useState } from 'react';
import { useModal } from "../../context/Modal";
import './DeleteReviewModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviewById } from '../../store/reviews';
import { getReviewBySpotId } from "../../store/reviews";
import { getSpotById } from "../../store/spots";

const DeleteReviewModal = ({ reviewId, spotId }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const deleted = await dispatch(deleteReviewById(reviewId)).then(closeModal)
    await dispatch(getSpotById(spotId));
    await dispatch(getReviewBySpotId(spotId));
  }

  return (
    <div id='confirmDeleteRevContainer'>
      <h2>Confirm Delete</h2>
      <p id='deleteModalText'>Are you sure you want to delete this review?</p>
      <button className='deleteModalButtons yes' onClick={handleDelete}>Yes (Delete Spot)</button>
      <button className='deleteModalButtons no' onClick={closeModal}>No (Keep Spot)</button>
    </div>
  )
}

export default DeleteReviewModal;