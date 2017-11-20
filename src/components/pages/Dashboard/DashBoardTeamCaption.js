import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle'
import Swiper from 'react-native-swiper';
import styles from '../.././styles/DashboardStyles'

export default class DashboardTC extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                donations: 'DONATIONS',
                leaderboard: 'LEADERBOARD',
                team: 'TEAM',
                notifications: 'NOTIFICATIONS',
                teamName: 'Team Malone',
                eventName: 'Columbus Buddy Walk',
                goal: '$5,000',
                goalevent: '$40,000',
                raisedEvent: '',
                raised: '$1,250',
                percent: 25,
                eventDonorNo: 300,

            }
    }
    render() {
        return (
            <View style={styles.dashboardmain}>
                <Swiper showsButtons={true}
                    nextButton={<Text style={styles.swipertext}>›</Text>}
                    prevButton={<Text style={styles.swipertext}>‹</Text>}
                    showsPagination={true}
                    dotColor='transparent'
                    dotStyle={styles.dot}
                    activeDotColor="#dcdcdc"
                >
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

                    <View style={styles.dashboardcontainer}>
                        <View style={styles.dashboardview}>
                            <Text style={styles.eventname}>{this.state.eventName}</Text>
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
                            <Text style={styles.stats}>Goal: {this.state.goalevent}    |    Raised: {this.state.raisedEvent}</Text>
                            <Text style={styles.donornum}>Raised by {this.state.eventDonorNo} donors</Text>
                        </View>
                    </View>
                </Swiper>

                <View style={styles.boardcontainer}>
                    <View style={styles.dashboardlink}>
                        <TouchableOpacity style={styles.donation} onPress={() => Actions.donation()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../../Image/donation@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.donations}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.leaderboard} onPress={() => Actions.leaderboard()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../../Image/leaderboard@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.leaderboard}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dashboardlink}>
                        <TouchableOpacity style={styles.team} onPress={() => Actions.team()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../../Image/team@2x.png')} style={styles.dashboardimg}></Image>
                            </View>
                            <View style={styles.boardview}>
                                <Text style={styles.dashboardtext}>{this.state.team}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notification} onPress={() => Actions.notification()}>
                            <View style={styles.icondashboard}>
                                <Image source={require('../../../Image/notification@2x.png')} style={styles.notifiactionimg}></Image>
                            </View>
                            <View style={[styles.boardview, { justifyContent: 'flex-start' }]}>
                                <Text style={styles.dashboardtext}>{this.state.notifications}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
