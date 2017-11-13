import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert,ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingLabel from 'react-native-floating-labels';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            phoneNo: '',
            emailValidated: false,
            passwordValidated: false,
            checked: false,
        };
    }


    render() {

        return (
            <KeyboardAwareScrollView contentContainerStyle={{ height: h * 0.96}}>
                <View style={{ height: h * 0.96 , backgroundColor: 'white' }}>
                <View style={{ flex: 0.1, justifyContent: 'center',marginLeft:'5%' }}>
                  <Image source={require("../../../Image/logo.png")}></Image>
                 </View>
                    <View style={{ flex: .77}}>
                        <Image
                            style={{ height: h * 0.77, width: w * 1, alignItems: 'center' }}
                            source={require('../../../Image/bg.png')} >
                            <View style={{ height: h * 0.2, width: w * 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: h * 0.03, backgroundColor: 'transparent', textAlign: 'center' }}>RESET.YOUR.PASSWORD</Text>
                            </View>

                            <View style={{ height: h * 0.3, width: w * 0.8, flexDirection: 'row', backgroundColor: 'rgba(0.9, 0, 0.8, 0.2)', justifyContent: 'center' }}>
                                <View style={{ height: h * 0.4, width: w * 0.8 }}>
                                    <View style={{ height: h * 0.1, width: w * 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: h * 0.022, backgroundColor: 'transparent' }}>Enter your Email and a link to reset</Text>
                                        <Text style={{ color: 'white', fontSize: h * 0.022, backgroundColor: 'transparent' }}>password will be sent to you.</Text>
                                    </View>
                                    <View style={{ height: h * 0.07, width: w * 0.7, borderBottomWidth: 1, borderColor: 'white', alignSelf: 'center' }}>
                                        <TextInput
                                            onChangeText={(email) => this.setState({ email })}
                                            value={this.state.email}
                                            placeholder='Type your email'
                                            placeholderTextColor='#BFCACF'
                                            style={{ color: 'orange', height: h * 0.08, width: w * 0.6 }}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={{ height: h * 0.12, width: w * 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ height: h * 0.075, width: w * 0.6, backgroundColor: 'white', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#db9a55', fontSize: h * 0.025 }}>RESET PASSWORD</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Image>
                    </View>
                    <View style={{ height: h * 0.1, justifyContent:'center',alignItems:'center' }}>
                        <TouchableOpacity style={{  justifyContent:'center',alignItems:'center' }}>
                            <Text onPress={() => Actions.login()} style={{ color: 'steelblue', fontSize: w * 0.034}}>Already have an Account?Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>


        )
    }
}