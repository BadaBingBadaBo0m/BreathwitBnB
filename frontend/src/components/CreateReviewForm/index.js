import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import { getReviewBySpotId } from "../../store/reviews";
import { getSpotById } from "../../store/spots";
import './reviewForm.css';

const CreateReviewForm = ({ spotId }) => {
  const spot = useSelector((state) => state.spots.singleSpot);
  const User = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const [description, setDescription] = useState('');
  const [activeRating, setActiveRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [formErrors, setFormErrors] = useState([]);
  const [serverErrors, setServerErrors] = useState("");
  // const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (val) => {
    setRating(val)
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);
    setServerErrors("")

    const newReview = {
      review: {
        review: description,
        stars: rating
      },
      spotId: spot.id,
      User
    }

    const createdReview = await dispatch(createReview(newReview))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            if (res.status === 400 && data.errors) {
              const errorList = Object.values(data.errors)
              setFormErrors(errorList)
              return
            }
          }
          if (res.status === 500 && data.message) {
            setServerErrors(data.message)
            return
          }
        }
      )

    if (createdReview) {
      closeModal()
      await dispatch(getSpotById(spotId));
    }
  }

  return (
    <div>
      <form id="createReviewForm" onSubmit={(onSubmit)}>
        <h2>How was your stay?</h2>
        {formErrors.length > 0 &&
          <div
            id='reviewErrorContainer'>
            {formErrors.map(error => (<p key={error} className='reviewError'>{error}</p>))}
          </div>}
        {serverErrors.length > 0 && <div id='reviewErrorContainer'><p className='reviewError'>{serverErrors}</p></div>}
        <textarea
          placeholder='Leave your review here...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id='reviewText'
        />

        <div id='starsContainer'>
          <div
            className={activeRating >= 1 ? 'filled' : 'empty'}
            onMouseEnter={() => setActiveRating(1)}
            onMouseLeave={() => setActiveRating(rating)}
            onClick={() => onChange(1)}
          >
            {<i className="fa-solid fa-star"></i>}
          </div>
          <div
            className={activeRating >= 2 ? 'filled' : 'empty'}
            onMouseEnter={() => setActiveRating(2)}
            onMouseLeave={() => setActiveRating(rating)}
            onClick={() => onChange(2)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 3 ? 'filled' : 'empty'}
            onMouseEnter={() => setActiveRating(3)}
            onMouseLeave={() => setActiveRating(rating)}
            onClick={() => onChange(3)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 4 ? 'filled' : 'empty'}
            onMouseEnter={() => setActiveRating(4)}
            onMouseLeave={() => setActiveRating(rating)}
            onClick={() => onChange(4)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 5 ? 'filled' : 'empty'}
            onMouseEnter={() => setActiveRating(5)}
            onMouseLeave={() => setActiveRating(rating)}
            onClick={() => onChange(5)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <button
          // disabled={isDisabled}
          // className={isDisabled ? 'reviewSubmit disabled' : 'reviewSubmit'}
          className='reviewSubmit'
          type='submit'
        >Submit your review</button>

      </form>
    </div>
  )
}

export default CreateReviewForm;