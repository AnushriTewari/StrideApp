import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');
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
      <KeyboardAwareScrollView contentContainerStyle={styles.maincontainer}>
        <View style={styles.maincontainer}>
          <View style={styles.container}>
            <Image source={require("../../../Image/logo.png")}></Image>
          </View>
          <View style={styles.secview}>
            <Image source={require('../../../Image/bg@4x.png')} style={styles.bgImage}>
              <View style={styles.thistextView}>
                <View style={styles.textview}>
                  <Text style={styles.mainText}>ON THE GO</Text>
                  <Text style={styles.mainText}>Fundraising</Text>
                </View>
                <View style={styles.sectxt}>
                  <Text style={styles.sectext}>READY.SET.WALK.</Text>
                </View>
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
                      onChangeText={(email) => this.setState({ email: email, disable: false, blur: 1, logButtonColor: "#d38b3f", blur: 1})}
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
                      onChangeText={(text) => {this.setState({ password: text }) }}
                      style={styles.main}
                      value={this.state.password}>Password</FloatingLabel>
                  </View>
                </View>
              </View>
              <View style={[styles.loginview,{opacity: this.state.blur}]}>
                <TouchableOpacity
                  disabled={this.state.disable}
                  onPress={() => Actions.intro1()} style={styles.login}>
                  <Text style={[styles.logintext,{color: this.state.logButtonColor}]}>LOGIN</Text>
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

const styles = StyleSheet.create({
   maincontainer: {
    height: h * 0.97,
    backgroundColor: 'white'
  },
   container: {
     flex: 0.1,
     justifyContent: 'center',
     marginLeft: '5%'
  },
   bgImage:{
     width: w,   
     height: h * 0.8
  },
   thistextView:{
    height: h * 0.3,
     backgroundColor: 'transparent' 
  },
   textview:{
     flex: 0.7,
     justifyContent: 'center',
     alignItems: 'center' 
  },
   mainText:{
     color: 'white',
     fontSize: 40,
     fontStyle: 'italic'
  },
    sectxt:{
      flex: 0.2,
      paddingBottom: '2%'
  },
   sectext:{
     textAlign: 'center', 
     color: 'white',
     fontSize: w * 0.055, 
     fontWeight: "400" 
  },
  secview:{
    flex: 0.8 
  },
  nextview:{
    height: h * 0.25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center' 
},
  userview:{
    flex: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginHorizontal: '3%' 
},
  userview2:{
     flex: 0.1,
     marginLeft: "4%",
     justifyContent: 'center',
     alignItems: "flex-end" 
},
  username:{
     flex: 0.9,
     justifyContent: 'center', 
     marginRight: "4%"
},
   password:{
     flex: 0.5,
     flexDirection: 'row',
     borderBottomWidth: 1,
     borderBottomColor: 'white',
     marginBottom: '5%',
     marginHorizontal: '3%' 
},
   password2:{
      flex: 0.7,
      justifyContent: 'center',
      marginRight: "4%"
},
   loginview:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "transparent"
   },
   login:{
      height: h * 0.07,
      width: w * 0.55,
      backgroundColor: '#f5f5f5',
      borderRadius: 30,
      justifyContent: 'center',
      marginTop: "4%"
   },
    logintext:{
      textAlign: 'center',
      fontSize: w * 0.045,
      backgroundColor: 'transparent' 
   },
    input:{
      borderWidth: 0,
      color: 'white',
      fontSize: w * 0.04 
   },
    label:{
      color: '#BFCACF',
      fontSize: w * 0.035
   },
   
    signup:{
      height: h * 0.2,
      backgroundColor: "transparent",
      alignItems: 'center',
      paddingTop: '5%'
   },
    signuptext:{
       color: 'white',
       fontSize: w * 0.04
   },
    forgetpwdView:{
       flex: 0.1,
       backgroundColor: 'white',
       alignItems: 'center',
       justifyContent: 'center'
   },
   frgttext:{
      color: 'steelblue',
      fontSize: w * 0.034 
   }

})