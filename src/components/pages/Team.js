import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, ScrollView ,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle';
// import Card from './Card';


const {height: h, width: w} = Dimensions.get("window");

export default class Team extends Component {
  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: '20' }}>Under Development</Text>
            </View>
        );
    }
}
