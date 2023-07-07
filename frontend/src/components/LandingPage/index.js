import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";
import { useHistory } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import './LandingPage.css'


const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const spotObj = useSelector((state) => state.spots.allSpots);


  useEffect(() => {
    const getSpots = async () => {
      await dispatch(getAllSpots());
    }

    getSpots();
  }, [dispatch]);

  const handleClick = (spotId) => {
    history.push(`/spots/${spotId}`);
  }

  if (!spotObj) return null;

  const spotList = Object.values(spotObj);

  return (
    <div id='spotsContainer'>
      <ul id='spotList'>
        {spotList.map(spot => (
          <>
            <li
              key={spot.id}
              className='spot'
              data-tooltip-id={spot.id}
              data-tip="Tooltip"
              data-tooltip-delay-show={300}
              data-tooltip-float={true}
              onClick={() => handleClick(spot.id)}
            >
              <img
                className='spotImage'
                src={spot.previewImage}
                alt={spot.name}
              >
              </img>
              <div id='spotInfoContainer'>
                <div id='locationRatingContainer'>
                  <h2 id="spotHeader">{spot.city}, {spot.state}</h2>
                  <p id="ratingContainer"><i className="fa-solid fa-star"></i> <span id="ratingNum">{spot.avgRating === '0.0' ? "New" : spot.avgRating}</span> </p>
                </div>
                <p id='spotPrice'>${spot.price} night</p>
              </div>
            </li>
            <Tooltip id={spot.id}>
              <span>{spot.name}</span>
            </Tooltip>
          </>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;