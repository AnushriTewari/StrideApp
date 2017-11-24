import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle'
import styles from '../.././Styles/DashboardStyles'


export default class DashboardEC extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                directory: 'DIRECTORY',
                leaderboard: 'LEADERBOARD',
                newUpdate: 'NEW UPDATE',
                notifications: 'NOTIFICATIONS',
                teamName: 'Team Malone',
                eventName: 'Columbus Buddy Walk',
                goal: '$5,000',
                raised: '$1,250',
                percent: 25,
                eventDonorNo: 300,

            }
    }
    render() {
        return (
            <View style={styles.dashboardmain}>
                <View style={styles.dashboardcontainer}>
                    <View style={styles.dashboardview}>
                        <Text style={styles.eventname}>{this.state.teamName}</Text>
                    </View>
                    <View style={styles.progressView}>
                        <ProgressCircle
                            percent={this.state.percent}
                            radius={70}
                            borderWidth={12}
                            color="#f89e59"
                            shadowColor="#f5f5f5"
                            bgColor="white"
                        >
                            <Text style={styles.percent}>{this.state.percent}%</Text>
                            <Text style={styles.percent}>to goal</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.nextview}>
                        <Text style={styles.stats}>Goal: {this.state.goal}    |    Raised: {this.state.raised}</Text>
                        <Text style={styles.donornum}>Raised by 30 donors</Text>
                    </View>
                </View>

                <View style={styles.boardcontainer}>
                    <View style={styles.dashboardlink}>
                        <TouchableOpacity style={styles.donation} onPress={() => Actions.directory()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../Image/directory@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.directory}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.leaderboard} onPress={() => Actions.leaderboard()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../Image/leaderboard@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.leaderboard}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dashboardlink}>
                        <TouchableOpacity style={style.team} onPress={() => Actions.update()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../Image/team@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.newUpdate}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notification} onPress={() => Actions.notification()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../Image/notification@2x.png')} style={styles.notifiactionimg}></Image>
                            </View>
                            <View style={[styles.boardview ,{justifyContent: 'flex-start' }]}>
                                <Text style={styles.dashboardtext}>{this.state.notifications}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
