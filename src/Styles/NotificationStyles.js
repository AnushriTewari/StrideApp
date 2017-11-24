import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 0.1,
        backgroundColor: '#3c84a8',
        flexDirection: 'row'
    },
    imageView: {
        flex: .35,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    img: {
        ...ifIphoneX({ fontSize: h * 0.031 }, { fontSize: h * .035 }),
        ...ifIphoneX({ width: w * .040 }, { width: w * .044 }), 
    },
    headerText: {

        flex: .65,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    notification_text: {
        color: 'white',
        ...ifIphoneX({ fontSize: h * 0.026 }, { fontSize: h * 0.03 }),
        fontWeight: '500'
    },
    tabView: {
        ...ifIphoneX({ flex: .07 }, { flex: .1 }),
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabText: {
        ...ifIphoneX({ fontSize: h * 0.023 }, { fontSize: h * .027 }),
        ...ifIphoneX({ marginTop: '5%' }),
    },
    bar: {
        ...ifIphoneX({ fontSize: h * 0.046 }, { fontSize: h * .05, }),
        color: '#44859e'
    },
    space: {
        ...ifIphoneX({ flex: .02 }, { flex: .05, }),
    },
    flatListView: {
        backgroundColor: 'white',
        width: w * .97,
        shadowOffset: { width: 2 },
        shadowOpacity: 0.2,
    },
    mainView: {
        height: h * .16,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    eventHeaderView: {
        flex: .3,
        backgroundColor:"white",
        paddingTop: '10%',
        ...ifIphoneX({ paddingLeft: '2%' }, { paddingHorizontal: '5%' }),
 
    },
    textStyle: {
        ...ifIphoneX({ fontSize: h * .016 }, { fontSize: h * .02 }),
        color: '#6990c0',
        fontWeight: 'bold'
    },
    textView: {
        alignItems: 'flex-start'
    },
    fontView: {
        ...ifIphoneX({ fontSize: h * .016 }, { fontSize: h * .018 }),
    },
    dateTimeView: {
        flex: .25,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    events:{
        flex: .7,
        justifyContent: 'center'
    },
    donations: {
        flex: .7,
        justifyContent: 'center'
    },
    donationView: {
        ...ifIphoneX({  flex: .50, }, {  flex: .55,}),
        paddingRight: '3%'
    },
    eventDescriptionView: {
        flex: .65,
        paddingRight: '2%'
    },
    imagelogo: {
        ...ifIphoneX({ height: h * 0.023, }, { height: h * 0.025, }),
        ...ifIphoneX({ width: w * 0.20 }, { width: w * 0.19 }),
    },
    newUpdateButtonView: {
        flex: .15,
        justifyContent: 'center'
    },
    onPressNewUpdate: {
        height: h * 0.07,
        width: w * 0.59,
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUpdateStyles: {
        color: 'white',
        ...ifIphoneX({ fontSize: h * 0.023 }, { fontSize: h * 0.027 }),
        fontWeight: '500'
    }
})