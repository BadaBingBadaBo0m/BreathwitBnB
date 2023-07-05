import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true)
  const { closeModal } = useModal();
  const history = useHistory();

  useEffect(() => {
    if (credential.length >= 4 && password.length >= 6) {
      setIsDisabled(false)
    };

    if (credential.length < 4) {
      setIsDisabled(true)
    };

    if (password.length < 6) {
      setIsDisabled(true)
    };

  }, [credential, password]);

  const loginDemo = async () => {
    await dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    history.push('/')
    return
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    return await dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
          throw new Error('Login failed')
        }
      })
      .then(() => history.push('/'))
      .catch((error) => console.error(error))
  };

  return (
    <div id='loginFormContainer'>
      <h1 id='loginHeader'>Log In</h1>
      <form id='loginForm' onSubmit={handleSubmit}>
        {errors.credential && (
          <p className='error'>{errors.credential}</p>
        )}
        <label className='loginLabel'>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => { setCredential(e.target.value) }}
            required
            className='loginInput'
          />
        </label>
        <label className='loginLabel'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='loginInput'
          />
        </label>
        <button
          type="submit"
          disabled={isDisabled}
          className={isDisabled ? "loginSubmit disabled" : "loginSubmit"}
        >Log In</button>

        <p
          className='demoUserLogin'
          onClick={loginDemo}
        >Demo User</p>
      </form>
    </div>
  );
}

export default LoginFormModal;