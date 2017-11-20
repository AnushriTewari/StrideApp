import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    maincontainer: {
        ...ifIphoneX({
          height: h
    
        }),
        height: (Platform.OS === 'ios') ? h : h * 0.965,
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
        width: w,
        // ...ifIphoneX({
        //   height: h * 0.75,
        // }, {
        height: h * 0.8,
        //}),
    
      },
      thistextView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: h * 0.3,
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
        fontSize: w * 0.055,
        fontWeight: "400"
      },
      secview: {
        flex: 0.8
      },
      nextview: {
        height: h * 0.25,
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
        height: h * 0.07,
        width: w * 0.55,
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: "4%"
      },
      logintext: {
        textAlign: 'center',
        fontSize: w * 0.045,
        backgroundColor: 'transparent'
      },
      input: {
        borderWidth: 0,
        color: 'white',
        fontSize: w * 0.04
      },
      label: {
        color: '#BFCACF',
        fontSize: w * 0.035
      },
    
      signup: {
        height: h * 0.2,
        backgroundColor: "transparent",
        alignItems: 'center',
        paddingTop: '5%'
      },
      signuptext: {
        color: 'white',
        fontSize: w * 0.04
      },
      forgetpwdView: {
        flex: 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
      frgttext: {
        color: 'steelblue',
        fontSize: w * 0.034
      }
  });