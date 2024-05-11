import React from 'react';
import logo from '../../images/BBnB-transparent.png'
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LogoAndUserControls = ({ sessionUser, isLoaded }) => {
  const history = useHistory();

  return (
    <div id='logo-and-user-controls'>
      <div id="logoContainer">
        <img
          onClick={() => history.push('/')}
          src={logo}
          id="logo"
          alt='BBNB logo'
        ></img>
        <NavLink id='BBnB' exact to="/">BBnB</NavLink>
      </div>
      <div id="navBtnContainer">
        {sessionUser && (
          <NavLink id="createSpotLink" to='/spots/new'>Create a new spot</NavLink>
        )}
        {isLoaded && (
          <div className='loginSignupModalBtn'>
            <ProfileButton user={sessionUser} />
          </div>
        )}
      </div>
    </div>
  )
}

export default LogoAndUserControls;
