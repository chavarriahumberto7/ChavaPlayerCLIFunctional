import React, { useState, useEffect } from 'react';
import { ActivityIndicator,Text,View } from 'react-native';
import  {Colors,Fonts}  from './Constants/index';
import {Player} from './Screens';
// import * as Font from 'expo-font';

import {AppNavigator} from './Navigation'; 
// import TrackPlayer from 'react-native-track-player'



// AppRegistry.registerComponent(...);

// import ThemeManager rom 'Themes';


const Root = ({ params }) => {

  // TrackPlayer.registerPlaybackService(() => require('./service'));

  const [assetsLoaded, setAssetsLoaded] = useState(false);

    /* Loading custom fonts in async */
     const _loadAssetsAsync = async () => {
      
      setAssetsLoaded(true);
    };  
  
    useEffect(() => {
      _loadAssetsAsync();
    
      
    });

  return assetsLoaded ? (
        
           <AppNavigator/>
          
       
      ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
      );
  
}; 

export default Root;
