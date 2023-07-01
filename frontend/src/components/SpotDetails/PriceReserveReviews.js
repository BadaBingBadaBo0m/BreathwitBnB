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
          <p><i className="fa-solid fa-star"></i> {spot.avgRating}</p>
          <p>&#x2022;</p>
          <p>{spot.numReviews} reviews</p>
        </div>
      </div>
      <button onClick={handleClick} id="reserveButton">Reserve</button>
    </div>
  );
};

export default PriceReserveReviews;