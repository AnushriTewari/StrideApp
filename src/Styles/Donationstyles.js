import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'


export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerview: {
        flex: .07,
        backgroundColor: '#f89e59',
        flexDirection: 'row'
    },
    imageview: {
        flex: .35,
        justifyContent: 'center',
        alignItems: 'flex-end',
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
    image: {
        ...ifIphoneX({  height: WINDOW_HEIGHT * 0.03, }, {   height: WINDOW_HEIGHT * 0.0345, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * .054 }, { width: WINDOW_WIDTH * .056 }),
     
    },
    titleview: {
        flex: .65,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    texthead: {
        color: 'white',
        fontSize: WINDOW_HEIGHT * 0.03,
        fontWeight: '500'
    },
    body: {
        flex: .8,
        width: WINDOW_WIDTH
    },
    flatlist: {
        flex: .8,
        justifyContent: 'center',
        marginTop: '10%'
    },
    listview: {
        height: WINDOW_HEIGHT * .03,
        width: WINDOW_WIDTH,
        flexDirection: 'row'
    },
    name: {
        flex: .4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '12%'
    },
    amount: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%'
    },
    date: {
        flex: .35,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: "15%"
    },
    nametext: {
        color: '#2f6884',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0145 }, { fontSize: WINDOW_HEIGHT * 0.018, }),
        fontWeight: '500'
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    bottomview: {
        flex: 0.05
    },
    amountcollected: {
        flex: .15,
        width: WINDOW_WIDTH * .7,
        alignSelf: 'center'
    },
    donornumberview: {
        flex: .6,
        alignItems: 'center',
        paddingTop: '3%',
        justifyContent: 'flex-start'
    },
    numberdonor: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.020 }, { fontSize:WINDOW_HEIGHT * 0.022, }),
        color: 'grey'
    },
    viewdiv: {
        flex: .45,
        alignItems: 'center'
    },
    statics: {
        color: '#f89e59',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.022 }, { fontSize: WINDOW_HEIGHT * 0.025, })
    },

})