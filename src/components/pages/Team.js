import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle';
import styles from '.././styles/Teamstyles';

const { height: h, width: w } = Dimensions.get("window");

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: 'Team Malone',
            percent: 25,
            goal: '$5,000',
            raised: '$1,250',
            data: [
                {
                    name: 'Bob',
                    contri: '$1250'

                },
                {
                    name: 'Alex',
                    contri: '$430'

                },
                {
                    name: 'Tom Hanks',
                    contri: '$1550'

                },
                {
                    name: 'Matt Smith',
                    contri: '$340'

                },
                {
                    name: 'Matt Smith',
                    contri: '$1240'

                },
                {
                    name: 'Bob',
                    contri: '$1250'

                },
                {
                    name: 'Tom Hanks',
                    contri: '$550'

                }, {
                    name: 'Matt Smith',
                    contri: '$250'

                }, {
                    name: 'Alex',
                    contri: '$1250'

                }, {
                    name: 'Tom Hanks',
                    contri: '$1250'

                },
            ]
        }
    }
    _keyExtractor = (item, index) => index;

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.mainview}>
                        <Image source={require('../../Image/team@2x.png')} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Team</Text>
                    </View>
                </View>
                <View style={styles.teamView}>
                    <View style={styles.team}>
                        <Text style={[{ color: "#3a6d89", fontSize: w * 0.055 }, styles.font]}>{this.state.teamName}</Text>
                    </View>
                    <View style={styles.progressview}>
                        <ProgressCircle
                            percent={this.state.percent}
                            radius={68}
                            borderWidth={11}
                            color="#f89e59"
                            shadowColor="#f5f5f5"
                            bgColor="white"
                        >
                            <Text style={styles.percent}>{this.state.percent}%</Text>
                            <Text style={styles.percent}>to goal</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.statsview}>
                        <Text style={styles.stats}>goal: {this.state.goal}    |    raised: {this.state.raised}</Text>
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
                            data={this.state.data}
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
        )
    }
}
