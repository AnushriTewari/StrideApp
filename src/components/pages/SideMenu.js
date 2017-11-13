import React, { Component, PropTypes } from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'

import { Actions } from 'react-native-router-flux';
// import DismissKeyboard from 'react-native-dismiss-keyboard';
// import Icon from 'react-native-vector-icons/FontAwesome';





export default class SideMenu extends Component {
	
	render() {
		const { drawer } = this.context;
		return (
			<View style={{backgroundColor:'red'}}>
			 
			</View>
		)
	}
}

SideMenu.propTypes = {
	drawer: PropTypes.object
}
