import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, StyleSheet, Platform, ScrollView } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
const { height: h, width: w } = Dimensions.get('window');
import styles from '../.././styles/loginStyles';
import { bindActionCreators } from 'redux';
import { login } from '../.././actions/authAction/loginAction';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
      logButtonColor: 'grey',
      blur: 0.4,
      email: '',
      password: ''
    }
    this.login = this.login.bind(this);
  }

  login() {
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(data);
    Actions.intro();
  }

  render() {
    return (
      <KeyboardAwareScrollView
        { ...ifIphoneX({ scrollEnabled: false }, { scrollEnabled: true }) }
      >
        <View style={styles.maincontainer}>
          <View style={styles.container}>
            <Image source={require("../../image/logo.png")}></Image>
          </View>
          <View style={styles.secview}>
            <Image source={require('../../image/bg@4x.png')} style={styles.bgImage}>
              <View style={styles.thistextView}>
                <Image source={require("../../image/onthego.png")} style={{}} ></Image>
              </View>
              <View style={styles.nextview}>
                <View style={styles.userview}>
                  <View style={styles.userview2}>
                    <Image source={require('../../image/user.png')} style={{ height: h * 0.03 }} />
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
                    <Image source={require('../../image/locked-padlock.png')} style={{ height: h * 0.027 }} />
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
                  onPress={() => this.login()} style={styles.login}>
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
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    Reducers: state.Reducers,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);



