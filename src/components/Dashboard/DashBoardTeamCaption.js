import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle'
import Swiper from 'react-native-swiper';
import styles from '../.././Styles/DashboardStyles';
import { bindActionCreators } from 'redux';
import { dashboardTeamCaptionData } from '../.././actions/listUserAction';
import { connect } from 'react-redux';

class DashboardTC extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dashboardTeamCaptionData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Reducers.dashboard_data) {
            console.log(nextProps.Reducers.dashboard_data)
            this.setState({ dashboardData: nextProps.Reducers.dashboard_data })
        }
    }

    render() {
        if (this.props.Reducers.dashboard_data) {
            const dashboardData = this.props.Reducers.dashboard_data

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
                                <Text style={styles.eventname}>{dashboardData.teamName}</Text>
                            </View>
                            <View style={styles.progressView}>
                                <ProgressCircle
                                    percent={dashboardData.percent}
                                    radius={70}
                                    borderWidth={12}
                                    color="#f89e59"
                                    shadowColor="#f5f5f5"
                                    bgColor="white"
                                >
                                    <Text style={styles.percent}>{dashboardData.percent}%</Text>
                                    <Text style={styles.percent}>to goal</Text>
                                </ProgressCircle>
                            </View>
                            <View style={styles.nextview}>
                                <Text style={styles.stats}>Goal: {dashboardData.goal}    |    Raised: {dashboardData.raised}</Text>
                                <Text style={styles.donornum}>Raised by 30 donors</Text>
                            </View>
                        </View>

                        <View style={styles.dashboardcontainer}>
                            <View style={styles.dashboardview}>
                                <Text style={styles.eventname}>{dashboardData.eventName}</Text>
                            </View>
                            <View style={styles.progressView}>
                                <ProgressCircle
                                    percent={dashboardData.percentEvent}
                                    radius={70}
                                    borderWidth={12}
                                    color="#f89e59"
                                    shadowColor="#f5f5f5"
                                    bgColor="white"
                                >
                                    <Text style={styles.percent}>{dashboardData.percentEvent}%</Text>
                                    <Text style={styles.percent}>to goal</Text>
                                </ProgressCircle>
                            </View>
                            <View style={styles.nextview}>
                                <Text style={styles.stats}>Goal: {dashboardData.goalevent}    |    Raised: {dashboardData.raisedEvent}</Text>
                                <Text style={styles.donornum}>Raised by {dashboardData.eventDonorNo} donors</Text>
                            </View>
                        </View>
                    </Swiper>

                    <View style={styles.boardcontainer}>
                        <View style={styles.dashboardlink}>
                            <TouchableOpacity style={styles.donation} onPress={() => Actions.donation()}>
                                <View style={styles.icondashboard}>
                                    <Image source={require('../../Image/donation@2x.png')} style={styles.dashboardimg}></Image>
                                </View>
                                <View style={styles.boardview}>
                                    <Text style={styles.dashboardtext}>{dashboardData.donations}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.leaderboard} onPress={() => Actions.leaderboard()}>
                                <View style={styles.icondashboard}>
                                    <Image source={require('../../Image/leaderboard@2x.png')} style={styles.dashboardimg}></Image>
                                </View>
                                <View style={styles.boardview}>
                                    <Text style={styles.dashboardtext}>{dashboardData.leaderboard}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dashboardlink}>
                            <TouchableOpacity style={styles.team} onPress={() => Actions.team()}>
                                <View style={styles.icondashboard}>
                                    <Image source={require('../../Image/team@2x.png')} style={styles.dashboardimg}></Image>
                                </View>
                                <View style={styles.boardview}>
                                    <Text style={styles.dashboardtext}>{dashboardData.team}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.notification} onPress={() => Actions.notification()}>
                                <View style={styles.icondashboard}>
                                    <Image source={require('../../Image/notification@2x.png')} style={styles.notifiactionimg}></Image>
                                </View>
                                <View style={[styles.boardview, { justifyContent: 'flex-start' }]}>
                                    <Text style={styles.dashboardtext}>{dashboardData.notifications}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            )
        }
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>)
    }
}
const mapStateToProps = state => {
    return {
        Reducers: state.Reducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ dashboardTeamCaptionData }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardTC);


