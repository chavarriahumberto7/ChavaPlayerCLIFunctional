import { View, Text, StatusBar, StyleSheet, Dimensions,Image} from 'react-native'
import React from 'react'
import { Colors, Images,Fonts} from '../../Constants';
import {PlayButton} from '../../Components'


const {width,height} =Dimensions.get('window');



const Onboarding = ({navigation}) => {
  return (
    <View
    style={styles.container}
    >
      <StatusBar barStyle='light-content'/>

      <Image
      source={Images.logo}
      style={
        {
          width:width/3,
          height:width/3,
        }
      }
      
      />

      <Text style={styles.textH1}>
          The sound of Life
      </Text>
      
      <View style={{alignItems:'center'}}>
      <Text style={styles.textH2}>
      Music is an entertaiment, but also it is our life
      </Text>
      </View>

      
      <View style={{ marginTop:202}}>
        <PlayButton
        size={78} circle={70} icon={Images.right_arrow}
        onPress={()=> navigation.navigate('Library')}
        />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor: Colors.background,
    height,
    width,
    alignItems:'center',
    justifyContent:'center',
  },
  textH1:{
    color:Colors.primary,
    fontSize:24,
    marginTop:28,
    fontWeight:'bold'
  },
  textH2:{
    color:Colors.grey4,
    fontSize:16,
    marginTop:8,
    marginHorizontal:51,
    textAlign:'center',
    
    
  }
});

export default Onboarding