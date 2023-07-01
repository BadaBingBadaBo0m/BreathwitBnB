import { useDispatch, useSelector } from "react-redux";
import { getSpotById } from "../../store/spots";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotDetailsImages from "./SpotDetailsImages";
import './spotDetails.css'

const SpotDetails = () => {
  const dispatch = useDispatch();
  const spotId = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);
  console.log(spot)

  useEffect(() => {
    const getSpot = async () => {
      dispatch(getSpotById(spotId))
    }

    getSpot()
  }, [dispatch])

  if (!spot) return null;

  return (
    <div id="spotDetailsContainer">
      <div id="titleContainer">
        <h1>{spot.name}</h1>
        <h3>{spot.city}, {spot.state}, {spot.country}</h3>
      </div>

      <SpotDetailsImages spot={spot} />

      <div id="descriptionContainer">
        <div id="header&DescContainer">
          <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
          <p>{spot.description}</p>
        </div>
        <div id="reserveContainer">

        </div>
      </div>
    </div>
  )
};

export default SpotDetails;