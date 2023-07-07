import { csrfFetch } from "./csrf";

const GET_REVIEWS = '/reviews/getReviews';
const CREATE_REVIEW = '/reviews/newReviews';
const DELETE_REVIEW = '/reviews/deleteReview';

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  };
};

const createNewReview = (review, spotId, User) => {
  return {
    type: CREATE_REVIEW,
    review,
    User
  };
};

const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const getReviewBySpotId = ({ spotId }) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (res.ok) {
    const data = await res.json();
    console.log(data)

    dispatch(getReviews(data));
    return data;
  }

  console.log('GetReviewById failed')
}

export const createReview = ({ review, spotId, User }) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  const data = await res.json();

  if (res.ok) {
    dispatch(createNewReview(data, spotId, User));
    return data
  } else {
    return res
  }
}

export const deleteReviewById = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await res.json();

  if (res.ok) {
    dispatch(deleteReview(reviewId))
    return data;
  }

  return res
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = { ...state, spot: {} };
      action.reviews.Reviews.forEach((review) => newState.spot[review.id] = review)
      return newState;
    case CREATE_REVIEW:
      newState = { ...state, spot: { ...state.spot } };
      newState.spot[action.review.id] = action.review;
      newState.spot[action.review.id].User = action.User;
      return newState;
    case DELETE_REVIEW:
      newState = { ...state }
      delete newState.spot[action.reviewId];
      return newState;
    default:
      return state;
  };
};

export default reviewsReducer