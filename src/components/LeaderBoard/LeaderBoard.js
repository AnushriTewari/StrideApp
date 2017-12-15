import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProgressCircle from 'react-native-progress-circle';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LeaderBoardTab from './LeaderBoardTab';
import EventGoalTab from './EventGoalTab';
import { login } from '../.././actions/leaderboardAction';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import Swiper from 'react-native-swiper';
import styles from '../.././styles/leaderboardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { height: h, width: w } = Dimensions.get('window');

export default class LeaderBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageChange: true
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.imageView}>
                        <Image source={require('../.././image/leaderboardIcon.png')} style={styles.img} />
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
                    onChangeTab={() => { this.setState({ imageChange: !this.state.imageChange }) }}
                >
                    <LeaderBoardTab tabLabel="LEADERBOARD" />
                    <EventGoalTab tabLabel="EVENT GOAL" />
                </ScrollableTabView>
                {
                    this.state.imageChange
                        ?
                        <View style={[styles.left]}>
                            <View style={{ alignItems: 'center', paddingRight: '1%', backgroundColor: 'transparent' }}>
                                <Icon name="circle" size={10} color="#dcdcdc" />
                            </View>
                            <View style={{ paddingLeft: '1%', backgroundColor: 'transparent' }}>
                                <Icon name="circle-thin" size={9} color="grey" />
                            </View>
                        </View>
                        :
                        <View style={[styles.left]}>
                            <View style={{ alignItems: 'center', paddingRight: '1%', backgroundColor: 'transparent' }}>
                                <Icon name="circle-thin" size={9} color="grey" />
                            </View>
                            <View style={{ paddingLeft: '1%', backgroundColor: 'transparent' }}>
                                <Icon name="circle" size={10} color="#dcdcdc" />
                            </View>
                        </View>
                }
            </View>
        )
    }
}
