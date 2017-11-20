import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    container1: {
        height: (Platform.OS === 'ios') ? h : h * 0.965,

    },
    textinput: {
        height: h * 0.07,
        width: w * 0.8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },

    img: {
        height: h * 0.77,
        width: w * 1,
        alignItems: 'center'
    },
    nexttext: {
        height: h * 0.07,
        justifyContent: 'center',
        width: w * 0.85
    },
    checkbox: {
        height: h * 0.05,
        width: w * 0.8,
        alignItems: 'center',
        marginTop: '2%',
        flexDirection: 'row'
    },
    dropdown: {
        height: h * 0.07,
        width: w * 0.8,
        justifyContent: 'flex-end'
    },
    signview: {
        height: h * 0.1,
        width: w * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signtext: {
        height: h * 0.075,
        width: w * 0.59,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginview: {
        flex: 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signup: {
        color: '#f89e59',
        fontSize: h * 0.03
    },
    accexists: {
        color: 'steelblue',
        fontSize: w * 0.034
    },
    textfront: {
        color: 'white',
        fontSize: h * 0.03,
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    registerview: {
        height: h * 0.65,
        width: w * 0.85,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center'
    },
    regview: {
        alignItems: 'flex-end',
        width: w * 0.7,
        justifyContent: 'flex-start'
    },
    regtext: {
        color: 'white',
        fontSize: h * 0.02
    },
    main: {
        flex: 0.1,
        justifyContent: 'center',
        paddingLeft: '10%',
        backgroundColor: 'white'
    },
    textInputtext: {
        color: '#f89e59',
        height: h * 0.06
    },
    textnext: {
        color: '#f89e59',
        height: h * 0.07
    }
  });