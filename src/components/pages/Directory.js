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
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                
                <View style={{ flex: .08, backgroundColor: '#F09F61', flexDirection: 'row' }}>
                    <View style={{ flex: .37, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={require('../../Image/directory.png')} style={{ height: h * 0.03, width: w * .048 }} />
                    </View>
                    <View style={{ flex: .72, justifyContent: 'center', paddingLeft: '4%' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03 }}>Directory</Text>
                    </View>
                </View>
                <View style={{ flex: .8, width: w , alignSelf: 'center' }}>
                    <View style={{ flex: .8, justifyContent: 'center', marginTop: '5%' }}>
                        <View style={{ flex: .05, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ color: 'black', fontSize: h * 0.02, marginLeft:'3%' }}>Name</Text>
                            <Text style={{ color: 'black', fontSize: h * 0.02,  marginLeft:'3%'}}>Team</Text>
                            <Text style={{ color: 'black', fontSize: h * 0.02, marginRight:'4%' }}>Phone</Text>
                        </View>
                        <View style={{ flex: .8, paddingBottom: '4%'}}>
                            <FlatList
                                data={users}
                                keyExtractor={this._keyExtractor.bind(this)}
                                renderItem={({ item, key, index }) =>
                                    <View style={{ height: h * .04, width: w , flexDirection: 'row', backgroundColor: index % 2 == 0 ? "#F4F3FA" : "white", marginVertical: '1%' }}>
                                        <View style={{ flex: .34, flexDirection: 'row', alignItems: 'flex-end', justifyContent: "center", marginLeft:"3%" }}>
                                            <Text style={{ color: 'steelblue', fontSize: h * 0.02, fontWeight: 'bold' }}>{item.Name}</Text>
                                        </View>
                                        <View style={{ flex: .32, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'steelblue', fontSize: h * 0.02, fontWeight: 'bold' }}>{item.Team}</Text>
                                        </View>
                                        <View style={{ flex: .34, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ color: 'steelblue', fontSize: h * 0.02, fontWeight: 'bold' }}>{item.phone}</Text>
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