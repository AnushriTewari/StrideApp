import React, { Component } from 'react';
import { Text, View } from "react-native";


export default class LeaderBoard extends Component {
    constructor(props) {
        super(props);
    }

  
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Under Development</Text>
            </View>

        )
    }
}