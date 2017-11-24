import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    main: {
        height: (Platform.OS === 'ios') ? h : h * 0.965,
        backgroundColor: 'white'
    },
    imageView: {
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
    container: {
        ...ifIphoneX({
            flex: .8
        }, {
                flex: .78
            }),

    },
    backgroundImage: {
        ...ifIphoneX({
            height: h * 0.8,
        }, {
                height: h * 0.78,
            }),
        width: w * 1,
        alignItems: 'center'
    },
    resetView: {
        height: h * 0.2,
        width: w * 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resettext: {
        color: 'white',
        ...ifIphoneX({
            fontSize: h * 0.027,
        }, {
                fontSize: h * 0.03,
            }),
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    lastView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLast: {
        color: 'steelblue',
        fontSize: w * 0.034
    },
    textStyle: { 
        color: 'white', 
        ...ifIphoneX({ fontSize: h * 0.019, }, { fontSize: h * 0.022, }), 
            backgroundColor: 'transparent' 
        },
    textView: { 
        height: h * 0.1, 
        width: w * 0.7, 
        justifyContent: 'center',
         alignItems: 'center' 
        },
    mainContainer: { 
        height: h * 0.3, 
        width: w * 0.8, 
        flexDirection: 'row', 
        backgroundColor: 'rgba(0.9, 0, 0.8, 0.2)', 
        justifyContent: 'center' 
    },
    view: { 
        height: h * 0.3, 
        width: w * 0.8 
    },
    textInputView: { 
        height: h * 0.07, 
        width: w * 0.7, 
        borderBottomWidth: 1, 
        borderColor: 'white', 
        alignSelf: 'center' 
    },
    textInputStyles: { 
        color: 'orange', 
        ...ifIphoneX({ height: h * 0.10 }, { height: h * 0.08 }), 
        width: w * 0.6 
    },
    ResetPasswordView: { 
        height: h * 0.12, 
        width: w * 0.8, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    ResetStyles: { 
        ...ifIphoneX({ height: h * 0.06 }, { height: h * 0.075 }), width: w * 0.6, 
        backgroundColor: 'white', 
        borderRadius: 40, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    ResetText: { 
        color: '#f89e59', 
        ...ifIphoneX({ fontSize: h * 0.020, }, 
            { fontSize: h * 0.025 }) 
        },
});