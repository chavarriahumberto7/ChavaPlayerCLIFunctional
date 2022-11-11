import { View, Text, Button, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import { Colors } from '../../Constants';


const {width,height} =Dimensions.get('window');



const Library = ({navigation}) => {
  return (
    <View
    style={styles.container}
    >
     <Button
     title='player'
     onPress={()=> navigation.navigate('Player')}
     />
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
});

export default Library