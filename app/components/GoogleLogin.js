import electron, { app, BrowserWindow } from 'electron';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

export default class Glogin extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const BrowserWindow = electron.remote.BrowserWindow;
    console.log('test')
    const myApiOauth = new ElectronGoogleOAuth2(
      'CLIENT_ID',
      'CLIENT_SECRET',
      ['https://www.googleapis.com/auth/drive.metadata.readonly']
    );

      myApiOauth.openAuthWindowAndGetTokens()
        .then(token => {
          // use your token.access_token
        });
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Google Login</button>
        <br />
      </div>
    )
  }
}
