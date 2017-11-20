import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import styles from '.././styles/Donationstyles'
const { height: h, width: w } = Dimensions.get('window');

const users = [
    {
        "id": 1,
        'Name': 'Tom Hiddleston',
        'Amount': '$342',
        'Date': '4/2/17'
    },
    {
        "id": 2,
        'Name': 'Ben Cumberbatc',
        'Amount': '$232',
        'Date': '5/4/17'
    },
    {
        "id": 3,
        'Name': 'Tom Hiddleston',
        'Amount': '$394',
        'Date': '7/27/17'
    },
    {
        "id": 4,
        'Name': 'Amber c ',
        'Amount': '$564',
        'Date': '6/27/17'
    },
    {
        "id": 5,
        'Name': 'Tom Hiddleston',
        'Amount': '$300',
        'Date': '5/22/17'
    },
    {
        "id": 6,
        'Name': 'Ben Cumberbatc',
        'Amount': '$100',
        'Date': '7/24/17'
    },
    {
        "id": 7,
        'Name': 'Kayla Malone',
        'Amount': '$500',
        'Date': '9/9/17'
    },
    {
        "id": 8,
        'Name': 'Amber Malone',
        'Amount': '$450',
        'Date': '3/4/17'
    },

    {
        "id": 9,
        'Name': 'Ben Cumberbatc',
        'Amount': '$950',
        'Date': '5/9/17'
    },
    {
        "id": 10,
        'Name': 'Kayla Malone',
        'Amount': '$909',
        'Date': '11/13/17'
    },
    {
        "id": 12,
        'Name': 'Amber Malone',
        'Amount': '$437',
        'Date': '1/4/17'
    },
    {
        "id": 13,
        'Name': 'Ben Cumberbatc',
        'Amount': '$409',
        'Date': '3/4/17'
    },
    {
        "id": 14,
        'Name': 'Kayla Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 15,
        'Name': 'Amber Malone',
        'Amount': '$495',
        'Date': '9/23/17'
    },
    {
        "id": 16,
        'Name': 'Ben Cumberbatc ',
        'Amount': '$580',
        'Date': '4/7/17'
    },
]
export default class Donation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            button: false,
            dropData: ['Columbus Buddy Walk Update', 'Team Amber', 'Columbus Buddy Walk Event', 'Stride'],
            index: 0,
            color: 'red',
            cost: '$5000',
            raised: '$1,250'
        };
    }
    _keyExtractor = (item, index) => item.id;



    render() {
        return (
            <View style={styles.main}>
                <View style={styles.headerview}>
                    <View style={styles.imageview}>
                        <Image source={require('../../Image/donation.png')} style={styles.image} />
                    </View>
                    <View style={styles.titleview}>
                        <Text style={styles.texthead}>Donations</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.flatlist}>
                        <FlatList
                            data={users}
                            keyExtractor={this._keyExtractor.bind(this)}
                            renderItem={({ item, key, index }) =>
                                <View style={[styles.listview,{ backgroundColor: index % 2 == 0 ? "#f5f5f5" : "white", marginVertical: '1%'}]}>
                                    <View style={styles.name}>
                                        <Text style={styles.nametext}>{item.Name}</Text>
                                    </View>
                                    <View style={styles.amount}>
                                        <Text style={styles.nametext}>{item.Amount}</Text>
                                    </View>
                                    <View style={styles.date}>
                                        <Text style={styles.nametext}>{item.Date}</Text>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={styles.bottomview}></View>
                    <View style={styles.amountcollected}>
                        <View style={{ flex: .4, flexDirection: 'row' }}>
                            <View style={styles.viewdiv}>
                                <Text style={styles.statics}>Goal:{this.state.cost}</Text>
                            </View>
                            <View style={[ styles.bottomview ,{alignItems: 'center'} ]}>
                                <Text style={styles.statics}>|</Text>
                            </View>
                            <View style={styles.viewdiv}>
                                <Text style={styles.statics}>Raised:{this.state.raised}</Text>
                            </View>
                        </View>
                        <View style={styles.donornumberview}>
                            <Text style={styles.numberdonor}>Raised by 30 donors</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}