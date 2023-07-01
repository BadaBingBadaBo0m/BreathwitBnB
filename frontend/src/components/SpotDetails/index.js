import { useDispatch, useSelector } from "react-redux";
import { getSpotById } from "../../store/spots";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SpotDetails = () => {
  const dispatch = useDispatch();
  const spotId = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);

  useEffect(() => {
    const getSpot = async () => {
      dispatch(getSpotById(spotId))
    }

    getSpot()
  }, [dispatch])

  if (!spot) return null;

  return (
    <div>
      <h2>{spot.name}</h2>
    </div>
  )
};

export default SpotDetails;