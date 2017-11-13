import React, { Component, PropTypes } from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions} from 'react-native'

import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');


export default class Drawer extends Component {

	render() {
		return (
			<View style={{ flex: 1, backgroundColor:'white', alignItems:'center' }}>

        <View style={{ flex: 0.1  }}></View>
        <View style={{ flex: 0.9, width : w * 0.7, backgroundColor:'white'}}>
        <View style={{ flex: 0.07, justifyContent:'center'}}>
			   <Text onPress={()=>Actions.donation()} style={{ color:"#2f6884", fontSize: w * 0.055, fontWeight:'500' }}>Donations</Text>
		  	</View>
        <View  style={{ flex: 0.07, justifyContent:'center' }}>
			   <Text onPress={()=>Actions.leaderboard()} style={{ color: "#2f6884", fontSize: w * 0.055, fontWeight:'500' }}>Leaderboard</Text>
		  	</View>
        <View  style={{ flex: 0.07, justifyContent:'center' }}>
			   <Text onPress={()=>Actions.team()} style={{ color: "#2f6884", fontSize: w * 0.055, fontWeight:'500' }}>Team</Text>
		  	</View>
        <View  style={{ flex: 0.07, justifyContent:'center' }}>
			   <Text onPress={()=>Actions.notification()} style={{color:"#2f6884", fontSize:w * 0.055, fontWeight:'500'}}>Notifications</Text>
		  	</View>
        <View  style={{ flex: 0.07, justifyContent:'center' }}>
			   <Text onPress={()=>Actions.myacc
           ()} style={{ color: "#2f6884", fontSize: w * 0.055, fontWeight: '500' }}>My Account</Text>
		  	</View>
        <View style={{ flex: 0.1 }}></View>
        <View style={{ flex: 0.22 , justifyContent:'center' }}>
          <TouchableOpacity onPress={()=>{alert("Under Development")}} style={{ borderColor: '#db9a55', borderWidth: 1.5, marginHorizontal: "10%" }}>
            <Text style={{ color: '#2f6884', fontSize: w * 0.055, fontWeight: '400', textAlign: 'center', paddingVertical: '3%' }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 }}>

        </View>
        </View>
      </View>
		)
	}
}
