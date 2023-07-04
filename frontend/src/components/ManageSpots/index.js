import { useEffect } from "react";
import { getUserSpots } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './manageSpots.css';

const ManageSpots = () => {
  const dispatch = useDispatch();
  const spotObj = useSelector((state) => state.user.spots)
  const spotList = Object.values(spotObj);

  useEffect(() => {
    const getSpots = () => {
      dispatch(getUserSpots());
    }

    getSpots();
  }, [dispatch]);

  if (Object.keys(spotObj).length <= 0) return null;

  const handleClick = () => {

  }

  return (
    <div id="manageSpotsContainer">
      <h2>Manage spots</h2>
      <NavLink to='/spots/new'> <button id="createNewSpotButton">Create a New Spot</button> </NavLink>

      <div id="userSpotListContainer">
        <ul id="manageSpotList">
          {spotList.map(spot => (
            <li key={spot.id} className='manageSpotsSpot'>
              <img
                className='spotImage'
                src={spot.previewImage}
                onClick={() => handleClick(spot.id)}>
              </img>
              <div id='spotInfoContainer'>
                <div id='locationRatingContainer'>
                  <h2 onClick={() => handleClick(spot.id)}>{spot.city}, {spot.state}</h2>
                  <p><i className="fa-solid fa-star"></i>{spot.avgRating || "New"}</p>
                </div>
                <p id='spotPrice'>${spot.price} night</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ManageSpots;