import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from "react-native";

export default class Donation extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={{ flex: 1,backgroundColor:'white' }}>
                <View style={{ flex: .1, backgroundColor: '#54a9d3', flexDirection: 'row' }}>
                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={require('../../../Image/leaderboard.png')} style={{ height: h * 0.04, width: w * .06 }} />
                    </View>
                    <View style={{ flex: .65, justifyContent: 'center', paddingLeft: '4%' }}>
                        <Text style={{color: 'white', fontSize: h * 0.03, fontWeight: '500'}}>Leaderboard</Text>
                    </View>
                </View>

                <View style={{ flex: .1, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.setState({ tabcolor: '#db9a55' }), this.setState({ LeaderBoard: true }), this.setState({ tabcolor1: 'steelblue' }) }}
                        style={{ flex: .45, alignItems: 'flex-end', justifyContent: 'center',paddingRight:'2%'  }}>
                        <Text style={{ fontSize: h * .025, color: this.state.tabcolor }}>LEADERBOARD</Text>
                    </TouchableOpacity>
                    <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: h * .035, color: 'steelblue' }}>|</Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.setState({ tabcolor1: '#db9a55' }), this.setState({ LeaderBoard: false }), this.setState({ Event: true }), this.setState({ tabcolor: 'steelblue' }) }}
                        style={{ flex: .45, justifyContent: 'center', alignItems: 'flex-start',paddingLeft:'2%' }}>
                        <Text style={{ fontSize: h * .025, color: this.state.tabcolor1 }}>EVENT GOAL</Text></TouchableOpacity>
                </View>


                <Swiper 
                    activeDotColor='grey'
                    onPageChange={()=>this.nextPage()}
                   >
                    <View style={{ flex: .8, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: .8, width: w * .8, shadowOffset: { width: 2 }, bottomShadowColor: 'grey', shadowOpacity: 0.2, }}>
                            <View style={{ flex: .2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#2f6884', fontSize: h * .035, fontWeight:'400' }}>Columbus Leaderboard  </Text>
                            </View>
                            <View style={{ flex: .8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <FlatList
                                    data={users}
                                    renderItem={({ item, key }) =>
                                        <View style={{ height: h * .03, width: w * .9, borderRadius: 10, flexDirection: 'row' }}>
                                        <View style={{ flex: .2, alignItems: 'center' }}>                                          
                                            </View>
                                            <View style={{ flex: .4, alignItems: 'flex-start' }}>
                                                <Text>{item.TeamName}</Text>
                                            </View>
                                            <View style={{ flex: .4, alignItems: 'flex-start' }}>
                                                <Text>{item.Cost}</Text>
                                            </View>                                           
                                        </View>
                                    } />
                            </View>
                        </View>
                        <View style={{ flex: .2 }}>
                        </View>
                    </View>

                    <View style={{ flex: .76, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: .8, backgroundColor: 'white', width: w * .95, shadowOffset: { width: 2 }, bottomShadowColor: 'grey', shadowOpacity: 0.2, }}>
                            <View style={{ flex: .2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'steelblue', fontSize: h * .04 }}>Columbus Goal  </Text>
                            </View>
                            <View style={{ flex: .6, backgroundColor: 'white', alignItems: 'center' }}>
                                <ProgressCircle
                                    percent={this.state.percent}
                                    radius={100}
                                    borderWidth={15}
                                    color="#db9a55"
                                    shadowColor="#DADADA"
                                    bgColor="#fff"
                                >
                                    <Text style={{ fontSize: 18 }}>{this.state.percent}</Text>
                                    <Text style={{ fontSize: 18 }}>To Goal</Text>
                                </ProgressCircle>

                            </View>
                            <View style={{ flex: .2 }}>
                                <View style={{ flex: .5, flexDirection: 'row' }}>
                                    <View style={{ flex: .45, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: h * .03, color: '#db9a55' }}>goal:{this.state.goal}</Text>
                                    </View>
                                    <View style={{ flex: .05, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: h * .03, color: '#db9a55' }}>|</Text>
                                    </View>
                                    <View style={{ flex: .45, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: h * .03, color: '#db9a55' }}>raised:{this.state.raised}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: .5, alignItems: 'center' }}>
                                    <Text style={{ fontSize: h * .025, color: 'black' }}>raised by 30 donors</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: .2, justifyContent: 'center' }}>

                        </View>
                    </View>

                </Swiper>



            </View>

        );
    }
}