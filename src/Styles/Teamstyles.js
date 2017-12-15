import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    main: {
        flex: 1, backgroundColor: 'white'
    },
    container: {
        flex: 0.09,
        flexDirection: 'row',
        backgroundColor: '#3a6d89'
    },
    mainview: {
        flex: 0.44,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textview: {
        flex: 0.55,
        justifyContent: 'center',
        paddingLeft: '2%'
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    text: {
        color: 'white',
        fontSize: WINDOW_HEIGHT * 0.03,
        fontWeight: '500'
    },
    progressview: {
        flex: 0.56,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    percent: {
        fontSize: WINDOW_WIDTH * 0.042,
        color: '#f89e59',
        fontWeight: '500'
    },
    stats: {
        color: "#f89e59",
        fontSize: WINDOW_WIDTH * 0.036,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: '4%'
    },
    donornum: {
        color: "#38383a",
        fontSize: WINDOW_WIDTH * 0.033,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: '2%',
        textDecorationLine: 'underline'
    },
    listwrap: {
        flex: 0.40,
        paddingBottom: "2%"
    },
    listing: {
        flex: 1,
        height: WINDOW_HEIGHT * 0.1,
        flexDirection: 'column',
        paddingVertical: '2%',
        alignItems: "center"
    },
    list: {
        flex: 1,
        backgroundColor: 'white'
    },
    statsview: {
        flex: 0.3,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    textlist: {
        height: WINDOW_HEIGHT * 0.04,
        width: WINDOW_WIDTH * 0.4,
        backgroundColor: '#f5f5f5'
    },
    titleview: {
        flex: 0.06,
        backgroundColor: 'white'
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
    teamtitle: {
        color: "#3a6d89",
        fontSize: WINDOW_WIDTH * 0.053,
        fontWeight: '400',
        textAlign: 'center'
    },
    font: {
        fontWeight: '400',
        textAlign: 'center'
    },
    teamView: {
        flex: 0.52,
        backgroundColor: 'white'
    },
    team: {
        flex: 0.14,
        justifyContent: 'center'
    },
    swipertext: {
        fontSize: WINDOW_HEIGHT * 0.1,
        color: "#dcdcdc",
        paddingBottom: '45%'
    },
    dot: {
        borderWidth: 1,
        borderColor: '#dcdcdc'
    },
})