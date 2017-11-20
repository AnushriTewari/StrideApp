import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert, StyleSheet, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import FloatingLabel from 'react-native-floating-labels';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import DropDown, {
    Select,
    Option,
    OptionList,
} from 'react-native-selectme';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import styles from '../.././styles/registerstyles' 

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
        let data = [
            {
                value: 'Select a team to join',
            }, {
                value: 'Team Alex',
            }, {
                value: 'Team Amber',
            }, {
                value: 'Columbus Buddy Walk Event',
            }, {
                value: 'Stride',
            }];
        var leftText = data.name;
        return (
            <View style={styles.container1}>
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
                                        style={styles.textInputtext}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(lastname) => this.setState({ lastname })}
                                        value={this.state.lastname}
                                        placeholder='Lastname*'
                                        placeholderTextColor='#BFCACF'
                                        style={styles.textInputtext}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(Email) => this.setState({ Email })}
                                        value={this.state.Email}
                                        placeholder='Email*'
                                        placeholderTextColor='#BFCACF'
                                        style={styles.textnext}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(phoneNo) => this.setState({ phoneNo })}
                                        value={this.state.phoneNo}
                                        placeholder='PhoneNo*'
                                        placeholderTextColor='#BFCACF'
                                        style={styles.textnext}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.textinput}>
                                    <TextInput
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        placeholder='Password*'
                                        placeholderTextColor='#BFCACF'
                                        style={styles.textnext}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.dropdown}>
                                    <Dropdown
                                        data={data}
                                        itemColor="#f89e59"
                                        baseColor="white"
                                        style={{ color: '#f89e59' }}
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
            </View>

        )
    }
}
