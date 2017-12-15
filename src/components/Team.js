import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle';
import styles from '.././styles/teamStyles';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { TeamPage } from '.././actions/teamAction';
import { connect } from 'react-redux';
const { height: h, width: w } = Dimensions.get("window");

class Team extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.TeamPage()
    }
        _keyExtractor = (item, index) => index;

        render() {
            if (this.props.TeamReducers.team_data) {
                const teamData = this.props.TeamReducers.team_data
                return (
                    <View style={styles.main}>
                        <View style={styles.container}>
                            <View style={styles.mainview}>
                                <Image source={require('../image/team@2x.png')} />
                            </View>
                            <View style={styles.textview}>
                                <Text style={styles.text}>Team</Text>
                            </View>
                        </View>
                        <Swiper showsButtons={true}
                            nextButton={<Text style={styles.swipertext}>›</Text>}
                            prevButton={<Text style={styles.swipertext}>‹</Text>}
                            showsPagination={true}
                            dotColor='transparent'
                            dotStyle={styles.dot}
                            activeDotColor="#dcdcdc"
                        >
                            <View style={{ flex: 0.91 }}>
                                <View style={styles.teamView}>
                                    <View style={styles.team}>
                                        <Text style={[{ color: "#3a6d89", fontSize: w * 0.055 }, styles.font]}>{teamData.teamName}</Text>
                                    </View>
                                    <View style={styles.progressview}>
                                        <ProgressCircle
                                            percent={teamData.percent}
                                            radius={68}
                                            borderWidth={11}
                                            color="#f89e59"
                                            shadowColor="#f5f5f5"
                                            bgColor="white"
                                        >
                                            <Text style={styles.percent}>{teamData.percent}%</Text>
                                            <Text style={styles.percent}>to goal</Text>
                                        </ProgressCircle>
                                    </View>
                                    <View style={styles.statsview}>
                                        <Text style={styles.stats}>goal: {teamData.goal}    |    raised: {teamData.raised}</Text>
                                        <Text style={styles.donornum}>raised by 30 donors</Text>
                                    </View>
                                </View>
                                <View style={styles.titleview}>
                                    <Text style={styles.teamtitle}>Team Activity</Text>
                                </View>
                                <View style={styles.listwrap}>
                                    <View style={styles.list}>
                                        <FlatList
                                            style={styles.list}
                                            data={teamData.data}
                                            keyExtractor={this._keyExtractor}
                                            numColumns={2}
                                            renderItem={({ item, index }) =>
                                                <View style={styles.listing}>
                                                    <View style={[styles.textlist, { paddingTop: '2%' }]}>
                                                        <Text style={[{ color: "#3a6d89", fontSize: w * 0.04 }, styles.font]}>{item.name}</Text>
                                                    </View>
                                                    <View style={styles.textlist}>
                                                        <Text style={[{ color: "#f89e59", fontSize: w * 0.035 }, styles.font]}>raised: ${item.contri}</Text>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.91 }}>
                                <View style={styles.teamView}>
                                    <View style={styles.team}>
                                        <Text style={[{ color: "#3a6d89", fontSize: w * 0.055 }, styles.font]}>{teamData.teamNameNext}</Text>
                                    </View>
                                    <View style={styles.progressview}>
                                        <ProgressCircle
                                            percent={teamData.percentNext}
                                            radius={68}
                                            borderWidth={11}
                                            color="#f89e59"
                                            shadowColor="#f5f5f5"
                                            bgColor="white"
                                        >
                                            <Text style={styles.percent}>{teamData.percentNext}%</Text>
                                            <Text style={styles.percent}>to goal</Text>
                                        </ProgressCircle>
                                    </View>
                                    <View style={styles.statsview}>
                                        <Text style={styles.stats}>goal: {teamData.goalNext}    |    raised: {teamData.raisedNext}</Text>
                                        <Text style={styles.donornum}>raised by 30 donors</Text>
                                    </View>
                                </View>
                                <View style={styles.titleview}>
                                    <Text style={styles.teamtitle}>Team Activity</Text>
                                </View>
                                <View style={styles.listwrap}>
                                    <View style={styles.list}>
                                        <FlatList
                                            style={styles.list}
                                            data={teamData.dataNext}
                                            keyExtractor={this._keyExtractor}
                                            numColumns={2}
                                            renderItem={({ item, index }) =>
                                                <View style={styles.listing}>
                                                    <View style={[styles.textlist, { paddingTop: '2%' }]}>
                                                        <Text style={[{ color: "#3a6d89", fontSize: w * 0.04 }, styles.font]}>{item.name}</Text>
                                                    </View>
                                                    <View style={styles.textlist}>
                                                        <Text style={[{ color: "#f89e59", fontSize: w * 0.035 }, styles.font]}>raised: ${item.contri}</Text>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </Swiper>
                    </View>
                )
            }
          return(
                <View style={styles.activityindicator}>
                    <ActivityIndicator/>
                    </View>
                    )
            }
        }
    const mapStateToProps = state => {
        return {
            TeamReducers: state.TeamReducers,
        };
    };
    const mapDispatchToProps = dispatch => {
        return bindActionCreators({ TeamPage }, dispatch);
    };
    export default connect(mapStateToProps, mapDispatchToProps)(Team);