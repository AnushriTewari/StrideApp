import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');


export default class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            button: false,
            dropData: ['Columbus Buddy Walk Update', 'Team Amber', 'Columbus Buddy Walk Event', 'Stride'],
            index: 0
        };
    }

    onSelect(index, value) {
        console.log("dropdown", index, value);
    }

    onDropdown() {
        if(this.state.index==0){
            return(alert("please select"));
        }
    }
    render() {
      
        if (this.state.button === true) {
            return (<View style={{ flex: 1, marginTop: '30%', alignItems: 'center' }}>
                <View style={{ flex: .3, width: w * .8, justifyContent: 'space-around', alignItems: 'center', shadowOffset: { width: 2, height: 2, }, shadowColor: 'grey', shadowOpacity: 1.0, }}>
                    <Text style={{ fontSize: h * .025, color: 'steelblue', alignSelf: 'center' }}>Your Update has been Posted</Text>
                    <TouchableOpacity onPress={() => alert('under Dovelopment')}
                        style={{ height: h * 0.075, width: w * 0.59, backgroundColor: '#EF964D', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: 'bold' }}>View notification</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .7 }}>

                </View>
            </View>
            );
        }

        return (
           
            <View style={{ height:h}}>
                
                <View style={{ height: h*.07, backgroundColor: '#3c84a8', flexDirection: 'row' ,justifyContent:'center'}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../Image/notification.png')} style={{ height: h * 0.03, width: w * .05 }} />
                    </View>
                    <View style={{ justifyContent: 'center',paddingLeft:'3%' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: '500' }}>New Update</Text>
                    </View>
                </View>
                <View style={{ height: h * 0.15 }}>
                  <View style={{ flex: 0.8 , justifyContent: 'center', alignItems: 'center'}}> 
                    <ModalDropdown options={ this.state.dropData }
                        style={{ width: w * .75, borderColor: 'black', borderWidth: .1 }}
                        textStyle={{ color: 'black', fontSize: h * 0.025, borderColor: 'black', borderWidth: .5, padding: '4%' }}
                        defaultValue='Select Receipients '
                        dropdownStyle={{ width: w * 1, backgroundColor: 'white', width: w * .69 }}
                        dropdownTextStyle={{ color: '#EF964D', fontSize: h * .02 }}
                        onSelect={(index, value) => this.onSelect(index, value)}
                    />
                    </View>
                   
                </View>
                <View style={{ height:h* 0.32 }}>

                    <TextInput

                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        style={{ height: h * .3, width: w * .75, alignSelf: 'center', borderColor: 'black', borderWidth:.5, padding: '2%', paddingLeft: '3%' }}                       
                        textAlignVertical={'top'}
                        placeholder='Type update here...'
                        underlineColorAndroid={'transparent'}

                    />
                </View>
                <View style={{ height:h*.31, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ button: true })}
                        style={{ height: h * 0.075, width: w * 0.59, backgroundColor: '#EF964D', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: 'bold' }}>Send Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
          
        );
    }
}
