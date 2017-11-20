

import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LeaderBoardTab from './LeaderBoardTab';
import EventGoalTab from './EventGoalTab';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import Swiper from 'react-native-swiper';
import styles from '../.././styles/leaderBoardstyles';

export default class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabcolor: '#db9a55',
            LeaderBoard: true,
            Event: false,
            tabcolor1: 'steelblue',
            percent: 50,
            goal: '$1000000',
            raised: '$250,000'
        };
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.setState = ({
            tabcolor: "steelblue",
            tabcolor1: 'orange',
        })
        // alert(this.state.leaderBoardcolor);

    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.imageView}>
                        <Image source={require('../../../Image/leaderboard.png')} style={styles.img} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.texthead}>Leaderboard</Text>
                    </View>
                </View>
             
                <ScrollableTabView
                    style={styles.scrolltab}
                    tabBarActiveTextColor='#f89e59'
                    tabBarUnderlineStyle={styles.underline}
                    tabBarInactiveTextColor='#44859e'
                    tabBarTextStyle={styles.tabbartext}
                >
                    <LeaderBoardTab tabLabel="LEADERBOARD" />
                    <EventGoalTab tabLabel="EVENT GOAL" />
                </ScrollableTabView>
               
                <View style={styles.left}>
                    
                </View>
            </View>
        )
    }
}