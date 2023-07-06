import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../images/BBnB-transparent.png'
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <li className='userDropdownLoggedOutLinks'>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    );
  }

  return (
    <nav>
      <div id="logoContainer">
        <img
          onClick={() => history.push('/')}
          src={logo}
          id="logo"
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
    </nav>
  );
}

export default Navigation;