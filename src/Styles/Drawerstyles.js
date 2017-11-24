import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
    mainView: {
        height: h * 0.96,
        backgroundColor: 'white',
        alignItems: 'center'
      },
      main:{
        flex:0.1
      },
      wrap: {
        flex: 0.07,
        justifyContent: 'center'
      },
      container: {
        flex: 0.9,
        width: w * 0.7,
        backgroundColor: 'white'
      },
      textstyle: {
        color: "#3a6d89",
        fontSize: w * 0.055,
        fontWeight: '500'
      },
      buttonview: {
        flex: 0.15,
        marginLeft:'4%'
      },
      logoutText: {
        borderColor: '#f89e59',
        borderWidth: 1.5,
      },
      logoutButtonView: {
        flex: 0.17,
        justifyContent: 'center',
        width: w * 0.5
      },
      logoutButton: {
        color: '#3a6d89',
        fontSize: w * 0.055,
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