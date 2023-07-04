import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewBySpotId } from "../../store/reviews";
import OpenModalButton from "../OpenModalButton";
import CreateReviewForm from "../CreateReviewForm";
import './Reviews.css';

const Reviews = ({ spot, spotId }) => {
  const dispatch = useDispatch();
  const reviewObj = useSelector((state) => state.reviews.spot)
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    const getReviewList = async () => {
      dispatch(getReviewBySpotId(spotId))
    }

    getReviewList();
  }, [])

  if (!reviewObj) return null;

  const reviewList = Object.values(reviewObj)

  const getDate = (reviewId) => {
    const reviewDate = reviewObj[reviewId].createdAt
    const splitDate = reviewDate.split('-')
    const month = splitDate[1]
    const year = splitDate[0]

    return (
      <h4 id="reviewDate">{month} {year}</h4>
    )
  }

  return (
    <div id="reviewsContainer">
      <div id="reviewsHeaderContainer">
        <p><i className="fa-solid fa-star"></i> {spot.avgRating || "New"}</p>
        {spot.numReviews > 0 && <p>&#x2022;</p>}
        {spot.numReviews > 0 && <p>{spot.numReviews} {spot.numReviews === 1 ? "review" : "reviews"}</p>}
      </div>
      <div id="createReviewButtonContainer">
        {user !== null && user.id !== spot.ownerId && <OpenModalButton buttonText={'Post your review'} modalComponent={<CreateReviewForm />} />}
      </div>
      <ul id="reviewListContainer">
        {reviewList.map(review => (
          <li key={review.id} id="review">
            <h2 id="reviewOwner">{review.User.firstName}</h2>
            <>{getDate(review.id)}</>
            <p>{review.review}</p>
            {review.ownerId == user.id ? <button>Delete</button> : <>Not the owner</>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;