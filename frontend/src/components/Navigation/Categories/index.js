import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCategories } from "../../../store/categories";
import './categories.css'

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
        if (window.innerWidth > categoryScrollRef.current.offsetWidth) {
          setShowRightButton(true);
        }

        if (window.innerWidth < categoryScrollRef.current.offsetWidth) {
          setShowRightButton(false);
        }

        console.log(categoryScrollRef.current.offsetWidth, "bruh")
        setShowLeftButton(categoryScrollRef.current.scrollLeft > 0);
        setShowRightButton(categoryScrollRef.current.scrollLeft < categoryScrollRef.current.scrollWidth - (window.innerWidth * .94));
        console.log(categoryScrollRef.current.offsetWidth, window.innerWidth)
      }
    };

    // const updateScrollButtons = () => {
    //   handleScroll();
    // };

    if (categoryScrollRef.current) {
      categoryScrollRef.current.addEventListener('scroll', handleScroll);
    }

    // updateScrollButtons();
    handleScroll();

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
    <div id="filtersContainer">
      <ul id="categoryListContainer" ref={categoryScrollRef}>
        {showRightButton && <button className="scrollButton right" onClick={scrollRight}>arrow</button>}
        {categoryArr.map(category => (
          <>
            <li
              key={`${category.id}${category.categoryName}`}
              className={`category ${category.id}`}
            >
              <img className="categoryImg" src={category.categoryPicture} />
              <div className="categoryName">{category.categoryName}</div>
            </li>
          </>
        ))}
        {showLeftButton && <button className="scrollButton left" onClick={scrollLeft}>arrow</button>}
        {/* <li>
          bruh
        </li> */}
      </ul>
    </div>
  );
};

export default Categories;