import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle'



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.6 }}>
                    <View style={{ flex: 0.1, backgroundColor: 'white', justifyContent: 'center' }}>
                        <Text style={{ color: "#2f658c", fontSize: w * 0.058, fontWeight: '400', textAlign: 'center' }}>{this.state.teamName}</Text>
                    </View>
                    <View style={{ flex: 0.3, backgroundColor: 'white', alignItems: 'center' }}>
                        <ProgressCircle
                            percent={this.state.percent}
                            radius={70}
                            borderWidth={12}
                            color="#db9a55"
                            shadowColor="#f5f5f5"
                            bgColor="white"
                        >
                            <Text style={{ fontSize: w * 0.042, color: '#db9a55', fontWeight: '500' }}>{this.state.percent}%</Text>
                            <Text style={{ fontSize: w * 0.042, color: '#db9a55', fontWeight: '500' }}>to goal</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{ flex: 0.25, justifyContent: 'flex-start', backgroundColor: 'white' }}>
                        <Text style={{ color: "#db9a55", fontSize: w * 0.036, fontWeight: '400', textAlign: 'center', paddingTop: '4%' }}>goal: {this.state.goal}    |    raised: {this.state.raised}</Text>
                        <Text style={{ color: "#38383a", fontSize: w * 0.033, fontWeight: '400', textAlign: 'center', paddingTop: '1%' }}>raised by 30 donors</Text>
                    </View>
                </View>

                <View style={{ flex: 0.4, flexDirection: 'column' }}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#db9a55' }} onPress={() => Actions.directory()}>
                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../../Image/directory@2x.png')} style={{ width: w * 0.07, height: w * 0.07 }}></Image>
                            </View>
                            <View style={{ flex: 0.4, alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}>{this.state.directory}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#54a9d3' }} onPress={() => Actions.leaderboard()}>
                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../../Image/leaderboard@2x.png')} style={{ width: w * 0.07, height: w * 0.07 }}></Image>
                            </View>
                            <View style={{ flex: 0.4, alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}>{this.state.leaderboard}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.55, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#2f6884' }} onPress={() => Actions.update()}>
                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../../Image/team@2x.png')} style={{ width: w * 0.06, height: w * 0.06 }}></Image>
                            </View>
                            <View style={{ flex: 0.4, alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}>{this.state.newUpdate}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#3c84a8' }} onPress={() => Actions.notification()}>
                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../../Image/notification@2x.png')} style={{ width: w * 0.05, height: w * 0.05 }}></Image>
                            </View>
                            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}>{this.state.notifications}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
