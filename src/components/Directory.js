import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');
import styles from '.././Styles/Directorystyles'



const users = [
    {
        "id": 1,
        'Name': 'Tom Hiddleston',
        'phone': '614-619-7449',
        'Team': 'Team'
    },
    {
        "id": 2,
        'Name': 'Ben Cumberbatc',
        'phone': '418-545-3433',
        'Team': 'Team'
    },
    {
        "id": 3,
        'Name': 'Tom Hiddleston',
        'phone': '614-574-3432',
        'Team': 'Team'
    },
    {
        "id": 4,
        'Name': 'Amber Malone',
        'phone': '614-619-7449',
        'Team': 'Team'
    },
    {
        "id": 5,
        'Name': 'Tom Hiddleston',
        'phone': '614-894-3432',
        'Team': 'Team'
    },
    {
        "id": 6,
        'Name': 'Ben Cumberbatc',
        'phone': '614-544-4532',
        'Team': 'Team'
    },
    {
        "id": 7,
        'Name': 'Kayla Malone',
        'phone': '614-382-3234',
        'Team': 'Team'
    },
    {
        "id": 8,
        'Name': 'Amber Malone',
        'phone': '614-241-2342',
        'Team': 'Team'
    },

    {
        "id": 9,
        'Name': 'Ben Cumberbatc',
        'phone': '614-130-2932',
        'Team': 'Team'
    },
    {
        "id": 10,
        'Name': 'Kayla Malone',
        'phone': '614-030-3432',
        'Team': 'Team'
    },
    {
        "id": 11,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team'
    },
    {
        "id": 12,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team'
    },
    {
        "id": 13,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team'
    },
    {
        "id": 14,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team'
    },
    {
        "id": 15,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team'
    },


]
export default class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            button: false,
            dropData: ['Columbus Buddy Walk Update', 'Team Amber', 'Columbus Buddy Walk Event', 'Stride'],
            index: 0,
            color: 'red'
        };
    }
    _keyExtractor = (item, index) => item.id;



    render() {
        return (
            <View style={styles.main}>

                <View style={styles.mainhead}>
                    <View style={styles.imageiconview}>
                        <Image source={require('../Image/directory.png')} style={styles.img} />
                    </View>
                    <View style={styles.mainheadview}>
                        <Text style={styles.mainheadtext}>Directory</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.incontain}>
                        <View style={styles.headview}>
                            <Text style={styles.heading}>Name</Text>
                            <Text style={styles.heading}>Team</Text>
                            <Text style={styles.heading}>Phone</Text>
                        </View>
                        <View style={styles.list}>
                            <FlatList
                                data={users}
                                keyExtractor={this._keyExtractor.bind(this)}
                                renderItem={({ item, key, index }) =>
                                    <View style={[styles.bottomView, { backgroundColor: index % 2 == 0 ? "#F4F3FA" : "white" }]}>
                                        <View style={styles.textname}>
                                            <Text style={styles.textlist}>{item.Name}</Text>
                                        </View>
                                        <View style={styles.textteam}>
                                            <Text style={styles.textlist}>{item.Team}</Text>
                                        </View>
                                        <View style={styles.phone}>
                                            <Text style={styles.textlist}>{item.phone}</Text>
                                        </View>
                                    </View>


                                }
                            />
                        </View>
                    </View>

                </View>

            </View>

        )
    }
}