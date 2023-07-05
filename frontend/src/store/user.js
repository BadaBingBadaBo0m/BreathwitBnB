import { csrfFetch } from "./csrf";

const GET_USERS_SPOTS = "user/getUsersSpots";
const DELETE_SPOT = 'user/deleteSpot';

const loadUserSpots = (spots) => {
  return {
    type: GET_USERS_SPOTS,
    spots
  }
}

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    spotId
  }
}

export const getUserSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots/current');

  if (res.ok) {
    const data = await res.json();
    dispatch(loadUserSpots(data.Spots))
    return res;
  }

  return res;
}

export const deleteSpotById = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(deleteSpot(spotId));
    return data;
  }

  return res;
}

const initialState = { spots: {} };

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_USERS_SPOTS:
      newState = { ...state, spots: { ...state.spots } };
      action.spots.forEach((spot) => newState.spots[spot.id] = spot);
      return newState;
    case DELETE_SPOT:
      newState = { ...state, spots: { ...state.spots } };
      delete newState.spots[action.spotId];
      console.log(newState)
      return newState;
    default:
      return state;
  }
}

export default userReducer;