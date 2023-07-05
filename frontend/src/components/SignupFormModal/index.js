import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div id="signUpFormContainer">
      <form onSubmit={handleSubmit} id="signUpForm">
        <h1>Sign Up</h1>
        <div className="signUpInfoContainer">
          <label className="signUpLabel">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          <label className="signUpLabel">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          {errors.email && <p className="signUpErrors">{errors.email}</p>}
          {errors.username && <p className="signUpErrors">{errors.username}</p>}
        </div>
        <div className="signUpInfoContainer">
          <label className="signUpLabel">
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          <label className="signUpLabel">
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          {errors.firstName && <p className="signUpErrors">{errors.firstName}</p>}
          {errors.lastName && <p className="signUpErrors">{errors.lastName}</p>}
        </div>
        <div className="signUpInfoContainer">
          <label className="signUpLabel">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          <label className="signUpLabel">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="signUpInput"
            // required
            />
          </label>
          {errors.password && <p className="signUpErrors">{errors.password}</p>}
          {errors.confirmPassword && (
            <p className="signUpErrors">{errors.confirmPassword}</p>
          )}
        </div>
        <button id="submitSignUpBtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;