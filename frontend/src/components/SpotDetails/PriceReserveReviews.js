import './PriceReserveReviews.css'

const PriceReserveReviews = ({ spot }) => {

  const handleClick = () => {
    alert('Feature Coming Soon...')
  }

  return (
    <div id="reserveContainer">
      <div id="priceAndReviewContainer">
        <div id='priceContainer'>
          <p id="price">${spot.price}</p>
          <p>night</p>
        </div>
        <div id="ratingReviews">
          <p><i className="fa-solid fa-star"></i> {spot.avgRating || "New"}</p>
          {spot.numReviews > 0 && <p>&#x2022;</p>}
          {spot.numReviews > 0 && <p>{spot.numReviews} {spot.numReviews === 1 ? "review" : "reviews"}</p>}
        </div>
      </div>
      <button onClick={handleClick} id="reserveButton">Reserve</button>
    </div>
  );
};

export default PriceReserveReviews;