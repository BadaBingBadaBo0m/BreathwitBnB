import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewBySpotId } from "../../store/reviews";


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
  console.log(reviewList)

  return (
    <>
      <h2>working</h2>
    </>
  );
};

export default Reviews;