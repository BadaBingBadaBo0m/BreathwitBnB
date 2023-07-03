import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import './reviewForm.css';

const CreateReviewForm = () => {
  const spot = useSelector((state) => state.spots.singleSpot);
  const { closeModal } = useModal();
  const [description, setDescription] = useState('');
  const [activeRating, setActiveRating] = useState(0);
  const [rating, setRating] = useState(0);

  const onChange = (val) => {
    setRating(val)
  }


  const onSubmit = (e) => {
    e.preventDefault();

    console.log({
      description,
      rating
    })

    // closeModal()
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

        <button id='reviewSubmit' type='submit'>Submit your review</button>

      </form>
    </div>
  )
}

export default CreateReviewForm;