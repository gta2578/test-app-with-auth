import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

import "./style.scss";
import GoogleAuth from "../googleAuth/googleAuth";


function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens, setLoggedIn, setIsError, isLoggedIn, isError } = useAuth();

  function postLogin(e) {
    e.preventDefault();
    setAuthTokens('2fhgfvce345bgbf909090wqeewertb6678');
    setLoggedIn(true);
    setIsError(false);
  }

  if (isLoggedIn) {
    return <Navigate to="/" exact='true'/>;
  }

  return (
    <div className="card">
      <form className="formSignin" onSubmit={postLogin}>
        <input
          className="inputSignin"
          type="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="email"
          required={true}
        />
        <input
          className="inputSignin"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          required={true}
        />
        <button className="buttonSignin">Sign In</button>
      </form>
      <div className='linkWrapper'><span>Don't have an account?</span><Link to="/signup">Sign up</Link></div>
      <div>---OR---</div>
      <GoogleAuth setLoggedIn={setLoggedIn} setAuthTokens={setAuthTokens}  />
      {isError && <div>The username or password provided were incorrect!</div>}
    </div>
  );
}

export default Login;