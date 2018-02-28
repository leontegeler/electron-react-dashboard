import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 400,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export default class Spotify extends Component {
  render () {
    return (
      <div className="spotify">
      <SpotifyPlayer
        uri="spotify:user:tegibaby:playlist:1tMJLpyUjzlQGFB10GkUEE"
        size={size}
        view={view}
        theme={theme}
      />
      </div>
    )
  }
}
