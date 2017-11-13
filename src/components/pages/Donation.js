import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');

const users = [
    {
        "id": 1,
        'Name': 'Tom Hiddleston',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 2,
        'Name': 'Ben Cumberbatc',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 3,
        'Name': 'Tom Hiddleston',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 4,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 5,
        'Name': 'Tom Hiddleston',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 6,
        'Name': 'Ben Cumberbatc',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 7,
        'Name': 'Kayla Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 8,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },

    {
        "id": 9,
        'Name': 'Ben Cumberbatc',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 10,
        'Name': 'Kayla Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 12,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 13,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 14,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 15,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
    },
    {
        "id": 16,
        'Name': 'Amber Malone',
        'Amount': '$500',
        'Date': '5/22/17'
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
            color: 'red',cost:'$5000',raised:'$1,250'
        };
    }
    _keyExtractor = (item, index) => item.id;



    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:'white'}}>
                
                <View style={{ flex: .07, backgroundColor: '#F09F61', flexDirection: 'row' }}>
                <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image source={require('../../Image/donation.png')} style={{ height: h * 0.034, width: w * .054 }} />
                </View>
                <View style={{ flex: .65, justifyContent: 'center', paddingLeft: '4%' }}>
                    <Text style={{color: 'white', fontSize: h * 0.03, fontWeight: '500'}}>Donations</Text>
                </View>
            </View>
            <View style={{ flex: .8, width: w , alignSelf: 'center' }}>
                <View style={{ flex: .65, justifyContent: 'center', marginTop: '10%' }}>


                    <FlatList
                        data={users}
                        keyExtractor={this._keyExtractor.bind(this)}
                        renderItem={({ item, key, index }) =>
                            <View style={{ height: h * .03, width: w , flexDirection: 'row', backgroundColor: index % 2 == 0 ? "#f5f5f5" : "white", marginVertical: '1%' }}>
                                <View style={{ flex: .4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#2f6884', fontSize: h * 0.018, fontWeight: '500' }}>{item.Name}</Text>
                                </View>
                                <View style={{ flex: .2, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#2f6884', fontSize: h * 0.018, fontWeight: '500' }}>{item.Amount}</Text>
                                </View>
                                <View style={{ flex: .35, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: '#2f6884', fontSize: h * 0.018, fontWeight: '500' }}>{item.Date}</Text>
                                </View>
                            </View>
                        }
                    />

                </View>
                <View style={{ flex: 0.05}}></View>
                <View style={{ flex: .25 ,width:w*.7,alignSelf:'center'}}>
                    <View style={{ flex: .12, flexDirection: 'row' }}>
                        <View style={{ flex: .45,alignItems:'center' ,alignItems:'center'}}>
                        <Text style={{ color: '#F09F61', fontSize: h * 0.025 }}>goal:{this.state.cost}</Text>
                        </View>
                        <View style={{ flex: .05,alignItems:'center' }}>
                        <Text style={{ color: '#F09F61', fontSize: h * 0.025}}>|</Text>
                        </View>
                        <View style={{ flex: .45,alignItems:'center' }}>
                        <Text style={{ color: '#F09F61', fontSize: h * 0.025}}>raised:{this.state.raised}</Text>
                        </View>
                    </View>
                    <View style={{ flex: .88 , alignItems:'center', paddingTop:'3%'}}>
                    <Text style={{ fontSize: h * 0.022, color: 'grey' }}>raised by 30 donors</Text>
                    </View>
                </View>
            </View>
        </View>

        )
    }
}