import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginError, setLoginError] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    if (email.length && username.length && firstName.length && lastName.length && password.length && confirmPassword.length) {
      setIsDisabled(false)
    }

    if (email.length <= 3) setIsDisabled(true);

    if (username.length <= 3) setIsDisabled(true);

    if (firstName.length <= 1) setIsDisabled(true);

    if (lastName.length <= 1) setIsDisabled(true);

    if (password.length <= 5) setIsDisabled(true);

    if (confirmPassword.length <= 5) setIsDisabled(true);

  }, [email, username, firstName, lastName, password, confirmPassword])

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
            console.log('Errors', data.errors)
            throw new Error('Login failed');
          }
        })
        .then(() => history.push('/'))
        .catch((error) => setLoginError(error));
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div id="signUpFormContainer">
      <form onSubmit={handleSubmit} id="signUpForm">
        <h1 id="signUpHeader">Sign Up</h1>
        <div className="signUpInfoContainer">

          <div className="formInputContainer">
            <label className="signUpLabel">
              Email <span className="errors">{errors.email}</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          <div className="formInputContainer">
            <label className="signUpLabel">
              Username <span className="errors">{errors.username}</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          {/* {errors.email && <p className="signUpErrors">{errors.email}</p>}
          {errors.username && <p className="signUpErrors">{errors.username}</p>} */}
        </div>

        <div className="signUpInfoContainer">

          <div className="formInputContainer">
            <label className="signUpLabel">
              First Name <span className="errors">{errors.firstName}</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          <div className="formInputContainer">
            <label className="signUpLabel">
              Last Name <span className="errors">{errors.lastName}</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          {/* {errors.firstName && <p className="signUpErrors">{errors.firstName}</p>}
          {errors.lastName && <p className="signUpErrors">{errors.lastName}</p>} */}
        </div>

        <div className="signUpInfoContainer">

          <div className="formInputContainer">
            <label className="signUpLabel">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          <div className="formInputContainer">
            <label className="signUpLabel">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="signUpInput"
              required
            />
          </div>

          {errors.password && <p className="signUpErrors">{errors.password}</p>}
          {errors.confirmPassword && (
            <p className="signUpErrors">{errors.confirmPassword}</p>
          )}
        </div>

        <button disabled={isDisabled} className={isDisabled ? "submitSignUpBtnDisabled" : 'submitSignUpBtn'} type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;