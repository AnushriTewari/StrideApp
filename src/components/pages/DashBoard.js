import React, { Component } from 'react';
import { View , Text, Dimensions, Image, TouchableOpacity} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
               <Text style={{ fontSize:'20'}}>Under Development</Text>
            </View>
        )
    }
}
