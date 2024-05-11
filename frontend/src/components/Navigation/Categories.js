import React from "react";
import { useDispatch } from "react-redux";
import { thunkGetCategories } from "../../store/categories";

const Categories = () => {
  const dispatch = useDispatch()

  const test = () => {
    dispatch(thunkGetCategories())
  }

  return (
    <div>
      <button onClick={test}>Send for categories</button>
    </div>
  );
};

export default Categories;
