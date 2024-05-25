import React, { useEffect, useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCategories } from "../../../store/categories";
import { SpotFilterContext } from "../../../context/SpotFilter";
import { getSpotByCategory, getAllSpots } from '../../../store/spots';
import WIPModal from './WorkInProgressPopup/WIPModal';
import WIPWarning from './WorkInProgressPopup/WIPWarning';
import './categories.css'

const Categories = () => {
  const dispatch = useDispatch()
  const categoryArr = useSelector((state) => state.categories?.categoryList);
  const categoryScrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [params, setParams, ClearAllFilters] = useContext(SpotFilterContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

        setShowLeftButton(categoryScrollRef.current.scrollLeft > 0);
        setShowRightButton(categoryScrollRef.current.scrollLeft < categoryScrollRef.current.scrollWidth - (window.innerWidth * .94));
      }
    };

    if (categoryScrollRef.current) {
      categoryScrollRef.current.addEventListener('scroll', handleScroll);
    }

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

  const setCategory = async (category) => {
    setIsModalVisible(false);
    if (params == category.categoryName) {
      ClearAllFilters();
      await dispatch(getAllSpots());
    } else {
      setParams(category.categoryName);
      const data = await dispatch(getSpotByCategory(category.categoryName))
      if (data.length == 0) {
        setIsModalVisible(true);
        ClearAllFilters();
      }
    }
  }

  return (
    <div id="filtersContainer">
      <ul id="categoryListContainer" ref={categoryScrollRef}>
        {showLeftButton && <button className="scrollButton left" onClick={scrollLeft}><i class="fa-solid fa-arrow-left"></i></button>}
        {categoryArr.map(category => (
          <>
            <li
              style={params === category.categoryName ? { borderBottom: '4px solid black' } : null}
              key={`${category.id}${category.categoryName}`}
              className={`category ${category.id}`}
              onClick={() => setCategory(category)}
            >
              <img className="categoryImg" onClick={() => console.log(category.categoryPicture, "bruh")} src={category.categoryPicture} />
              <div className="categoryName">{category.categoryName}</div>
            </li>
          </>
        ))}
        {showRightButton && <button className="scrollButton right" onClick={scrollRight}><i class="fa-solid fa-arrow-right"></i></button>}
      </ul>
      {isModalVisible && <WIPModal modalComponent={<WIPWarning />} />}
    </div>
  );
};

export default Categories;
