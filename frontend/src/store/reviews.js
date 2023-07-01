const GET_REVIEWS = '/spots/getReviews'

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  }
}

export const getReviewById = ({ spotId }) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}/reviews`);

  if (res.ok) {
    const data = await res.json();

    dispatch(getReviews(data));
    return data;
  }

  console.log('GetReviewById failed')
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = { ...state };
      newState = action.reviews;
      return newState;
    default:
      return state;
  };
};

export default reviewsReducer