import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image, TextInput, Alert, ScrollView, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
const { height: h, width: w  } = Dimensions.get('window');
import styles from '../.././styles/resetStyles';
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
            <KeyboardAwareScrollView
               { ...ifIphoneX( {scrollEnabled:false} , {scrollEnabled:true})}
            >
            <View style={styles.main}>
                <View style={styles.imageView}>
                    <Image source={require("../../image/logo.png")}></Image>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.backgroundImage}
                        source={require('../../image/bg.png')} >
                        <View style={styles.resetView}>
                            <Text style={styles.resettext}>RESET YOUR PASSWORD</Text>
                        </View>
                        <View style={styles.mainContainer}>
                            <View style={styles.view}>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>Enter your Email and a link to reset</Text>
                                    <Text style={styles.textStyle}>password will be sent to you.</Text>
                                </View>
                                <View style={styles.textInputView}>
                                    <TextInput
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                        placeholder='Type your email'
                                        placeholderTextColor='#BFCACF'
                                        style={styles.textInputStyles}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={styles.ResetPasswordView}>
                                    <TouchableOpacity style={styles.ResetStyles}>
                                        <Text style={styles.ResetText}>RESET PASSWORD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Image>
                </View>
                <View style={styles.lastView}>
                    <TouchableOpacity style={styles.lastView}>
                        <Text onPress={() => Actions.login()} style={styles.textLast}>Already have an Account?Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAwareScrollView>
        )
    }
}
