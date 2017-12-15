import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import styles from '../.././styles/leaderboardStyles';
import { bindActionCreators } from 'redux';
import { LeaderBoardPage } from '../.././actions/leaderboardAction';
import { connect } from 'react-redux';
const { height: h, width: w } = Dimensions.get('window');

class EventGoalTab extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.LeaderBoardPage()
    }

    render() {
        if (this.props.LeaderboardReducers.leaderboard_data) {
            const leaderboard_data = this.props.LeaderboardReducers.leaderboard_data
            return (
                <View style={styles.eventGoalmain}>
                    <View style={styles.heading}>
                        <Text style={styles.textheader}>Columbus Goal  </Text>
                    </View>
                    <View style={styles.progressView}>
                        <ProgressCircle
                            percent={leaderboard_data.percent}
                            radius={97}
                            borderWidth={15}
                            color="#f89e59"
                            shadowColor="#DADADA"
                            bgColor="#fff"
                        >
                            <Text style={styles.percent}>{leaderboard_data.percent}%</Text>
                            <Text style={styles.percent}>to Goal</Text>
                        </ProgressCircle>

                    </View>
                    <View style={styles.value}>
                        <View style={styles.stats}>
                            <View style={styles.div}>
                                <Text style={styles.textstats}>goal:{leaderboard_data.goal}</Text>
                            </View>
                            <View style={styles.divview}>
                                <Text style={styles.textstats}>|</Text>
                            </View>
                            <View style={styles.div}>
                                <Text style={styles.textstats}>raised:{leaderboard_data.raised}</Text>
                            </View>
                        </View>
                        <View style={styles.donationview}>
                            <Text style={styles.textdonor}>raised by 30 donors</Text>
                        </View>
                    </View>
                </View>
            );
        }
        else {
            <View style={styles.activityindicator}>
                <ActivityIndicator />
            </View>
        }
    }
}
const mapStateToProps = state => {
    return {
        LeaderboardReducers: state.LeaderboardReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ LeaderBoardPage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(EventGoalTab);