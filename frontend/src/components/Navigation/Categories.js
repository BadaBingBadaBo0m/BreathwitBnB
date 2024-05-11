import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCategories } from "../../store/categories";

const Categories = () => {
  const dispatch = useDispatch()
  const categoryArr = useSelector((state) => state.categories?.categoryList);
  const categoryScrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      await dispatch(thunkGetCategories());
    }

    getCategories();
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (categoryScrollRef.current) {
        setShowLeftButton(categoryScrollRef.current.scrollLeft > 0);
        setShowRightButton(categoryScrollRef.current.scrollLeft < categoryScrollRef.current.scrollWidth - window.innerWidth);
      }
    };

    const updateScrollButtons = () => {
      handleScroll();
    };

    if (categoryScrollRef.current) {
      categoryScrollRef.current.addEventListener('scroll', handleScroll);
    }

    updateScrollButtons();

    return () => {
      if (categoryScrollRef.current) {
        categoryScrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [categoryArr]);

  if (!categoryArr || categoryArr.length === 0) return (<h2>Loading</h2>);

  const scrollRight = () => {
    categoryScrollRef.current.scrollLeft += 200;
  }

  const scrollLeft = () => {
    categoryScrollRef.current.scrollLeft -= 200;
  }

  return (
    <ul id="categoryListContainer" ref={categoryScrollRef}>
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
      {showRightButton && <button className="scrollButton right" onClick={scrollRight}>arrow</button>}
      {showLeftButton && <button className="scrollButton left" onClick={scrollLeft}>arrow</button>}
    </ul>
  );
};

export default Categories;
