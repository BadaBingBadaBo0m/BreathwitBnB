import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";
import { NavLink } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = () => {
  const dispatch = useDispatch();
  const spotObj = useSelector((state) => state.spots.allSpots);


  useEffect(() => {
    const getSpots = async () => {
      await dispatch(getAllSpots());
    }

    getSpots();
  }, [dispatch])

  if (!spotObj) return null;

  const spotList = Object.values(spotObj)

  return (
    <div id='spotsContainer'>
      <ul id='spotList'>
        {spotList.map(spot => (
          <li key={spot.id} className='spot'>
            <img className='spotImage' src={spot.previewImage}></img>
            <div>
              <h2>{spot.name}</h2>
              <p><i className="fa-solid fa-star"></i> {spot.avgRating}</p>
              <p>${spot.price} night</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LandingPage;