

import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LeaderBoardTab from './LeaderBoardTab';
import EventGoalTab from './EventGoalTab';
const { height: h, width: w } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
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

export default class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabcolor: '#db9a55',
            LeaderBoard: true,
            Event: false,
            tabcolor1: 'steelblue',
            percent: 50,
            goal: '$1000000',
            raised: '$250,000',
            color: true,
            ind:0
        };
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.setState = ({
            tabcolor: "steelblue",
            tabcolor1: 'orange',
        })
        // alert(this.state.leaderBoardcolor);

    }
 firstView(){
     return(
    <View style={{ flex: 0.8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ flex: .8, width: w, shadowOffset: { width: 2 }, bottomShadowColor: 'grey', shadowOpacity: 0.2 }}>
        <View style={{ flex: .2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#2f6884', fontSize: h * .035, fontWeight: '400' }}>Columbus Leaderboard  </Text>
        </View>
        <View style={{ flex: .8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={users}
                renderItem={({ item, key }) =>
                    <View style={{ height: h * .03, width: w, borderRadius: 10, flexDirection: 'row' }}>
                        <View style={{ flex: .2, alignItems: 'center' }}>
                        </View>
                        <View style={{ flex: .4, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: h * 0.022, fontWeight: '500' }}>{item.TeamName}</Text>
                        </View>
                        <View style={{ flex: .4, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: h * 0.022, fontWeight: '500' }}>{item.Cost}</Text>
                        </View>
                    </View>
                } />
        </View>
    </View>
    <View style={{ flex: .2 }}>
    </View>
</View>
     )
 }
 secondView(){
     return(
        <View style={{ flex: 0.8, backgroundColor: 'white', shadowOffset: { width: 2 }, bottomShadowColor: 'grey', shadowOpacity: 0.2 }}>
        <View style={{ flex: .1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#3a6d89', fontSize: h * .04, fontWeight: '400' }}>Columbus Goal  </Text>
        </View>
        <View style={{ flex: .6, backgroundColor: 'white', alignItems: 'center', justifyContent: "flex-start", marginTop: '2%' }}>
            <ProgressCircle
                percent={this.state.percent}
                radius={97}
                borderWidth={15}
                color="#f89e59"
                shadowColor="#DADADA"
                bgColor="#fff"
            >
                <Text style={{ fontSize: h * 0.040, fontWeight: '500' }}>{this.state.percent}%</Text>
                <Text style={{ fontSize: h * 0.035, fontWeight: '500' }}>to Goal</Text>
            </ProgressCircle>

        </View>
        <View style={{ flex: .3, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ flex: .4, flexDirection: 'row' }}>
                <View style={{ flex: .45, alignItems: 'center' }}>
                    <Text style={{ fontSize: h * .03, color: '#f89e59' }}>goal:{this.state.goal}</Text>
                </View>
                <View style={{ flex: .05, alignItems: 'center' }}>
                    <Text style={{ fontSize: h * .03, color: '#f89e59' }}>|</Text>
                </View>
                <View style={{ flex: .45, alignItems: 'center' }}>
                    <Text style={{ fontSize: h * .03, color: '#f89e59' }}>raised:{this.state.raised}</Text>
                </View>
            </View>
            <View style={{ flex: .6 }}>
                <Text style={{ fontSize: h * .025, color: 'grey' }}>raised by 30 donors</Text>
            </View>
        </View>
    </View>
     )
 }
    

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: .1, backgroundColor: '#53a5b9', flexDirection: 'row' }}>
                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={require('../../../Image/leaderboard.png')} style={{ height: h * 0.042, width: w * .061 }} />
                    </View>
                    <View style={{ flex: .65, justifyContent: 'center', paddingLeft: '4%' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: '500' }}>Leaderboard</Text>
                    </View>
                </View>
                <View style={{ flex: 0.1, flexDirection: 'row', marginTop: '2%' }}>
                    <View style={{ flex: 0.34 }}><TouchableOpacity onPress={()=>{this.setState({color: !this.state.color,ind:this.state.ind + 1})}}><Text style={{ color: this.state.color ? '#f89e59' : '#44859e' , textAlign: "center", fontSize: h * 0.027, fontWeight: '400' }}>LEADERBOARD</Text></TouchableOpacity></View>
                    <View><Text style={{ flex: 0.12 }}>|</Text></View>
                    <View style={{ flex: 0.34 }}><TouchableOpacity onPress={()=>{this.firstView(),this.setState({color:!this.state.color})}}><Text style={{ color: this.state.color ? '#44859e' : '#f89e59' , textAlign: "center", fontSize: h * 0.027, fontWeight: '400' }}>EVENT BOARD</Text></TouchableOpacity></View>
                </View>
                <Swiper showsButtons={false}
                    showsPagination={true}
                    dotColor='transparent'
                    dotStyle={{ borderWidth: 1, borderColor: '#dcdcdc' }}
                    activeDotColor="#dcdcdc"
                    index={this.state.ind}
                    onIndexChanged={() => { this.setState({ color: !this.state.color }) }}
                >
                   {this.firstView()}
                   {this.secondView()}
                </Swiper>

            </View>
        )
    }
}






import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LeaderBoardTab from './LeaderBoardTab';
import EventGoalTab from './EventGoalTab';
const { height: h, width: w } = Dimensions.get('window');


export default class LeaderBoard extends Component {
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
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.setState = ({
            tabcolor: "steelblue",
            tabcolor1: 'orange',
        })
        // alert(this.state.leaderBoardcolor);

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: .1, backgroundColor: '#53a5b9', flexDirection: 'row' }}>
                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={require('../../../Image/leaderboard.png')} style={{ height: h * 0.042, width: w * .061 }} />
                    </View>
                    <View style={{ flex: .65, justifyContent: 'center', paddingLeft: '4%' }}>
                        <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: '500' }}>Leaderboard</Text>
                    </View>
                </View>
              
                <ScrollableTabView
                    style={{ flex: .75, elevation: 5, backgroundColor:'white' }}
                    tabBarActiveTextColor='#f89e59'
                    tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
                    tabBarInactiveTextColor='#44859e'
                    tabBarTextStyle={{ fontSize: h * 0.025 }}
                >
                    <LeaderBoardTab tabLabel="LEADERBOARD" />
                    <EventGoalTab tabLabel="EVENT GOAL" />
                </ScrollableTabView>
                <View style={{ flex: 0.13 }}>
                    
                </View>
            </View>
        )
    }
}