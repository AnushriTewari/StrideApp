import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  leftButtonView:
  {
    backgroundColor: 'white',
    width: WINDOW_WIDTH * 0.09,
    height: WINDOW_WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttonStyle:
  {
    height: 20,
    width: 20,
  },
  navBarStyle:
  {
    backgroundColor: 'white',
    height: WINDOW_HEIGHT * 0.1,
  },
  titleImageStyle:
  {
    backgroundColor: 'white',
    marginLeft: (Platform.Os === 'ios') ? '0%' : "5%",
  },
})

















































