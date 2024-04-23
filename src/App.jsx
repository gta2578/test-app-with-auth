import React, { useState } from "react";
import { AuthContext } from "./context/auth";
import { NavLink } from "react-router-dom";
import Header from "./header";

import "./App.scss";


function App() {
  const existingToken = localStorage.getItem("token");
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    localStorage.setItem("token", data);
    setAuthTokens(data);
  };

  const [check, setCheck] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);


  const handleClickLogout = () => {
    localStorage.setItem('token', '')
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens: setTokens,
        check,
        setCheck,
        isLoggedIn,
        setLoggedIn,
        isError,
        setIsError
      }}
    >
      <div className="App">
        <div className="appHeader">
          <div className="headerContainer">
            <ul className="mainMenu">
              <li>
                <NavLink to="/" exact='true'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/listoforders">
                  List of Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="linkBlock">
            {localStorage.getItem('token') === '' || localStorage.getItem('token') === null ?
              <>
                <NavLink className="signup" to="/signup">
                  Sign Up
                </NavLink>
                <NavLink className="signin" to="/signin">
                  Log In
                </NavLink>
              </>
              : <button onClick={handleClickLogout} className='logoutBtn'>Logout</button>
              }
          </div>
        </div>

        <Header />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
