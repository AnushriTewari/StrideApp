import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from '.././styles/progressstyles';


export default class Notification extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View style={styles.underdevelopement}>
                <Text style={styles.text}>Under Development</Text>
            </View>
        );
    }
}