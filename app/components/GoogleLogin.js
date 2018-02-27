import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export default class GLogin extends Component {

  render() {
    return (
      <GoogleLogin
        clientId="578903203831-rrit8sghtqd8bhjc82r9lksei9rt6egc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    )
  }
}
