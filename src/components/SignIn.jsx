// @ts-nocheck
import '../styles/App.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostData from '../services/services';
import { logIn } from '../features/userSlice';
import { logError, noError } from '../features/loginSlice';

import { useNavigate } from 'react-router-dom';
import { getUserInfos } from '../features/userInfosSlice';

function SignIn() {
  const loginUsername = useRef();
  const loginPwd = useRef();
  const recordSession = useRef();

  const dispatch = useDispatch();

  const error = useSelector(state => state.loginError.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = {
      "email": loginUsername.current.value,
      "password": loginPwd.current.value
    };

    console.log('record session : ', recordSession.current.checked);

    try {
      const user = await PostData("UserLogin", userData);
      let token = user.body.token;
      localStorage.setItem("token", token);
      dispatch(logIn(user));
      dispatch(noError());
      const userInfos = await PostData("UserInfos", null);
      dispatch(getUserInfos(userInfos));
      navigate("../user", { replace: true });
    } catch (error) {
      dispatch(logError());
    }

    console.log(loginUsername.current.value);
    console.log(loginPwd.current.value);
  }

  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label
          ><input type="email" id="username" required ref={loginUsername} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label
          ><input type="password" id="password" required ref={loginPwd} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" ref={recordSession}/><label htmlFor="remember-me"
            >Remember me</label
          >
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <Link to="../user" className="sign-in-button">Sign In</Link> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */
        <button type="submit" className="sign-in-button">Sign In</button>
        /*<!--  --> */}
        <span>{error && "Le mail ou le mot de passe ne correspondent pas"}</span>
      </form>
    </section>
  </main>)
}

export default SignIn;