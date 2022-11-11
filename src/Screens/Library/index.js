import { View,TouchableOpacity,FlatList, Text, Image, StyleSheet,TouchableWithoutFeedback, Dimensions, StatusBar,TextInput, ScrollView} from 'react-native'
import React from 'react'
import { Colors, Images,Metrics } from '../../Constants';
import {dummyData} from '../../Mock'
import BottomBar from './BottomBar';
import {PlayButton} from '../../Components'

const {width,height} =Dimensions.get('window');



const Library = ({navigation}) => {

  const _renderItem=({item,index})=>{

    return(
    <TouchableOpacity onPress={()=>{ navigation.navigate('Player',{selectedMusic:item})}}>
      <View 
      style={{
        marginTop:16,
        marginLeft: index===0?24:0,
        marginRight: index===dummyData.Playlists.length-1?0:24,
      }}
      >
        <Image
        style={{
          marginBottom:10,
          width:110,
          height:130,
        }}
        key={index}
        source={item.artwork}
        />
        <Text 
        style={{ fontSize:16, color:Colors.grey5, fontWeight:'500'}}
        >{item.name}</Text>
        <Text 
        style={{
          marginTop:4,
          fontSize:12,
          color:Colors.grey3,
          fontWeight:'800'
                }}
        >{item.songs} songs</Text>
      </View>
      
    </TouchableOpacity>
  )

}


  return (
    <View
    style={styles.container}
    >
      {/* Header SECTION */}
      <StatusBar barStyle='light-content'/>
      <Text
      style={{
        marginLeft:Metrics.padding,
        marginTop:12, 
        fontSize:28,
        color:Colors.primary,
        fontWeight:'bold',
      }}
      >
        Library
      </Text>

      {/* search section  */}

      <View style={styles.searchSection}>

          <Image source={Images.find} 
            style={{
              marginLeft:16,
              marginRight:12,
              width:16,
              height:16,
            }}
            />

          <TextInput
            placeholder='Song or artist'
            placeholderTextColor={Colors.grey3}
            style={{
              color:Colors.grey4,
            }}/>


      </View>
     
  {/* PlayList section Flat List */}
     <View style={styles.titleSection}>
        <Text
        style={{ fontSize:20, color:Colors.grey4}}
        >
          Playlists
        </Text>
       <TouchableWithoutFeedback onPress={
        ()=>{
          console.log('Go to playlist page');
        }
       }>
       <Image
        source={Images.right}
        style={{height:16,width:16}}
        
        />
       </TouchableWithoutFeedback>

      </View>
      {/* end of title section */}
      <View style={{marginBottom:10}}>
        <FlatList
        keyExtractor={(item)=> 'playlist_'+item.id}
        horizontal
        showsHorizontalCrollIndecator='false'
        contentContainerStyle={
          {}
        }
        data={dummyData.Playlists}
        renderItem={_renderItem}
        />
      </View>

  {/* End of Play list section  */}

      


    {/* Favorite section */}
       {/* header for favorite */}
      <View style={styles.titleSection}>
      <Text medium size={20} color={Colors.grey4} 
      style={{fontSize:20, color:Colors.grey4, fontWeight:'500'}}
      >
          Favorite
        </Text>
          <TouchableWithoutFeedback onPress={
            ()=>{
              console.log('Go to favorite page');
            }
          }>
          <Image
            source={Images.right}
            style={{width:16, height:16}}
            
            />
          </TouchableWithoutFeedback>

      </View>
      {/* end of favorite header */}
      <View>
        <ScrollView style={{
          // height:Math.floor(height*0.4),
          marginBottom:width/4,
          borderBottomColor:'white',borderWidth:1,borderTopColor:'white',
          // backgroundColor:'red'
        }}
        contentContainerStyle={{
          marginTop:14,
          height:height*0.35,
          // backgroundColor:'yellow'
        }}
        >

          {dummyData.Favorites.map((item,index)=>{

            return(
              <View style={styles.favoriteItemView} key={index}> 
                <TouchableOpacity activeOpacity={0.5} 
                onPress={()=> navigation.navigate('Player', {selectedMusic:item, playList:dummyData.Favorites})}
                >

                    <View style={{flexDirection:'row'}}>

                      <View style={styles.musicCircle}>
                        <Image
                        source={Images.music}
                        style={{
                          width:40,
                          height:42,
                        }}
                        />

                      </View>

                        <View style={{
                        marginLeft:12,
                      }}>
                        <Text semi 
                        style={{fontSize:14, color:Colors.grey5}}
                        >{item.title}</Text>
                        <Text 
                        style={{
                          marginTop:4,
                          fontSize:12,
                          color:Colors.grey3,
                          fontWeight:'500',
                        }}
                        >{item.artist}</Text>
                      </View>
                      
                    </View>
                  </TouchableOpacity>
                  <Image source={Images.like} style={{width:16,height:20,}}/>

              </View>
            )

          })}

        </ScrollView>
      </View>
    {/*end of favorite section */}

     {/* Bottom bar section react-native-svg */}

     <View style={styles.bottomSection}>

      <BottomBar>
        <View style={{
          flex:1,
          alignItems:'center',
          flexDirection:'row',
          
        }}>

            <View
              style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignContent:'center',
                alignItems:'center',
                marginHorizontal:16,
                marginVertical:12,
                
              }}>

                  <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    
                    
                  }}>
                    <Image source={Images.thumb}
                    style={
                      {
                        width:50,
                        height:50,
                      }
                    }
                    />

                  <View style={{
                      marginLeft:12,

                      }}>
                  <Text 
                  style={{
                    color:Colors.grey5,
                    fontSize:16,
                    fontWeight:'500',
                  }}
                  
                  >
                    {dummyData.Favorites[0]?.title}</Text>
                  <Text 
                  style={{marginTop:4,fontSize:12,color:Colors.grey3,fontWeight:'400',}}
                  >
                    {dummyData.Favorites[0]?.artist}
                    </Text>
                  
                </View>

                
              </View>

                <PlayButton size={55} circle={47} icon={Images.play} onPress={()=>{console.log('Play Music')}}>
                </PlayButton>

                

            </View>


        </View>


      </BottomBar>

     </View>
     {/* End of Bootn bar section react-native-svg */}




    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor: Colors.background,
    height,
    width
  },
  searchSection:{
    height:52,
    borderRadius:30,
    backgroundColor:Colors.secondary,
    marginVertical: 20,
    marginHorizontal:24,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  titleSection:{
    marginHorizontal:24,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  musicCircle:{
    width:42,
    height:42,
    borderRadius:42,
    backgroundColor:Colors.secondary,
    alignItems:'center',
    justifyContent:'center',
  },
  favoriteItemView:{
    flexDirection:'row',
    marginVertical:10,
    marginHorizontal:24,
    justifyContent:'space-between',
    alignItems:'flex-start',
  },
  bottomSection:{
    marginHorizontal:24,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:50,
    right:5,
    left:5,
    zIndex:1,
    backgroundColor:'transparent'

  },
});

export default Library