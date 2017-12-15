import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    mainView: {
        height: WINDOW_HEIGHT* 0.96,
        backgroundColor: 'white',
        alignItems: 'center'
      },
      main:{
        flex:0.07
      },
      wrap: {
        flex: 0.068,
        justifyContent: 'center'
      },
      container: {
        flex: 0.9,
        width: WINDOW_WIDTH * 0.7,
        backgroundColor: 'white'
      },
      textstyle: {
        color: "#3a6d89",
        fontSize: WINDOW_WIDTH * 0.055,
        fontWeight: '500'
      },
      buttonview: {
        flex: 0.1,
        marginLeft:'4%'
      },
      logoutText: {
        borderColor: '#f89e59',
        borderWidth: 1.5,
      },
      logoutButtonView: {
        flex: 0.17,
        justifyContent: 'center',
        width: WINDOW_WIDTH * 0.5
      },
      logoutButton: {
        color: '#3a6d89',
        fontSize: WINDOW_WIDTH * 0.055,
        fontWeight: '400',
        textAlign: 'center',
        paddingVertical: '3%'
      },
      text:{
        color:'#44859e',
        marginTop:'3%',
        marginLeft:'3%'
      }

})