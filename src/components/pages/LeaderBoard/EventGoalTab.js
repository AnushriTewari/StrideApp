import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from "react-native";
const { height: h, width: w } = Dimensions.get('window');
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import styles from '../.././styles/leaderBoardstyles';

const users = [
    {
        "id": 1,
        'TeamName': 'Mars-Star',
        'Cost': '$20,237'
    },
    {
        "id": 2,
        'TeamName': 'Mighthy-malory',
        'Cost': '$19,432'

    },
    {
        "id": 3,
        'TeamName': 'Team-Alex',
        'Cost': '$11,636'

    },
    {
        "id": 2,
        'TeamName': 'finn-and-friends',
        'Cost': '$10,232'

    },
    {
        "id": 2,
        'TeamName': 'Team-Athen',
        'Cost': '$8,685'

    },
]
export default class EventGoalTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabcolor: '#db9a55',
            LeaderBoard: true,
            Event: false,
            tabcolor1: 'steelblue',
            percent: 25,
            goal: '$1000000',
            raised: '$250,000'
        };
    }
    
    render() {
        return (
            <View style={styles.eventGoalmain}>
                            <View style={styles.heading}>
                                <Text style={styles.textheader}>Columbus Goal  </Text>
                            </View>
                            <View style={styles.progressView}>
                                <ProgressCircle
                                    percent={this.state.percent}
                                    radius={97}
                                    borderWidth={15}
                                    color="#f89e59"
                                    shadowColor="#DADADA"
                                    bgColor="#fff"
                                >
                                    <Text style={styles.percent}>{this.state.percent}%</Text>
                                    <Text style={styles.percent}>to Goal</Text>
                                </ProgressCircle>

                            </View>
                            <View style={styles.value}>
                                <View style={styles.stats}>
                                    <View style={styles.div}>
                                        <Text style={styles.textstats}>goal:{this.state.goal}</Text>
                                    </View>
                                    <View style={styles.divview}>
                                        <Text style={styles.textstats}>|</Text>
                                    </View>
                                    <View style={styles.div}>
                                        <Text style={styles.textstats}>raised:{this.state.raised}</Text>
                                    </View>
                                </View>
                                <View style={styles.donationview}>
                                    <Text style={styles.textdonor}>raised by 30 donors</Text>
                                </View>
                            </View>
            </View>

        );
    }
}