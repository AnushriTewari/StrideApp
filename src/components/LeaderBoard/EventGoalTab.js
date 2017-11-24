import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from "react-native";
const { height: h, width: w } = Dimensions.get('window');
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProgressCircle from 'react-native-progress-circle'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import styles from '../.././Styles/leaderBoardstyles';
import { bindActionCreators } from 'redux';
import { LeaderBoardPage } from '../.././actions/listUserAction';
import { connect } from 'react-redux';


class EventGoalTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    componentWillMount(){
        this.props.LeaderBoardPage()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.Reducers.leaderboard_data)
        {
        //console.log(nextProps.Reducers.leaderboard_data)
     }
    }
    render() {
        if(this.props.Reducers.leaderboard_data){
            const leaderboard_data = this.props.Reducers.leaderboard_data
        return (
            <View style={styles.eventGoalmain}>
                            <View style={styles.heading}>
                                <Text style={styles.textheader}>Columbus Goal  </Text>
                            </View>
                            <View style={styles.progressView}>
                                <ProgressCircle
                                    percent={leaderboard_data.percent}
                                    radius={97}
                                    borderWidth={15}
                                    color="#f89e59"
                                    shadowColor="#DADADA"
                                    bgColor="#fff"
                                >
                                    <Text style={styles.percent}>{leaderboard_data.percent}%</Text>
                                    <Text style={styles.percent}>to Goal</Text>
                                </ProgressCircle>

                            </View>
                            <View style={styles.value}>
                                <View style={styles.stats}>
                                    <View style={styles.div}>
                                        <Text style={styles.textstats}>goal:{leaderboard_data.goal}</Text>
                                    </View>
                                    <View style={styles.divview}>
                                        <Text style={styles.textstats}>|</Text>
                                    </View>
                                    <View style={styles.div}>
                                        <Text style={styles.textstats}>raised:{leaderboard_data.raised}</Text>
                                    </View>
                                </View>
                                <View style={styles.donationview}>
                                    <Text style={styles.textdonor}>raised by 30 donors</Text>
                                </View>
                            </View>
            </View>

        );
    }
    else{
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator/>
        </View>
    }
    }
}
const mapStateToProps = state => {
    return {
        Reducers: state.Reducers,
    };
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ LeaderBoardPage}, dispatch);
  };
  export default connect( mapStateToProps ,mapDispatchToProps)(EventGoalTab);