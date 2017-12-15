import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Scene, Router, Switch, Modal, Actions, Stack } from 'react-native-router-flux';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Intro from './components/introduction/IntroContainer';
import IntroScreenFirst from './components/introduction/IntroScreenFirst';
import IntroScreenSecond from './components/introduction/IntroScreenSecond';
import IntroScreenThird from './components/introduction/IntroScreenThird';
import Reset from './components/resetpassword/Reset';
import DashboardTeamCaptain from './components/dashboard/DashBoardTeamCaptain';
import Drawer from './components/sidedrawer/Drawer';
import MyAccount from './components/accountinfo/MyAccount';
import Donation from './components/Donation';
import Directory from './components/Directory';
import Notification from './components/notifications/NotificationPage';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Team from './components/Team';
import Update from './components/notifications/NewUpdatePage';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import styles from './styles/routesStyles';
const { height: h, width: w } = Dimensions.get('window');

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.leftButton = this.leftButton.bind(this)
  }
  leftButton() {
    return (
      <View style={styles.leftButtonView}>
        <TouchableOpacity onPress={() => Actions.dashboardTeamCaptain()}>
          <Image source={require('./image/left_arrow@2x.png')} style={styles.buttonStyle} />
        </TouchableOpacity>
      </View>
    )
  }
  updateButton() {
    return (
      <View style={styles.leftButtonView}>
        <TouchableOpacity onPress={() => Actions.notification()}>
          <Image source={require('./image/left_arrow@2x.png')} style={styles.buttonStyle} />
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={Login} />
          <Scene key="register" component={Register} />
          <Scene key="passwordReset" component={Reset} />
          <Scene key="drawer"
            navigationBarTitleImage={require("./image/logo.png")}
            navigationBarStyle={styles.navBarStyle}
            navigationBarTitleImageStyle={styles.titleImageStyle}
            drawer
            drawerImage={require('./image/hambrgr@2x.png')}
            drawerPosition="right"
            contentComponent={Drawer}
          >
            <Scene key="dashboardTeamCaptain" component={DashboardTeamCaptain} />
            <Scene key="intro" component={Intro} />
            <Scene key="intro1" component={IntroScreenFirst} />
            <Scene key="intro2" component={IntroScreenSecond} />
            <Scene key="intro3" component={IntroScreenThird} />
            <Scene key="myacc" component={MyAccount} renderLeftButton={this.leftButton} />
            <Scene key="notification" component={Notification} renderLeftButton={this.leftButton} />
            <Scene key="donation" component={Donation} renderLeftButton={this.leftButton} />
            <Scene key="directory" component={Directory} renderLeftButton={this.leftButton} />
            <Scene key="leaderboard" component={LeaderBoard} renderLeftButton={this.leftButton} />
            <Scene key="team" component={Team} renderLeftButton={this.leftButton} />
            <Scene key="update" component={Update} renderLeftButton={this.updateButton} />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
export default RouterComponent;
