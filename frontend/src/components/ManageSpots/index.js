import { useEffect } from "react";
import { getUserSpots } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import OpenModalButton from '../OpenModalButton';
import DeleteSpotModal from "../DeleteSpotModal/index";
import './manageSpots.css';

const ManageSpots = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const spotObj = useSelector((state) => state.user.spots)
  const spotList = Object.values(spotObj);

  useEffect(() => {
    const getSpots = () => {
      dispatch(getUserSpots());
    }

    getSpots();
  }, [dispatch]);

  if (Object.keys(spotObj).length <= 0) return null;

  const handleClick = (spotId) => {
    history.push(`/spots/${spotId}`);
  }

  return (
    <div id="manageSpotsContainer">
      <h2>Manage spots</h2>
      <NavLink to='/spots/new'> <button id="createNewSpotButton">Create a New Spot</button> </NavLink>

      <div id="userSpotListContainer">
        <ul id="manageSpotList">
          {spotList.map(spot => (
            <li title={spot.name} key={spot.id} className='manageSpotsSpot'>
              <img
                className='spotImage'
                src={spot.previewImage}
                onClick={() => handleClick(spot.id)}>
              </img>
              <div id='spotInfoContainer'>
                <div id='manageLocationRatingContainer'>
                  <h2 onClick={() => handleClick(spot.id)}>{spot.city}, {spot.state}</h2>
                  <p><i className="fa-solid fa-star"></i>{spot.avgRating || "New"}</p>
                </div>
                <p id='manageSpotPrice'>${spot.price} night</p>
                <div id="spotButtons">
                  <button onClick={() => history.push(`/editSpot/${spot.id}`)}>Update</button>
                  <OpenModalButton buttonText="Delete" modalComponent={<DeleteSpotModal />} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ManageSpots;