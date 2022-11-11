import { View, Text,StyleSheet , Dimensions} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Constants';
import  Svg,{Circle,G,Path}  from 'react-native-svg';

const {width,height}= Dimensions.get('window');

const BottomBar = ( {children}) => {
  return (
    <View style={styles.container}>
      <View style={{
            width:42,
            height:84,
            backgroundColor:'transparent',
        }}></View>

        <View style={{
                height:84,
                justifyContent:'space-between'

            }}>

   

            <LinearGradient
            colors={Colors.linearGradient2}
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            style={{
                width:Number(width) -84 ,
                height:3,
                flexDirection:'row',
                justifyContent:'flex-start',
            }}
            />
            <LinearGradient
            colors={Colors.linearGradient2}
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            style={{
                width:Number(width) -84,
                height:3,
                flexDirection:'row',
                justifyContent:'flex-start',
            }}
            />

            <View style={{
                flexDirection:'row',
                justifyContent:'flex-end',
            }}>
                <View
                style={{
                    width:6,
                    height:6,
                    borderRadius:6,
                    backgroundColor:'#6A8CCC',
                    position:'relative',
                    bottom:-1.5,

                }}></View>
                <View style={{
                    width:Math.floor(width)-84-150,
                    height:3,
                    borderRadius:3,
                    alignSelf:'flex-end',
                    backgroundColor:`#ED1BA3`,
                }}>

                </View>
            </View>

                       
        </View>

        <Svg height={84} width={84}>
            <Circle
            cx={0}
            cy={42}
            r={40}
            stroke="#ED1BA3"
            strokeWidth={3}
            fill="transparent"
            >

            </Circle>

        </Svg>


        <View style={{
            marginVertical:7,
            marginHorizontal:7,
            width:Math.floor(width)-84+70,
            height:70,
            borderRadius:70,
            backgroundColor:Colors.secondary,
            position:'absolute',
            top:0,
            left:0.

        }}>
            {children}
        </View>




    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width: Math.floor(width),
        height:84,
        borderRadius:84,
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',

    }
})

export default BottomBar