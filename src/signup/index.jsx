import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import './style.scss'
import {useAuth} from "../context/auth";


function SignUp() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isError, setIsError] = useState(false);

  const { setAuthTokens, setLoggedIn } = useAuth();

  function postSignup(e) {
    e.preventDefault();

    password===passwordAgain ?

    axios.post("https://jsonplaceholder.typicode.com/posts", {
      email: userName,
      password: password
    }).then(result => {
      setAuthTokens('2fhgfvce345bgbf909090wqeewertb6678');
      setLoggedIn(true);
      setIsError(false);
    }).catch(e => {
      setIsError(true);
    })
    : <p>Registration error: check if the password was entered correctly</p>
  }

  return (
    <div className='card'>
      <form className='formSignup'
            onSubmit={postSignup}>
        <input
          className='inputSignup'
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
          required={true}
        />
        <input
          className='inputSignup'
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          required={true}
        />
        <input type="password"
               placeholder="password again"
               className='inputSignup'
               required={true}
               value={passwordAgain}
               onChange={e => {
                 setPasswordAgain(e.target.value);
               }}
        />
        <button className='buttonSignup'>Sign Up</button>
      </form>
      <span>Already have an account?</span><Link to="/signin">Login</Link>
      { isError &&<p>Registration error: check the correctness of the login and password</p> }

    </div>
  );
}

export default SignUp;

//!isError &&<p>You have successfully registered!</p>