import { useDispatch, useSelector } from "react-redux";
import { getSpotById } from "../../store/spots";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './spotDetails.css'

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

  const previewImage = spot.SpotImages.find((image) => image.preview === true);
  const spotImages = spot.SpotImages.filter(image => image.preview === false)
  console.log(spotImages)
  let imageCount = 1;

  return (
    <div id="spotDetailsContainer">
      <div id="titleContainer">
        <h1>{spot.name}</h1>
        <h3>{spot.city}, {spot.state}, {spot.country}</h3>
      </div>

      <div id="imageContainer">
        <img className="image1" id="previewImage" src={previewImage.url}></img>
        {spotImages.map(image => (
          <img className={`image${++imageCount} gridImage`} src={image.url}></img>
        ))}
      </div>
    </div>
  )
};

export default SpotDetails;