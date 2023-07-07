import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewBySpotId } from "../../store/reviews";
import validMonths from '../../data/validMonths.json';
import OpenModalButton from "../OpenModalButton";
import CreateReviewForm from "../CreateReviewForm";
import './Reviews.css';
import DeleteReviewModal from "../DeleteReviewModal";

const Reviews = ({ spot, spotId }) => {
  const dispatch = useDispatch();
  const reviewObj = useSelector((state) => state.reviews.spot)
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    const getReviewList = async () => {
      await dispatch(getReviewBySpotId(spotId))
    }

    getReviewList();
  }, [dispatch, spotId])

  if (!reviewObj) return null;

  const reviewList = Object.values(reviewObj)

  reviewList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const getDate = (reviewId) => {
    const monthList = validMonths.months;
    const reviewDate = reviewObj[reviewId].createdAt
    const splitDate = reviewDate.split('-')
    const month = splitDate[1]
    const year = splitDate[0]

    return (
      <h4 id="reviewDate">{monthList[Number(month) - 1]} {year}</h4>
    )
  }

  return (
    <div id="reviewsContainer">
      <div id="reviewsHeaderContainer">
        <p><i className="fa-solid fa-star"></i> {spot.avgRating === '0.0' ? "New" : spot.avgRating}</p>
        {spot.numReviews > 0 && <p>&#x2022;</p>}
        {spot.numReviews > 0 && <p>{spot.numReviews} {spot.numReviews === 1 ? "review" : "reviews"}</p>}
      </div>
      <div id="createReviewButtonContainer">
        {user !== null &&
          user.id !== spot.ownerId &&
          !reviewList.find(review => review.userId === user.id) &&
          <OpenModalButton buttonText={'Post your review'} modalComponent={<CreateReviewForm spotId={spotId} />} />}
      </div>
      <ul id="reviewListContainer">
        {reviewList.map(review => (
          <li key={review.id} id="review">
            <h2 id="reviewOwner">{review.User.firstName}</h2>
            <>{getDate(review.id)}</>
            <p>{review.review}</p>
            {user !== null && review.userId === user.id ?
              <OpenModalButton buttonText={'Delete'} modalComponent={<DeleteReviewModal reviewId={review.id} spotId={spotId} />} />
              : <></>}
          </li>
        ))}
        {!reviewList.length && <h3>Be the first to post a review!</h3>}
      </ul>
    </div>
  );
};

export default Reviews;