import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCategories } from "../../store/categories";

const Categories = () => {
  const dispatch = useDispatch()
  const categoryArr = useSelector((state) => state.categories?.categoryList);

  useEffect(() => {
    const getCategories = async () => {
      await dispatch(thunkGetCategories());
    }

    getCategories();
  }, [])

  if (!categoryArr || categoryArr.length === 0) return (<h2>Loading</h2>)


  return (
    <ul id="categoryListContainer">
      <button className="scrollButton left">arrow</button>
      {categoryArr.map(category => (
        <>
          <li
            key={`${category.id}${category.categoryName}`}
            className={`category ${category.id}`}
          >
            <img className="categoryImg" src={category.categoryPicture} />
            <div>{category.categoryName}</div>
          </li>
        </>
      ))}
      <button className="scrollButton right">arrow</button>
    </ul>
  );
};

export default Categories;
