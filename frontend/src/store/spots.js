import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = 'spots/getAllSpots';
const GET_SPOT = 'spots/getSpot'
const CREATE_SPOT = 'spots/createSpot';

const loadSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    spots: spots.Spots
  };
};

const getSpot = (spot) => {
  return {
    type: GET_SPOT,
    spot
  }
}

const createNewSpot = ({ spot, images }) => {
  return {
    type: CREATE_SPOT,
    spot,
    images
  }
}

export const getAllSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');

  if (res.ok) {
    const data = await res.json();
    dispatch(loadSpots(data))
    return data
  }

  console.log('GetAllSpots failed')
}

export const getSpotById = ({ spotId }) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}`);

  if (res.ok) {
    const data = await res.json()

    dispatch(getSpot(data));
    return data;
  }

  console.log('GetSpotById failed');
}

export const createSpot = (newSpot) => async (dispatch) => {
  const { spot, spotImages } = newSpot;

  const createdSpot = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  });

  const addImagesToSpot = await fetch(`/api/spots/${spot.id}/images`, {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spotImages)
  });

  if (createdSpot.ok && addImagesToSpot.ok) {
    dispatch(createNewSpot(createdSpot, addImagesToSpot));
  }
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SPOTS:
      newState = { allSpots: {} };
      action.spots.forEach((spot) => newState.allSpots[spot.id] = spot);
      return newState;
    case GET_SPOT:
      newState = { ...state };
      newState.singleSpot = action.spot;
      return newState;
    default:
      return state;
  };
};

export default spotsReducer;