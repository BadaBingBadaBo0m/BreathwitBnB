import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";


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
    <div className='spotsContainer'>
      {spotList.map((spot) => {
        return (
          <div key={spot.id} className='spot'>
            <img src={spot.previewImage}></img>
            <h2>{spot.name}</h2>

          </div>
        )
      })}
    </div>
  )
}

export default LandingPage;