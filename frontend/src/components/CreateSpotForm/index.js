import { useEffect, useState } from 'react';
import validStates from '../../data/validStates.json';
import validCountries from '../../data/validCounties.json';
import './CreateSpotForm.css'

const CreateSpotForm = () => {
  const stateList = validStates.states;
  const countryList = validCountries.countries;
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [spotImages, setSpotImages] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errorObj = {};
    if (!country.length) {
      errorObj.country = "Country is required"
    }

    setErrors(errorObj)
  }, [address, country, state, description, title, price, previewImage, spotImages])

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
            Country
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
            Street Address
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <div id='cityStateContainer'>
            <label className="createSpotLabel city">
              City
              <input
                type='text'
                placeholder='City'
              />
            </label >
            <p id='cityStateComma'>,</p>
            <label className="createSpotLabel state">
              State
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
          </div>

          <div id='CreateSpotTitleContainer' className='bottomBorder'>
            <h2 className='createSpotFormH2'>Create a title for your spot</h2>
            <p className='createSpotFormP'>Catch guests' attention with a spot title that highlights what makes your place special</p>
            <input
              id='createSpotTitleInput'
              placeholder='Name of your spot'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div id='createSpotPricing' className='bottomBorder'>
          <h2 className='createSpotFormH2'>Set a base price for your spot</h2>
          <p className='createSpotFormP'>Competitive pricing can help your listing stand out and rank higher in search results</p>
          <div id='dollarSignInput'>
            <i className="fa-solid fa-dollar-sign"></i>
            <input
              id='createSpotPriceInput'
              placeholder='Price per night (USD)'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div id='createSpotImages' className='bottomBorder'>
          <h2 className='createSpotFormH2'>Liven up your spot with photos</h2>
          <p className='createSpotFormP'>Submit a link to at least one photo to publish your spot</p>
          <input
            className='createFormSpotImage'
            placeholder='Preview Image URL'
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
          />
          <input
            className='createFormSpotImage'
            placeholder='Image URL'
            value={spotImages}
            onChange={(e) => setSpotImages(e.target.value)}
          />
          <input
            className='createFormSpotImage'
            placeholder='Image URL'
            value={spotImages}
            onChange={(e) => setSpotImages(e.target.value)}
          />
          <input
            className='createFormSpotImage'
            placeholder='Image URL'
            value={spotImages}
            onChange={(e) => setSpotImages(e.target.value)}
          />
          <input
            className='createFormSpotImage'
            placeholder='Image URL'
            value={spotImages}
            onChange={(e) => setSpotImages(e.target.value)}
          />
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