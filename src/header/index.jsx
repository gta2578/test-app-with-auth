import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import ListOfOrders from "../pages/listoforders";
import Contacts from "../pages/contacts";
import Services from "../pages/services";
import SignUp from "../signup";
import Login from "../login";
import {useAuth} from "../context/auth";

import './style.scss'


function Header() {

  const { authTokens } = useAuth();

  return (
    <div className='header'>
      <Routes>
        <Route path="/" exact='true' element={authTokens ? (<Home />) : (<Navigate to="/signin" />)} />
        <Route path="/listoforders" element={authTokens ? (<ListOfOrders />) : (<Navigate to="/signin" />)} />
        <Route path="/contacts" element={authTokens ? (<Contacts />) : (<Navigate to="/signin" />)} />
        <Route path="/services" element={authTokens ? (<Services />) : (<Navigate to="/signin" />)} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Header;