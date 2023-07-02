import { useEffect, useState } from 'react';
import validStates from '../../data/validStates.json';
import validCountries from '../../data/validCounties.json';
import './CreateSpotForm.css'

const CreateSpotForm = () => {
  const stateList = validStates.states;
  const countryList = validCountries.countries;
  const [country, setCountry] = useState("United States of America");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [spotImages, setSpotImages] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errorObj = {};
    if (!country) {
      errorObj.country = "Country is required"
    }

    if (!address) {
      errorObj.address = "Address is required"
    }

    if (!city) {
      errorObj.city = "City is required"
    }

    if (!state) {
      errorObj.state = "State is required"
    }

    if (description.length < 30) {
      errorObj.description = 'Description needs a minimum of 30 characters'
    }

    if (!title) {
      errorObj.title = "Name is required"
    }

    if (price < 1 || !price) {
      errorObj.price = 'Price is required'
    }

    if (!previewImage) {
      errorObj.previewImage = "Preview image is required"
    }

    setErrors(errorObj)
  }, [address, country, city, state, description, title, price, previewImage, spotImages])

  return (
    <div id="formContainer">
      <form id='createSpotForm'>
        <div id='formHeaderContainer'>
          <h1>Create a new Spot</h1>
          <h2>Where's your place located?</h2>
          <p>Guests will only get your exact address once they booked a reservation</p>
        </div>

        <div id='locationContainer' className='bottomBorder'>
          <label className="createSpotLabel country">
            <div>Country {errors.country && <p className='locationErrors'>{errors.country}</p>}</div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryList.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </label>
          <label className="createSpotLabel streetAdd">
            <div>Street Address {errors.address && <p className='locationErrors'>{errors.address}</p>}</div>
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <div id='cityStateContainer'>
            <label className="createSpotLabel city">
              <div>City {errors.city && <p className='locationErrors'>{errors.city}</p>}</div>
              <input
                type='text'
                placeholder='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label >
            <p id='cityStateComma'>,</p>
            <label className="createSpotLabel state">
              <div>State {errors.state && <p className='locationErrors'>{errors.state}</p>}</div>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {stateList.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div id='createSpotInfoContainer'>
          <div id='createSpotDescription' className='bottomBorder'>
            <h2 className='createSpotFormH2'>Describe your place to guests</h2>
            <p className='createSpotFormP'>
              Mention the best features of your space, any special amenities like fast wifi or parking,
              and what you love about the neighborhood.
            </p>
            <textarea
              id='descriptionInput'
              placeholder='Please write at least 30 characters'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <p className='infoErrors'>{errors.description}</p>}
          </div>

          <div id='createSpotTitleContainer' className='bottomBorder'>
            <h2 className='createSpotFormH2'>Create a title for your spot</h2>
            <p className='createSpotFormP'>Catch guests' attention with a spot title that highlights what makes your place special</p>
            <input
              id='createSpotTitleInput'
              placeholder='Name of your spot'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className='infoErrors'>{errors.title}</p>}
          </div>
        </div>

        <div id='createSpotPricing' className='bottomBorder'>
          <h2 className='createSpotFormH2'>Set a base price for your spot</h2>
          <p className='createSpotFormP'>Competitive pricing can help your listing stand out and rank higher in search results</p>
          <div id='dollarSignInput'>
            <i className="fa-solid fa-dollar-sign"></i>
            <input
              type='number'
              id='createSpotPriceInput'
              placeholder='Price per night (USD)'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {errors.price && <p className='infoErrors'>{errors.price}</p>}
        </div>

        <div id='createSpotImages' className='bottomBorder'>
          <h2 className='createSpotFormH2'>Liven up your spot with photos</h2>
          <p className='createSpotFormP'>Submit a link to at least one photo to publish your spot</p>
          <div className='createSpotImageContainer'>
            <input
              className='createFormSpotImage'
              placeholder='Preview Image URL'
              value={previewImage}
              onChange={(e) => setPreviewImage(e.target.value)}
            />
            {errors.previewImage && <p className='infoErrors'>{errors.previewImage}</p>}
          </div>
          <div className='createSpotImageContainer'>
            <input
              className='createFormSpotImage'
              placeholder='Image URL'
              value={spotImages}
              onChange={(e) => setSpotImages(e.target.value)}
            />
          </div>
          <div className='createSpotImageContainer'>
            <input
              className='createFormSpotImage'
              placeholder='Image URL'
              value={spotImages}
              onChange={(e) => setSpotImages(e.target.value)}
            />
          </div>
          <div className='createSpotImageContainer'>
            <input
              className='createFormSpotImage'
              placeholder='Image URL'
              value={spotImages}
              onChange={(e) => setSpotImages(e.target.value)}
            />
          </div>
          <div className='createSpotImageContainer'>
            <input
              className='createFormSpotImage'
              placeholder='Image URL'
              value={spotImages}
              onChange={(e) => setSpotImages(e.target.value)}
            />
          </div>
        </div>

        <div id='submitButtonContainer'>
          <button
            type='submit'
            id='createSpotSubmit'
          >Create Spot
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateSpotForm;