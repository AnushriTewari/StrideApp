import React, { Component, PropTypes } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import styles from '../.././styles/drawerStyles';
import { bindActionCreators } from 'redux';
import { logout } from '../.././actions/authAction/logoutAction';
import { connect } from 'react-redux';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.logout=this.logout.bind(this);
}

logout(){
  this.props.logout();
  Actions.login()
}

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.mainView}>
        <View style={styles.mainView}>
          <View style={styles.main}></View>
          <View style={styles.container}>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.dashboardTeamCaptain()} style={styles.textstyle}>Dashboard</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.donation()} style={styles.textstyle}>Donations</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.directory()} style={styles.textstyle}>Directory</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.leaderboard()} style={styles.textstyle}>Leaderboard</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.team()} style={styles.textstyle}>Team</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.notification()} style={styles.textstyle}>Notifications</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.myacc()} style={styles.textstyle}>My Account</Text>
            </View>
            <View style={styles.logoutButtonView}>
              <TouchableOpacity onPress={() => this.logout()} style={styles.logoutText}>
                <Text style={styles.logoutButton}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonview}>
              <Image source={require('../../image/dsaco.png')} style={{}} />
              <Text style={styles.text}>Special Thanks to Our Partner</Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    logoutReducers: state.logoutReducers,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
