

const PriceReserveReviews = ({ spot }) => {

  return (
    <div id="reserveContainer">
      <div id="priceAndReviewContainer">
        <p id="price">{spot.price} night</p>
        <div id="ratingReviews">
          <p><i className="fa-solid fa-star"></i> {spot.avgRating}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceReserveReviews;