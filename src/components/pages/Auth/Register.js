import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert, StyleSheet
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
            value: 'Team Alex',
        }, {
            value: 'Team Amber',
        },{
            value: 'Columbus Buddy Walk Event',
        },{
            value: 'Stride',
        }];
        var leftText = data.name;
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container1}>
                <View style={styles.container1}>
                    <View style={styles.main}>
                        <Image
                            source={require('../../../Image/logo.png')} />
                    </View>
                    <View style={{ flex: 0.77 }}>
                        <Image
                            style={styles.img}
                            source={require('../../../Image/bg.png')} >
                            <View style={styles.nexttext}>
                                <Text style={styles.textfront}>READY.SET.SIGN.UP.</Text>
                            </View>
                            <View style={styles.registerview}>
                                <View style={styles.regview}>
                                    <Text style={styles.regtext}>Register*</Text>
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(firstName) => this.setState({ firstName })}
                                        value={this.state.firstName}
                                        placeholder='First name*'
                                        placeholderTextColor='#BFCACF'
                                        style={{ color: 'orange' }}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(lastname) => this.setState({ lastname })}
                                        value={this.state.lastname}
                                        placeholder='Lastname*'
                                        placeholderTextColor='#BFCACF'
                                        style={{ color: 'orange' }}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(Email) => this.setState({ Email })}
                                        value={this.state.Email}
                                        placeholder='Email*'
                                        placeholderTextColor='#BFCACF'
                                        style={{ color: 'orange' }}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(phoneNo) => this.setState({ phoneNo })}
                                        value={this.state.phoneNo}
                                        placeholder='PhoneNo*'
                                        placeholderTextColor='#BFCACF'
                                        style={{ color: 'orange' }}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        placeholder='Password*'
                                        placeholderTextColor='#BFCACF'
                                        style={{ color: 'orange' }}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.dropdown}>
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
                                <View style={styles.checkbox}>
                                    <CheckBox
                                        size={19}
                                        checked={this.state.checked}
                                        onClick={() => null}
                                        checkBoxColor='white'
                                    />
                                    <Text style={{ color: 'white' }}>Receive text notifications</Text>
                                </View>
                                <View style={styles.signview}>
                                    <TouchableOpacity style={styles.signtext}>
                                        <Text style={styles.signup}>SIGN UP</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </Image>
                        <View style={styles.loginview}>
                            <TouchableOpacity>
                                <Text onPress={() => Actions.login()} style={styles.accexists}>Already have an Account?Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>

        )
    }
}
const styles = StyleSheet.create({
    container1: {
        height: h * .96,
    },
    textinput: {
        height: h * 0.07,
        width: w * 0.8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
   
    img: {
        height: h * 0.77,
        width: w * 1,
        alignItems: 'center'
    },
    nexttext: {
        height: h * 0.07,
        justifyContent: 'center',
        width: w * 0.85
    },
    checkbox: {
        height: h * 0.05,
        width: w * 0.8,
        alignItems: 'center',
        marginTop: '2%',
        flexDirection: 'row'
    },
    dropdown: {
        height: h * 0.07,
        width: w * 0.8,
        justifyContent: 'flex-end'
    },
    signview: {
        height: h * 0.1,
        width: w * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signtext: {
        height: h * 0.075,
        width: w * 0.59,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginview: {
        flex: 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signup: {
        color: '#db9a55',
        fontSize: h * 0.03
    },
    accexists: {
        color: 'steelblue',
        fontSize: w * 0.034
    },
    textfront: {
        color: 'white',
        fontSize: h * 0.03,
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    registerview:{
        height: h * 0.65, 
        width: w * 0.85, 
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        alignItems: 'center'
    },
     regview:{
        alignItems: 'flex-end', 
        width: w * 0.7, 
        justifyContent: 'flex-start'
     },
     regtext:{
        color: 'white', 
        fontSize: h * 0.02 
     },
     main:{
        flex: 0.1,
         justifyContent: 'center',
          paddingLeft: '10%',
           backgroundColor: 'white' 
     } 
})