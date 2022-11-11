import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors} from '../../Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';




const start ={x:0,y:0};
const end={x:1,y:0};


const PlayButton = ({size,circle,icon,onPress}) => {


    const renderCircle=(style)=>{

      

       return( 
       <LinearGradient start={start} end={end} colors={Colors.linearGradient} size={size} circle={size} 
       style={{...style,
                width:circle?circle:70,
                height:circle?circle:70,
                borderRadius:circle?circle/2:70/2
                

             }}
       >
         

        </LinearGradient>)

    }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View 
    style={{...style.container,width:size?size:78,height:size?size:78}}
    >
        {renderCircle({
            
                opacity:0.5,
                position:'absolute',
                left:0,
                bottom:0,
                
                          
               
        })}
        {renderCircle(
            {
                opacity:0.5,
        position:'absolute',
        right:0,
        bottom:0,
            }
        )}
        {renderCircle({
            opacity:0.5,
            position:'absolute',
            top:0,
        })}


        {
            icon&&<Image
                        source={icon}
                        style={{
                            width:size?size*0.4:78*0.4,
                            height:size?size*0.4:78*0.4
                        }}
                    />
        }
    </View>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    }
})

export default PlayButton