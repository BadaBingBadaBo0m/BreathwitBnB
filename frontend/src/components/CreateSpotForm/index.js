import { useEffect, useState } from 'react';
import validStates from '../../data/validStates.json';
import validCountries from '../../data/validCounties.json';
import './CreateSpotForm.css'

const CreateSpotForm = () => {
  const stateList = validStates.states;
  const countryList = validCountries.countries;
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div id="formContainer">
      <form id='createSpotForm'>
        <div id='formHeaderContainer'>
          <h1>Create a new Spot</h1>
          <h2>Where's your place located?</h2>
          <p>Guests will only get your exact address once they booked a reservation</p>
        </div>

        <div id='locationContainer'>
          <label className="createSpotLabel country">
            Country
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryList.map(country => (
                <option value={country}>{country}</option>
              ))}
            </select>
          </label>
          <label className="createSpotLabel streetAdd">
            Street Address
            <input
              type='text'
              placeholder='Address'
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
                  <option value={state}>{state}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div id='createSpotInfoContainer'>
          <div id='spotDescription'>
            <h2>Describe your place to guests</h2>
            <p>
              Mention the best features of your space, any special amenities like fast wifi or parking,
              and what you love about the neighborhood.
            </p>
            <textarea
              id='descriptionInput'
              placeholder='Please write at least 30 characters'
            />
          </div>
        </div>


      </form>
    </div>
  )
}

export default CreateSpotForm;