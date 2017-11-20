import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
    main: {
        height: (Platform.OS === 'ios') ? h : h * 0.965,
        backgroundColor: 'white'
    },
    imageView:{
         flex: 0.1, 
         justifyContent: 'center', 
         marginLeft: '5%' 
        },
    container:{
          flex: .78 
        },
    backgroundImage:{ 
            height: h * 0.78, 
            width: w * 1, 
            alignItems: 'center' 
        },
    resetView:{ 
        height: h * 0.2, 
        width: w * 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    resettext:{ 
        color: 'white', 
        fontSize: h * 0.03, 
        backgroundColor: 'transparent', 
        textAlign: 'center' 
    },
    lastView:{
         flex: 0.1,
         justifyContent: 'center',
         alignItems: 'center' 
    },
    textLast:{ 
        color: 'steelblue', 
        fontSize: w * 0.034 
    } 
  });