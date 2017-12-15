import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
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
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.0307 }, { fontSize: WINDOW_HEIGHT * .0347 }),
        ...ifIphoneX({ width: WINDOW_WIDTH * .040 }, { width: WINDOW_WIDTH * .044 }), 
    },
    headerText: {
        flex: .65,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    notification_text: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026 }, { fontSize: WINDOW_HEIGHT * 0.03 }),
        fontWeight: '500'
    },
    tabView: {
        ...ifIphoneX({ flex: .07 }, { flex: (Platform.OS === 'ios') ? .08 :.1 }),
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',

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
    tabText: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.023 }, { fontSize: WINDOW_HEIGHT * .027 }),
        ...ifIphoneX({ marginTop: '5%' }),
    },
    bar: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.046 }, { fontSize: WINDOW_HEIGHT * .05, }),
        color: '#44859e'
    },
    space: {
        ...ifIphoneX({ flex: .02 }, { flex: (Platform.OS === 'ios') ? 0.02 :.05, }),
        backgroundColor:'white'
    },
    flatListView: {
        backgroundColor: 'white',
        width: WINDOW_WIDTH * .97,
        shadowOffset: { width: 2 },
        shadowOpacity: 0.2,
    },
    mainView: {
        height: WINDOW_HEIGHT * .16,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    mainViewdonation: {
        height: WINDOW_HEIGHT * .13,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    eventHeaderView: {
        flex: .3,
        backgroundColor:"white",
        paddingTop: '6%',
        ...ifIphoneX({ paddingLeft: '2%' }, { paddingHorizontal: '3%' }),
 
    },
    textStyle: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * .016}, { fontSize: (Platform.OS === 'ios') ? WINDOW_HEIGHT * 0.019 : WINDOW_HEIGHT * .02 }),
        color: '#6990c0',
        fontWeight: 'bold'
    },
    textView: {
        alignItems: 'flex-start'
    },
    fontView: {
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * .0147 }, { fontSize:(Platform.OS === 'ios') ? WINDOW_HEIGHT * 0.017 : WINDOW_HEIGHT * .019 }),
    },
    dateTimeView: {
        flex: .25,
        alignItems: 'flex-start',
       justifyContent:'center'
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
        ...ifIphoneX({  flex: .5, }, {  flex: .55,}),
        paddingRight: '3%'
    },
    eventDescriptionView: {
        flex: .65,
        paddingRight: '2%'
    },
    imagelogo: {
        ...ifIphoneX({ height: WINDOW_HEIGHT * 0.023, }, { height: WINDOW_HEIGHT * 0.025, }),
        ...ifIphoneX({ width: WINDOW_WIDTH * 0.20 }, { width: WINDOW_WIDTH * 0.19 }),
    },
    newUpdateButtonView: {
        flex: .15,
        justifyContent: 'center'
    },
    onPressNewUpdate: {
        height: WINDOW_HEIGHT * 0.07,
        width: WINDOW_WIDTH * 0.59,
        backgroundColor: '#f89e59',
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUpdateStyles: {
        color: 'white',
        ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.023 }, { fontSize: WINDOW_HEIGHT * 0.027 }),
        fontWeight: '500'
    }
})