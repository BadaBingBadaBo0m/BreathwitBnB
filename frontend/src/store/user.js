import { csrfFetch } from "./csrf";

const GET_USERS_SPOTS = "user/getUsersSpots"

const loadUserSpots = (spots) => {
  return {
    type: GET_USERS_SPOTS,
    spots
  }
}

export const getUserSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots/current');

  if (res.ok) {
    const data = await res.json();
    dispatch(loadUserSpots(data.Spots))
    return res;
  }
}

const initialState = { spots: {} };

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_USERS_SPOTS:
      newState = { ...state, spots: { ...state.spots } };
      action.spots.forEach((spot) => newState.spots[spot.id] = spot);
      return newState;
    default:
      return state;
  }
}

export default userReducer;