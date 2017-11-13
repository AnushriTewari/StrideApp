import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');

export default class Intro3 extends Component {
   constructor(props) {
     super(props);
     }


     render() {
       return (
         <View style={{ flex:1 }}>
            <View style={{ flex:0.1, flexDirection:'row' }}>
            </View>
            <View style={{ flex: 0.8 , flexDirection: 'column'}}>
                <View style={{ flex: 0.9 }}>
                  <View style={{ flex: 0.6 , alignItems:'center',justifyContent:'flex-end',paddingBottom:"5%" }}>
                      <Image source={ require('../../Image/donation@1,5x.png')}  style={{ width: w * 0.3,  height: w * 0.3}}></Image>
                  </View>
                  <View style={{ flex: 0.4 , alignItems:'center',justifyContent:'flex-start'}}>
                    <Text style={{ color: '#426387', fontSize: w * 0.05, fontWeight: "400"}}>Check out your latest </Text>
                    <Text style={{ color: '#426387', fontSize: w * 0.05, fontWeight: "400" }}>donations on your phone!</Text>
                  </View>
                </View>
                <View style={{ flex: 0.1 }}>
                  <TouchableOpacity >
                   <Text onPress={()=>Actions.dashboard()} style={{ textAlign:'center',fontSize: w * 0.045, color: "#d38b3f" }}>Skip Intro</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex:0.1,  backgroundColor: '#426387', justifyContent:'center', alignItems:'center' }}>
             <TouchableOpacity onPress={()=>Actions.dashboard()}>
                <Text style={{ color: 'white',fontSize: w * 0.05 }}>BEGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
       )
     }
   }
