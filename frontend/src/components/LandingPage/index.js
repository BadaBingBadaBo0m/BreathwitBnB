import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";
import { useHistory } from 'react-router-dom';
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
  }, [dispatch])

  const handleClick = (spotId) => {
    history.push(`/spots/${spotId}`)
  }

  if (!spotObj) return null;

  const spotList = Object.values(spotObj)

  return (
    <div id='spotsContainer'>
      <ul id='spotList'>
        {spotList.map(spot => (
          <li key={spot.id} className='spot'>
            <img
              className='spotImage'
              src={spot.previewImage}
              onClick={() => handleClick(spot.id)}>
            </img>
            <div id='spotInfoContainer'>
              <div id='locationRatingContainer'>
                <h2 onClick={() => handleClick(spot.id)}>{spot.city}, {spot.state}</h2>
                <p><i className="fa-solid fa-star"></i>{spot.avgRating}</p>
              </div>
              <p id='spotPrice'>${spot.price} night</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LandingPage;