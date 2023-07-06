import { useEffect, useState } from "react";
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
  // const user = useSelector((state) => state.session.user);
  // let spotList = Object.values(spotObj);
  const [spotList, setSpotList] = useState(Object.values(spotObj))

  // if (user === null) history.push('/');

  useEffect(() => {
    const getSpots = async () => {
      await dispatch(getUserSpots())
        .catch((error) => {
          if (error.status === 404) {
            setSpotList([]);
          };
        })
    }

    getSpots();
  }, [dispatch]);

  if (Object.keys(spotObj).length <= 0) return (
    <div id="manageSpotsContainer">
      <h2>Manage spots</h2>
      <NavLink to='/spots/new'> <button id="createNewSpotButton">Create a New Spot</button> </NavLink>
    </div>
  );

  const handleClick = (spotId) => {
    history.push(`/spots/${spotId}`);
  };

  return (
    <div id="manageSpotsContainer">
      <h2>Manage spots</h2>
      <NavLink to='/spots/new'> <button id="createNewSpotButton">Create a New Spot</button> </NavLink>

      <div id="userSpotListContainer">
        <ul id={spotList.length >= 4 ? 'manageSpotListGrid' : "manageSpotListFlex"}>
          {spotList.map(spot => (
            <li
              title={spot.name} key={spot.id}
              className='manageSpotsSpot'
            >
              <img
                className='spotImage'
                src={spot.previewImage}
                alt={spot.name}
                onClick={() => handleClick(spot.id)}>
              </img>
              <div id='spotInfoContainer' onClick={() => handleClick(spot.id)}>
                <div id='manageLocationRatingContainer' onClick={() => handleClick(spot.id)}>
                  <h2>{spot.city}, {spot.state}</h2>
                  <p><i className="fa-solid fa-star"></i>{spot.avgRating === '0.0' ? "New" : spot.avgRating}</p>
                </div>
                <p id='manageSpotPrice'>${spot.price} night</p>
              </div>
              <div id="spotButtons">
                <button onClick={() => history.push(`/editSpot/${spot.id}`)}>Update</button>
                <OpenModalButton buttonText="Delete" modalComponent={<DeleteSpotModal spotId={spot.id} />} />
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ManageSpots;