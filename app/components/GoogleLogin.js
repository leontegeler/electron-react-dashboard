import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

function GLogin() {
  return(
    <GoogleLogin
      clientId="828692616521-a30cidgltv5cfhg8fbi344i9sqquj138.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />,
    document.getElementById('googleButton')
  );
}

export default GLogin;
