import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PriceReserveReviews.css'

const PriceReserveReviews = ({ spot }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const ReserveButton = forwardRef(({ value, onClick }, ref) => (
    <button id="reserveButton" className="example-custom-input" onClick={onClick} ref={ref}>
      {startDate && endDate ? value : "Reserve"}
    </button>
  ));

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
          <p><i className="fa-solid fa-star"></i> {spot.avgRating === '0.0' ? "New" : spot.avgRating}</p>
          {spot.numReviews > 0 && <p>&#x2022;</p>}
          {spot.numReviews > 0 && <p>{spot.numReviews} {spot.numReviews === 1 ? "review" : "reviews"}</p>}
        </div>
      </div>
      <button onClick={handleClick} id="reserveButton">Reserve</button>
      {/* <DatePicker
        // customInput={<ReserveButton />}
        customInput={<ReserveButton />}

        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        isClearable={true}
        shouldCloseOnSelect={false}

      // excludeDateIntervals={[
      //   // { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
      // ]}
      /> */}
    </div>
  );
};

export default PriceReserveReviews;