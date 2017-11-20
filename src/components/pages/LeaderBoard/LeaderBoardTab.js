import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
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
        "id": 4,
        'TeamName': 'finn-and-friends',
        'Cost': '$10,232'

    },
    {
        "id": 5,
        'TeamName': 'Team-Athen',
        'Cost': '$82,685'

    },
    {
        "id": 6,
        'TeamName': 'Team-Athen',
        'Cost': '$38,650'

    },
    {
        "id": 7,
        'TeamName': 'Mighthy-malory',
        'Cost': '$44,643'

    },
    {
        "id": 8,
        'TeamName': 'Mars-Star',
        'Cost': '$23,444'

    },
    {
        "id": 9,
        'TeamName': 'Team-Athen',
        'Cost': '$6,685'

    },
    {
        "id": 10,
        'TeamName': 'Mars-Star',
        'Cost': '$33,324'

    },
]

export default class LeaderBoardTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabcolor: '#db9a55',
            LeaderBoard: true,
            Event: false,
            tabcolor1: 'steelblue',
            percent: 50,
            goal: '$1000000',
            raised: '$250,000'
        };

    }
    
    render() {
        return (
            <View style={styles.leaderboardmain}>
                        <View style={styles.container}>
                            <View style={styles.title}>
                                <Text style={styles.leaderboardtext}>Columbus Leaderboard  </Text>
                            </View>
                            <View style={styles.leaderboardlist}>
                                <FlatList
                                    data={users}
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
}
