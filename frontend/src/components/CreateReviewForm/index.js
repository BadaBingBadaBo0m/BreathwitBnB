import { useState } from 'react'
import './reviewForm.css';

const CreateReviewForm = () => {
  let rating
  const [activeRating, setActiveRating] = useState();

  return (
    <div>
      <form id="createReviewForm">
        <h2>How was your stay?</h2>

        <textarea placeholder='Leave your review here...' />

        <div id='starsContainer'>
          <div
            className={activeRating >= 1 ? 'filled' : 'empty'}
          // onMouseEnter={() => !disabled && setActiveRating(1)}
          // onMouseLeave={() => setActiveRating(rating)}
          // onClick={() => onChange(1)}
          >
            <i class="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 2 ? 'filled' : 'empty'}
          // onMouseEnter={() => !disabled && setActiveRating(2)}
          // onMouseLeave={() => setActiveRating(rating)}
          // onClick={() => onChange(2)}
          >
            <i class="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 3 ? 'filled' : 'empty'}
          // onMouseEnter={() => !disabled && setActiveRating(3)}
          // onMouseLeave={() => setActiveRating(rating)}
          // onClick={() => onChange(3)}
          >
            <i class="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 4 ? 'filled' : 'empty'}
          // onMouseEnter={() => !disabled && setActiveRating(4)}
          // onMouseLeave={() => setActiveRating(rating)}
          // onClick={() => onChange(4)}
          >
            <i class="fa-solid fa-star"></i>
          </div>
          <div
            className={activeRating >= 5 ? 'filled' : 'empty'}
          // onMouseEnter={() => !disabled && setActiveRating(5)}
          // onMouseLeave={() => setActiveRating(rating)}
          // onClick={() => onChange(5)}
          >
            <i class="fa-solid fa-star"></i>
          </div>
        </div>

        <button>Submit your review</button>

      </form>
    </div>
  )
}

export default CreateReviewForm;