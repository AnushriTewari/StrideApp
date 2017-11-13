import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert, StatusBar
} from 'react-native';
const { height: h, width: w } = Dimensions.get('window');


 export default class Card extends Component{
     render(){
         return(
            <View style={{ flex: 1, backgroundColor: "#DCDCDC", flexDirection:'column', backgroundColor:"white"}}>
            <View style={{ flex: 0.5, height: h * 0.04, paddingTop: '4%' }}> 
              <Text style={{ color: "#2f658c", fontSize: w * 0.04, fontWeight: '400', textAlign: 'center' }}>{item.name}</Text>
             </View>
            <View style={{ felx: 0.5, height: h * 0.04 }}>
              <Text style={{ color: "#db9a55", fontSize: w * 0.035, fontWeight: '400', textAlign: 'center' }}>raised: ${item.contri}</Text>
             </View>
          </View>
         )
     }
 }