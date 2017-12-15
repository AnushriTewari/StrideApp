import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT , width: WINDOW_WIDTH } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  maincontainer: {
    height: (Platform.OS === 'ios') ? WINDOW_HEIGHT : WINDOW_HEIGHT * 0.965,
    backgroundColor: 'white'
  },
  container: {
    ...ifIphoneX({
      flex: 0.05,
    }, {
        flex: 0.1,
      }),
    justifyContent: 'center',
    marginLeft: '5%',
    ...ifIphoneX({
      marginTop: '10%',
    }, {
        marginTop: '0%',
      })
  },
  bgImage: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.8,
  },
  thistextView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: WINDOW_HEIGHT * 0.3,
    backgroundColor: 'transparent'
  },
  textview: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic'
  },
  sectxt: {
    flex: 0.2,
    paddingBottom: '2%'
  },
  sectext: {
    textAlign: 'center',
    color: 'white',
    fontSize: WINDOW_WIDTH * 0.055,
    fontWeight: "400"
  },
  secview: {
    flex: 0.8
  },
  nextview: {
    height: WINDOW_HEIGHT * 0.25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userview: {
    flex: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginHorizontal: '3%'
  },
  userview2: {
    flex: 0.1,
    marginLeft: "4%",
    justifyContent: 'center',
    alignItems: "flex-end"
  },
  username: {
    flex: 0.9,
    justifyContent: 'flex-start',
    marginRight: "4%"
  },
  password: {
    flex: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: '5%',
    marginHorizontal: '3%'
  },
  password2: {
    flex: 0.7,
    justifyContent: 'center',
    marginRight: "4%"
  },
  loginview: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "transparent"
  },
  login: {
    ...ifIphoneX({
      height: WINDOW_HEIGHT * 0.06,
    }, {
        height: WINDOW_HEIGHT * 0.07,
      }),
    width: WINDOW_WIDTH * 0.6,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: "4%"
  },
  logintext: {
    textAlign: 'center',
    fontSize: WINDOW_WIDTH * 0.045,
    backgroundColor: 'transparent'
  },
  input: {
    borderWidth: 0,
    color: 'white',
    fontSize: WINDOW_WIDTH * 0.04
  },
  label: {
    color: '#BFCACF',
    fontSize: WINDOW_WIDTH * 0.035
  },

  signup: {
    height: WINDOW_HEIGHT * 0.2,
    backgroundColor: "transparent",
    alignItems: 'center',
    paddingTop: '5%'
  },
  signuptext: {
    color: 'white',
    fontSize:WINDOW_WIDTH * 0.04
  },
  forgetpwdView: {
    flex: 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  frgttext: {
    color: 'steelblue',
    fontSize: WINDOW_WIDTH * 0.034
  }
});