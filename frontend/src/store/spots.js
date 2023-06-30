const GET_ALL_SPOTS = 'spots/getAllSpots';

const loadSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    spots: spots.Spots
  };
};

export const getAllSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');

  if (res.ok) {
    const data = await res.json();
    dispatch(loadSpots(data))
    return data
  }

  console.log('GetAllSpots failed')
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SPOTS:
      newState = { allSpots: {} };
      action.spots.forEach((spot) => newState.allSpots[spot.id] = spot)
      return newState;
    default:
      return state;
  }
}

export default spotsReducer;