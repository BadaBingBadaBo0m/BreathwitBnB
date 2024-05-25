import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import LogoAndUserControls from "./LogoAndUserControls";
import Categories from "./Categories";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const location = useLocation();

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
    <nav id="navBarContainer">
      <LogoAndUserControls sessionUser={sessionUser} isLoaded={isLoaded} />

      {location.pathname === '/' && <Categories />}
    </nav>
  );
}

export default Navigation;
