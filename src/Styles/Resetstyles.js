import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    main: {
        height: (Platform.OS === 'ios') ? WINDOW_HEIGHT : WINDOW_HEIGHT * 0.965,
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
            height: WINDOW_HEIGHT * 0.8,
        }, {
                height: WINDOW_HEIGHT * 0.78,
            }),
        width: WINDOW_WIDTH * 1,
        alignItems: 'center'
    },
    resetView: {
        height: WINDOW_HEIGHT * 0.2,
        width: WINDOW_WIDTH * 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resettext: {
        color: 'white',
        ...ifIphoneX({
            fontSize: WINDOW_HEIGHT * 0.027,
        }, {
                fontSize: WINDOW_HEIGHT * 0.03,
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
        fontSize: WINDOW_WIDTH * 0.034
    },
    textStyle: { 
        color: 'white', 
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.019, }, { fontSize: WINDOW_HEIGHT * 0.022, }), 
            backgroundColor: 'transparent' 
        },
    textView: { 
        height: WINDOW_HEIGHT * 0.1, 
        width: WINDOW_WIDTH * 0.7, 
        justifyContent: 'center',
         alignItems: 'center' 
        },
    mainContainer: { 
        height: WINDOW_HEIGHT * 0.3, 
        width: WINDOW_WIDTH * 0.8, 
        flexDirection: 'row', 
        backgroundColor: 'rgba(0.9, 0, 0.8, 0.2)', 
        justifyContent: 'center' 
    },
    view: { 
        height: WINDOW_HEIGHT * 0.3, 
        width: WINDOW_WIDTH * 0.8 
    },
    textInputView: { 
        height: WINDOW_HEIGHT * 0.07, 
        width: WINDOW_WIDTH * 0.7, 
        borderBottomWidth: 1, 
        borderColor: 'white', 
        alignSelf: 'center' 
    },
    textInputStyles: { 
        color: 'orange', 
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.10 }, { height: WINDOW_HEIGHT * 0.08 }), 
        width: WINDOW_WIDTH * 0.6 
    },
    ResetPasswordView: { 
        height: WINDOW_HEIGHT * 0.12, 
        width: WINDOW_WIDTH * 0.8, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    ResetStyles: { 
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.06 }, { height: WINDOW_HEIGHT * 0.075 }), width: WINDOW_WIDTH * 0.6, 
        backgroundColor: 'white', 
        borderRadius: 40, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    ResetText: { 
        color: '#f89e59', 
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.020, }, 
            { fontSize: WINDOW_HEIGHT * 0.025 }) 
        },
});