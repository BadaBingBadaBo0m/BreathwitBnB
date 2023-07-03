import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import './reviewForm.css';

const CreateReviewForm = () => {
  const spot = useSelector((state) => state.spots.singleSpot);
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const [description, setDescription] = useState('');
  const [activeRating, setActiveRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});
  // const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (val) => {
    setRating(val)
  }


  const onSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: {
        review: description,
        stars: rating
      },
      spotId: spot.id
    }

    const createdReview = await dispatch(createReview(newReview))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            if (res.status === 400 && data.errors) {
              setErrors(data.errors)
              return
            }
          }
          if (res.status === 500 && data.message) {
            setErrors(data.message)
            return
          }
        }
      )

    console.log('errors', errors)
  }

  return (
    <div>
      <form id="createReviewForm" onSubmit={(onSubmit)}>
        <h2>How was your stay?</h2>

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