import React, { Component } from 'react';
import {
    Text, 
    View,
    TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import FloatingLabel from 'react-native-floating-labels';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
import DropDown, {
    Select,
    Option,
    OptionList,
  } from 'react-native-selectme';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class Register extends Component {
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
            canada: ''
        };
    }
    

    render() {
        let data = [{
            value: 'Select a team to join',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];
        var leftText = data.name;
        return (
            <KeyboardAwareScrollView contentContainerStyle={{ height: h * .97 }}> 
            <View style={{ height: h * 0.97}}>
                <View style={{ flex: 0.1, justifyContent: 'center', paddingLeft: '10%', backgroundColor: 'white' }}>
                    <Image
                        source={require('../../Image/logo.png')} />
                </View>
                  <View style={{flex: 0.77 }}>
                    <Image
                        style={{ height: h * 0.77, width: w * 1, alignItems: 'center' }}
                        source={require('../../Image/bg.png')} >
                        <View style={{ height: h * 0.07, justifyContent: 'center', width: w * 0.85 }}>
                            <Text style={{ color: 'white', fontSize: h * 0.03, backgroundColor: 'transparent', textAlign: 'center' }}>READY.SET.SIGN.UP.</Text>
                        </View>
                        <View style={{ height: h * 0.65, width: w * 0.85, backgroundColor: 'rgba(0, 0, 0, 0.2)', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-end', width: w * 0.7, justifyContent: 'flex-start' }}>
                                <Text style={{ color: 'white', fontSize: h * 0.02 }}>Register*</Text>
                            </View>
                            <View style={{ height: h * 0.07, width: w * 0.8, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
                                <TextInput
                                    onChangeText={(firstName) => this.setState({ firstName })}
                                    value={this.state.firstName}
                                    placeholder='First name*'
                                    placeholderTextColor='#BFCACF'
                                    style={{ color: 'orange' }}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={{ height: h * 0.07, width: w * 0.8, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
                                <TextInput
                                    onChangeText={(lastname) => this.setState({ lastname })}
                                    value={this.state.lastname}
                                    placeholder='Lastname*'
                                    placeholderTextColor='#BFCACF'
                                    style={{ color: 'orange' }}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={{ height: h * 0.07, width: w * 0.8, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
                                <TextInput
                                    onChangeText={(Email) => this.setState({ Email })}
                                    value={this.state.Email}
                                    placeholder='Email*'
                                    placeholderTextColor='#BFCACF'
                                    style={{ color: 'orange' }}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={{ height: h * 0.075, width: w * 0.8, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
                                <TextInput
                                    onChangeText={(phoneNo) => this.setState({ phoneNo })}
                                    value={this.state.phoneNo}
                                    placeholder='PhoneNo*'
                                    placeholderTextColor='#BFCACF'
                                    style={{ color: 'orange' }}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={{ height: h * 0.07, width: w * 0.8, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
                                <TextInput
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder='Password*'
                                    placeholderTextColor='#BFCACF'
                                    style={{ color: 'orange' }}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={{ height: h * 0.07, width: w * 0.8, justifyContent: 'flex-end', }}>
                                <Dropdown
                                    data={data}
                                    itemColor="orange"
                                    baseColor="white"
                                    style={{ color: 'orange' }}
                                    IconStyle={{ color: 'white' }}
                                    dropdownPosition={0}
                                    selectedIndex={0}
                                />
                       
                            </View>
                            <View style={{ height: h * 0.05, width: w * 0.8, alignItems: 'center', marginTop: '2%', flexDirection: 'row' }}>
                                <CheckBox
                                    size={19}
                                    checked={this.state.checked}
                                    onClick={() => alert('Selected')}
                                    checkBoxColor='white'
                                />
                                <Text style={{ color: 'white' }}>Receive text notifications</Text>
                            </View>
                            <View style={{ height: h * 0.1, width: w * 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ height: h * 0.075, width: w * 0.59, backgroundColor: 'white', borderRadius: 40,justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#db9a55', fontSize: h * 0.03 }}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </Image>
                <View style={{flex: 0.1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ }}>
                        <Text onPress={() => Actions.login()} style={{ color: 'steelblue', fontSize: w * 0.034 }}>Already have an Account?Sign In</Text>
                    </TouchableOpacity>
                 </View>
               </View>
            </View>
            </KeyboardAwareScrollView>

        )
    }
}