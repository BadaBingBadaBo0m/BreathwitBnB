import { useEffect } from "react";
import { getUserSpots } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './manageSpots.css';

const ManageSpots = () => {
  const dispatch = useDispatch();
  const spotObj = useSelector((state) => state.user.spots)

  useEffect(() => {
    const getSpots = () => {
      dispatch(getUserSpots());
    }

    getSpots();
  }, [dispatch]);

  if (Object.keys(spotObj).length <= 0) return null;

  return (
    <div id="manageSpotsContainer">
      <h2>Manage spots</h2>
      <NavLink to='/spots/new'> <button id="createNewSpotButton">Create a New Spot</button> </NavLink>

      <div id="userSpotListContainer">

      </div>
    </div>
  );
};

export default ManageSpots;