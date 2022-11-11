import React from 'react';
import Root from './src/root';
import TrackPlayer from 'react-native-track-player'

TrackPlayer.registerPlaybackService(() => require('./service'));


const  App=()=> {
  return (
    <Root/>
  );
}

export default App
