import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({setAuthTokens, setLoggedIn}) => {

  const handleSuccess = (response) => {
    localStorage.setItem('token', response.credential)
    setAuthTokens(response.credential)
    setLoggedIn(true)
  };

  const handleFailure = (error) => {
    console.error('Login failed:', error);

  };

  return (
    <GoogleLogin
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onError={handleFailure}
    />
  );
};

export default GoogleAuth;