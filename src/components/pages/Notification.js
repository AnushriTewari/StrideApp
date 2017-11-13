import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";


export default class Notification extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize:20 }}>Under Development</Text>
            </View>
        );
    }
}