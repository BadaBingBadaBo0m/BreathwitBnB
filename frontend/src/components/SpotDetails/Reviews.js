import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewBySpotId } from "../../store/reviews";
import './Reviews.css';

const Reviews = ({ spot, spotId }) => {
  const dispatch = useDispatch();
  const reviewObj = useSelector((state) => state.reviews.spot)

  useEffect(() => {
    const getReviewList = async () => {
      dispatch(getReviewBySpotId(spotId))
    }

    getReviewList();
  }, [])

  if (!reviewObj) return null;

  const reviewList = Object.values(reviewObj)

  return (
    <div id="reviewsContainer">
      <div id="reviewsHeaderContainer">
        <p><i className="fa-solid fa-star"></i> {spot.avgRating}</p>
        <p>&#x2022;</p>
        <p>{spot.numReviews} reviews</p>
      </div>


    </div>
  );
};

export default Reviews;