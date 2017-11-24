import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

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
    text: {
        color: 'white',
        fontSize: h * 0.03,
        fontWeight: '500'
    },
    progressview: {
        flex: 0.56,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    percent: {
        fontSize: w * 0.042,
        color: '#f89e59',
        fontWeight: '500'
    },
    stats: {
        color: "#f89e59",
        fontSize: w * 0.036,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: '4%'
    },
    donornum: {
        color: "#38383a",
        fontSize: w * 0.033,
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
        height: h * 0.1,
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
        height: h * 0.04,
        width: w * 0.4,
        backgroundColor: '#f5f5f5'
    },
    titleview: {
        flex: 0.06,
        backgroundColor: 'white'
    },
    teamtitle: {
        color: "#3a6d89",
        fontSize: w * 0.053,
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
        fontSize: h * 0.1,
        color: "#dcdcdc",
        paddingBottom: '19%'
    },
    dot: {
        borderWidth: 1,
        borderColor: '#dcdcdc'
    },
})