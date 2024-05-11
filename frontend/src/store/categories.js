import { csrfFetch } from "./csrf";

const GET_ALL_CATEGORIES = 'categories/getAllCategories';

const getCategories = (categoryList) => {
  return {
    type: GET_ALL_CATEGORIES,
    categoryList
  };
};

export const thunkGetCategories = () => async (dispatch) => {
  const res = await fetch('/api/categories');

  if (res.ok) {
    const data = await res.json();
    dispatch(getCategories(data));
    return data;
  }

  return res;
}

const initialState = { categories: {} };

const categoriesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      newState = { ...state }
      newState.categories = action.categoryList.categoryList
      return newState;
    default:
      return state;
  }
}

export default categoriesReducer;
