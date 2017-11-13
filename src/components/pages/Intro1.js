import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');

export default class Intro1 extends Component {
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
                  <View style={{ flex: 0.6 , alignItems:'center',justifyContent:'flex-end',paddingBottom:"5%"}}>
                      <Image source={ require('../../Image/access_event@1,5x.png')} style={{ width: w * 0.3,  height: w * 0.3}}></Image>
                  </View>
                  <View style={{ flex: 0.4 , alignItems:'center',justifyContent:'flex-start'}}>
                    <Text style={{ color: '#426387', fontSize: w * 0.05, fontWeight: "400" }}>Access event updates</Text>
                    <Text style={{ color: '#426387', fontSize: w * 0.05, fontWeight: "400" }}>from one place.</Text>
                  </View>
                </View>
                <View style={{ flex: 0.1 }}>
                  <TouchableOpacity >
                   <Text onPress={()=>Actions.dashboard()} style={{ textAlign:'center',fontSize: w * 0.045, color: "#d38b3f" }}>Skip Intro</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex:0.1,  backgroundColor: '#db9a55', justifyContent:'center', alignItems:'center' }}>
             <TouchableOpacity onPress={()=>Actions.intro2()}>
                <Text style={{ color: 'white',fontSize: w * 0.05 }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
       )
     }
   }
