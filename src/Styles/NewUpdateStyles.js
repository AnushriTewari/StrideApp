import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerView: {
        backgroundColor: 'white',
        flex: .6,
        width: w * .8,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        elevation: 2
    },
    headerText: {
        ...ifIphoneX({ fontSize: h * 0.0235, }, { fontSize: h * 0.025, }),
        color: '#44859e',
        alignSelf: 'center'
    },
    ButtonView: {
        height: h * 0.075,
        width: w * 0.59,
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewNotificationText: {
        color: 'white',
        fontSize: h * 0.03,
        fontWeight: 'bold'
    },
    space: {
        flex: .2
    },
    NotificationImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdownText: {
        color: 'black',
        fontSize: h * 0.025,
        borderColor: 'black',
        borderWidth: .5,
        padding: '4%'
    },
    dropdownMode: {
        width: w * 1,
        backgroundColor: 'white',
        width: w * .69
    },
    dropText: {
        color: '#f89e59',
        fontSize: h * .02
    },
    boardStyle: {
        width: w * .75,
        borderColor: 'black',
        borderWidth: .1
    },
    textInputStyle: {
        ...ifIphoneX({ height: h * .26, }, { height: h * .3, }),
        ...ifIphoneX({ width: w * .66 }, { width: w * .75 }),
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: .5,
        padding: '2%',
        paddingLeft: '3%',
        backgroundColor: 'white'
    },
    notificationview: {
        ...ifIphoneX({ height: h * .06, }, { height: h * .07, }),
        backgroundColor: '#3c84a8',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageStyles: {
        ...ifIphoneX({ height: h * 0.0317, }, { height: h * 0.035, }),
        ...ifIphoneX({ width: w * .046 }, { width: w * .044 }),

    },
    newUpdateText: {
        color: 'white',
        ...ifIphoneX({ fontSize: h * 0.026, }, { fontSize: h * 0.03, }),
        fontWeight: '500'
    },
    newUpdateView: {
        justifyContent: 'center',
        paddingLeft: '3%'
    },
    container: {
        ...ifIphoneX({ height: h  }, { height: (Platform.OS === 'ios') ? (h + (h * 0.5)) : h, }),

        backgroundColor: 'white',
    },
    secondView: {
        ...ifIphoneX({ height: h * 0.15, }, { height: h * 0.15, }),
        backgroundColor: 'white'
    },
    textInputView: {
        ...ifIphoneX({ height: h * 0.32, }, { height: h * 0.32, }),
        backgroundColor: 'white',
    },
    sendUpdateView: {
        ...ifIphoneX({ height: h * 0.31, }, { height: h * 0.31, }),
        alignItems: 'center',
        backgroundColor: 'white'
    },
    sendUpdate: {
        ...ifIphoneX({ height: h * 0.071, }, { height: h * 0.075, }),
        ...ifIphoneX({ width: w * 0.54, }, { width: w * 0.59, }),
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendUpdateText: {
        color: 'white',
        ...ifIphoneX({ fontSize: h * 0.026, }, { fontSize: h * 0.03, }),
        fontWeight: 'bold'
    }

})