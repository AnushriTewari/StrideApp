import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet, ActivityIndicator } from "react-native";
const { height: h, width: w } = Dimensions.get('window');
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import styles from '../.././styles/leaderboardStyles';
import { bindActionCreators } from 'redux';
import { LeaderBoardPage } from '../.././actions/leaderboardAction';
import { connect } from 'react-redux';

class LeaderBoardTab extends Component {
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
                <View style={styles.leaderboardmain}>
                    <View style={styles.container}>
                        <View style={styles.title}>
                            <Text style={styles.leaderboardtext}>Columbus Leaderboard  </Text>
                        </View>
                        <View style={styles.leaderboardlist}>
                            <FlatList
                                data={leaderboard_data.users}
                                renderItem={({ item, key }) =>
                                    <View style={styles.listview}>
                                        <View style={styles.space}>
                                        </View>
                                        <View style={styles.cost}>
                                            <Text style={styles.textname}>{item.TeamName}</Text>
                                        </View>
                                        <View style={styles.cost}>
                                            <Text style={styles.textname}>{item.Cost}</Text>
                                        </View>
                                    </View>
                                } />
                        </View>
                    </View>
                    <View style={styles.space}>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.activityindicator}>
                <ActivityIndicator />
            </View>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardTab);





















































