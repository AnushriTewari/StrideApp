import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    textlist: {
        color: 'steelblue',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0142 }, { fontSize: WINDOW_HEIGHT * 0.018 }),
        fontWeight: '500',
    },
    textlistTeam: {
        color: 'steelblue',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0142 }, { fontSize: WINDOW_HEIGHT * 0.018 }),
        fontWeight: '500',
        marginLeft: WINDOW_WIDTH * 0.075
    },
    textlistName: {
        color: 'steelblue',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0142 }, { fontSize: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.016 : WINDOW_HEIGHT * 0.018 }),
        fontWeight: '500',
        marginLeft: WINDOW_WIDTH * 0.075
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
    bottomView: {
        height: WINDOW_HEIGHT * .04,
        width: WINDOW_WIDTH,
        flexDirection: 'row',
        marginVertical: '1%'
    },
    headview: {
        flex: .05,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    heading: {
        color: 'black',
        fontSize: WINDOW_HEIGHT * 0.02,
        marginRight: '4%'
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    headingTeam: {
        color: 'black',
        fontSize: WINDOW_HEIGHT * 0.02,
    },
    container: {
        flex: .8,
        width: WINDOW_WIDTH,
        alignSelf: 'center'
    },
    incontain: {
        flex: .8,
        justifyContent: 'center',
        marginTop: '5%'
    },
    list: {
        flex: .8,
        paddingBottom: '4%'
    },
    mainheadtext: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.027 }, { fontSize: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.25 : WINDOW_HEIGHT * 0.03 }),

    },
    mainheadview: {
        flex: .72,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    img: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.025 }, { height: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.03 : WINDOW_HEIGHT * 0.03, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * .055 }, { width: (Platform.OS === 'iOS') ? WINDOW_WIDTH * 0.06 : WINDOW_WIDTH * .05 }),
    },
    imageiconview: {
        flex: .37,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    mainhead: {
        flex: .08,
        backgroundColor: '#F09F61',
        flexDirection: 'row'
    },
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    textname: {
        flex: .35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",

    },
    textteam: {
        flex: .31,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    phone: {
        flex: .34,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})