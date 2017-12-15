import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
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
        width: WINDOW_WIDTH * .8,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        elevation: 3
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    headerText: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0235, }, { fontSize: WINDOW_HEIGHT * 0.025, }),
        color: '#44859e',
        alignSelf: 'center'
    },
    buttonStyle: {
        height: 20,
        width: 20,
        backgroundColor: "transparent"
    },
    leftButtonView: {
        backgroundColor: 'white',
        width: WINDOW_WIDTH * 0.09,
        height: WINDOW_WIDTH * 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    ButtonView: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.06, }, { height: WINDOW_HEIGHT * 0.075, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * 0.51, }, { width: WINDOW_WIDTH * 0.59, }),
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewNotificationText: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.025 }, { fontSize: WINDOW_HEIGHT * 0.03, }),
        fontWeight: '600'
    },
    spaceup: {
        flex: .1,
    },
    space: {
        flex: .3,
    },
    NotificationImage: {
        justifyContent: 'center',
    },
    dropdownText: {
        color: 'black',
        fontSize: WINDOW_HEIGHT * 0.02,
        borderColor: 'black',
        borderWidth: .5,
        padding: '4%'
    },
    dropdownMode: {
        width: WINDOW_WIDTH * 1,
        backgroundColor: 'white',
        width: WINDOW_WIDTH * .69
    },
    dropText: {
        color: '#f89e59',
        fontSize: WINDOW_HEIGHT * .02
    },
    boardStyle: {
        width: WINDOW_WIDTH * .75,
        borderColor: 'black',
        borderWidth: .1,
        backgroundColor: 'white'
    },
    textInputStyle: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * .26, }, { height: WINDOW_HEIGHT * .3, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * .66 }, { width: WINDOW_WIDTH * .75 }),
        alignSelf: 'center',
        borderColor: 'grey',
        borderWidth: (Platform.OS === 'ios') ? 0.1 : 0.5,
        padding: '2%',
        paddingLeft: '3%',
        backgroundColor: 'white',
        fontSize: WINDOW_WIDTH * 0.04
    },
    notificationview: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * .06, }, { height: WINDOW_HEIGHT * .07, }),
        backgroundColor: '#3c84a8',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageStyles: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.0317, }, { height: WINDOW_HEIGHT * 0.035, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * .046 }, { width: WINDOW_WIDTH * .044 }),
    },
    newUpdateText: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026, }, { fontSize: WINDOW_HEIGHT * 0.03, }),
        fontWeight: '500'
    },
    newUpdateView: {
        justifyContent: 'center',
        paddingLeft: '3%'
    },
    container: {
        ...ifIphoneX({ height: WINDOW_HEIGHT }, { height: (Platform.OS === 'ios') ? (WINDOW_HEIGHT + (WINDOW_HEIGHT * 0.5)) : WINDOW_HEIGHT }),
        backgroundColor: 'white',
    },
    secondView: {
        height: WINDOW_HEIGHT * 0.15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputView: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.32, }, { height: WINDOW_HEIGHT * 0.32, }),
        backgroundColor: 'white',
    },
    sendUpdateView: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.31, }, { height: WINDOW_HEIGHT * 0.31, }),
        alignItems: 'center',
        backgroundColor: 'white'
    },
    sendUpdate: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.071, }, { height: WINDOW_HEIGHT * 0.075, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * 0.54, }, { width: WINDOW_WIDTH * 0.59, }),
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendUpdateText: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026, }, { fontSize: (Platform.OS === 'ios') ? WINDOW_HEIGHT * 0.027 : WINDOW_HEIGHT * 0.03, }),
        fontWeight: 'bold'
    }

})