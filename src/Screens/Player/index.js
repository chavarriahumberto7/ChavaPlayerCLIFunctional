//Player screen
//[x]Header section
//[x]Music details section
//[x]Slider section  [Rect native-community slider]
//[x]Control button section
//[x]Lyrics section



import { View, TouchableOpacity,StatusBar,SafeAreaView,StyleSheet,Text,
  Dimensions

} from 'react-native'

import React, {useState,useEffect}from 'react'
import {Images,Colors,Metrics} from '../../Constants/index'

import TrackPlayer,{
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  playbacks

} from 'react-native-track-player';

const setPlayer=async()=>{

  const {Favorites}=dummyData;
  const songs =Favorites;

  await TrackPlayer.setupPlayer();

   await TrackPlayer.add(songs).then((el)=>{
    console.log(el)
   })

  // console.log({'ThisSongs':songs});
  
}

const togglePlayback=async(playbackState)=>{

  const currentTrack=await TrackPlayer.getCurrentTrack();

  console.log({playbackState})

  

   if(currentTrack!==null){
    if(playbackState==State.Playing){
      await TrackPlayer.pause();
     }
     else{
      await TrackPlayer.play();
    }
   } 
}

// import {McText, McImage,} from 'Components'
// import SelectedPlayList from '../../Components/SelectedPlayList'

import {dummyData} from '../../Mock/index';

const {width,height} =Dimensions.get('window');

const Player = ({route,navigation}) => {
  
 const [selected,setSelected]=useState(null);
 const [selectedPlayList,setSelectedPlaylist]=useState(null);


 const playbackState=usePlaybackState()

const renderPlaylistName=()=>{
  return(
    <View>
      <Text style={styles.textH1}>
        {selected?.artist}
      </Text>
      <Text style={styles.textH2}>
        {selected?.title}
      </Text>

      <TouchableOpacity style={styles.button}
      onPress={()=> togglePlayback(playbackState)}
      >
        
          {
            playbackState==State.Playing?
            <Text style={styles.textH2}>pause</Text>
            :<Text style={styles.textH2}>play</Text>
          }
        
      </TouchableOpacity>
    </View>
  )
}

useEffect(()=>{

  //  let {selectedMusic,playList}=route.params;

  const {Favorites}=dummyData;

  setSelected(Favorites[0]);
  // setSelectedPlaylist(playList); 

  setPlayer();
  
    // console.log(Favorites[0]);
  // TODO 
  
},[])

  return (
   <SafeAreaView 
    
   >
    <StatusBar barStyle='light-content'/>

    <View
      style={{...styles.container}}
    
    >

       {/* Header section */}
        <View
        style={styles.headerSection}
        >
          {/* <TouchableOpacity onPress={()=> navigation.goBack()}> */}
            {/* <McImage source={Images.left}/> */}
            
          {/* </TouchableOpacity> */}
          {/* <McImage source={Images.menu}/> */}

          {renderPlaylistName()}

    </View>
    

      
    </View>
    

   
  
    

   </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor: Colors.background,
    height,
    width
  },
  headerSection:{
    marginHorizontal:12,
    marginVertical:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',


  },
  textH1:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  textH2:{
    fontSize:16,
    color:'white',
  },
  button:{
    backgroundColor:Colors.primary,
    height:50,
    width:50,
    borderRadius:50,
    fontSize:18,
   justifyContent:'center',
   alignItems:'center',

  }
})

/* const Container=styled.SafeAreaView`
flex:1;
background-color: ${Colors.background};
`;
const HeaderSection=styled.View`
margin:12px 24px;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:26px;
margin-left:24px;
margin-right:24px;


`;
 

const LyricsSection=styled.View`
margin:14px 0px;
align-items:center;
justify-content:center;
`;
*/

export default Player