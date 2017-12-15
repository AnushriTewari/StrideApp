import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    container1: {

        height: (Platform.OS === 'ios') ? WINDOW_HEIGHT : WINDOW_HEIGHT * 0.965,

    },
    main: {
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
    textinput: {
        height: WINDOW_HEIGHT * 0.07,
        width: WINDOW_WIDTH * 0.8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },

    img: {
        height: WINDOW_HEIGHT * 0.77,
        width: WINDOW_WIDTH * 1,
        alignItems: 'center'
    },
    nexttext: {
        height: WINDOW_HEIGHT * 0.07,
        justifyContent: 'center',
        width: WINDOW_WIDTH * 0.85
    },
    checkbox: {
        height: WINDOW_HEIGHT * 0.05,
        width: WINDOW_WIDTH * 0.8,
        alignItems: 'center',
        marginTop: '2%',
        flexDirection: 'row'
    },
    dropdown: {
        height: WINDOW_HEIGHT * 0.07,
        width: WINDOW_WIDTH * 0.8,
        justifyContent: 'flex-end'
    },
    signview: {
        height: WINDOW_HEIGHT * 0.1,
        width: WINDOW_WIDTH * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signtext: {
        ...ifIphoneX({
            height: WINDOW_HEIGHT * 0.06,
        }, {
                height: WINDOW_HEIGHT * 0.07,
            }),
        width: WINDOW_WIDTH * 0.6,
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
        ...ifIphoneX({
            fontSize: WINDOW_HEIGHT * 0.020,
        }, {
                fontSize: WINDOW_HEIGHT * 0.025
            })
    },
    accexists: {
        color: 'steelblue',
        fontSize: WINDOW_WIDTH * 0.034
    },
    textfront: {
        color: 'white',
        ...ifIphoneX({
            fontSize: WINDOW_HEIGHT * 0.027,
        }, {
                fontSize: WINDOW_HEIGHT * 0.03,
            }),
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    registerview: {
        height: WINDOW_HEIGHT * 0.65,
        width: WINDOW_WIDTH * 0.85,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center'
    },
    regview: {
        alignItems: 'flex-end',
        width: WINDOW_WIDTH * 0.7,
        justifyContent: 'flex-start'
    },
    regtext: {
        color: 'white',
        fontSize: WINDOW_HEIGHT * 0.02
    },

    textInputtext: {
        color: '#f89e59',
        height: WINDOW_HEIGHT * 0.06
    },
    textnext: {
        color: '#f89e59',
        height: WINDOW_HEIGHT * 0.07
    }
});