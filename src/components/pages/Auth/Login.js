import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
const { height: h, width: w } = Dimensions.get('window');
import styles from '../.././styles/loginstyles' 

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: true,
      logButtonColor: 'grey',
      blur: 0.4
    }
  }


  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.maincontainer}>
          <View style={styles.container}>
            <Image source={require("../../../Image/logo.png")}></Image>
          </View>
          <View style={styles.secview}>
            <Image source={require('../../../Image/bg@4x.png')} style={styles.bgImage}>
              <View style={styles.thistextView}>
                <Image source={require("../../../Image/onthego.png")} style={{}} ></Image>
              </View>
              <View style={styles.nextview}>
                <View style={styles.userview}>
                  <View style={styles.userview2}>
                    <Image source={require('../../../Image/others/user.png')} style={{ height: h * 0.03 }} />
                  </View>
                  <View style={styles.username}>
                    <FloatingLabel
                      labelStyle={styles.label}
                      inputStyle={styles.input}
                      underlineColorAndroid={'transparent'}
                      autoCorrect={false}
                      onChangeText={(email) => this.setState({ email: email, disable: false, blur: 1, logButtonColor: "#f89e59", blur: 1 })}
                      style={styles.main}
                      value={this.state.email}>Username or Email</FloatingLabel>
                  </View>
                </View>
                <View style={styles.password}>
                  <View style={styles.userview2}>
                    <Image source={require('../../../Image/others/locked-padlock.png')} style={{ height: h * 0.027 }} />
                  </View>
                  <View style={styles.password2}>
                    <FloatingLabel
                      password
                      labelStyle={styles.label}
                      inputStyle={styles.input}
                      underlineColorAndroid={'transparent'}
                      autoCorrect={false}
                      onChangeText={(text) => { this.setState({ password: text }) }}
                      style={styles.main}
                      value={this.state.password}>Password</FloatingLabel>
                  </View>
                </View>
              </View>
              <View style={[styles.loginview, { opacity: this.state.blur }]}>
                <TouchableOpacity
                  disabled={this.state.disable}
                  onPress={() => Actions.intro()} style={styles.login}>
                  <Text style={[styles.logintext, { color: this.state.logButtonColor }]}>LOGIN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signup}>
                <TouchableOpacity onPress={() => Actions.register()}>
                  <Text style={styles.signuptext}>Dont have an account? SignUp!</Text>
                </TouchableOpacity>
              </View>
            </Image>
          </View>
          <View style={styles.forgetpwdView}>
            <TouchableOpacity>
              <Text onPress={() => Actions.passwordReset()} style={styles.frgttext}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
