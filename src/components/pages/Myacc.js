import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, FlatList, Image, TextInput, Alert, StatusBar
} from 'react-native';

export default class MyAccount extends Component {
    constructor(props) {
        super(props);

    }
   
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: '20' }}>Under Development</Text>
            </View>
        );
    }
}
