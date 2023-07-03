import { csrfFetch } from "./csrf";

const GET_REVIEWS = '/reviews/getReviews';
const CREATE_REVIEW = '/reviews/newReviews';

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  };
};

const createNewReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  };
};

export const getReviewBySpotId = ({ spotId }) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (res.ok) {
    const data = await res.json();

    dispatch(getReviews(data));
    return data;
  }

  console.log('GetReviewById failed')
}

export const createReview = ({ review, spotId }) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(createNewReview(data));
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
      newState = { ...state, };
      newState.spot[action.spotId] = action;
      return newState;
    default:
      return state;
  };
};

export default reviewsReducer