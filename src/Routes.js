import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Scene, Router, Switch, Modal, Actions, Stack } from 'react-native-router-flux';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Intro from './components/Introduction/Intro';
import Intro1 from './components/Introduction/Intro1';
import Intro2 from './components/Introduction/Intro2';
import Intro3 from './components/Introduction/Intro3';
import Reset from './components/ResetPassword/Reset';
import DashboardTC from './components/Dashboard/DashBoardTeamCaption';
//import DashboardEC from './components/Dashboard/DashBoardEventCordinator';
import Drawer from './components/SideDrawer/Drawer';
import MyAccount from './components/AccountInfo/Myacc';
import Donation from './components/Donation';
import Directory from './components/Directory';
import Notification from './components/Notifications/NotificationPage';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Team from './components/Team';
import Update from './components/Notifications/NewUpdatePage';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'

const { height: h, width: w } = Dimensions.get('window');



class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  leftButton() {
    return (
      <View style={{ backgroundColor: 'white', width: w * 0.09, height: w * 0.15, justifyContent: 'center', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{}} onPress={() => Actions.pop()}>
          <Image source={require('./Image/left_arrow@2x.png')} style={{ height: 20, width: 20, backgroundColor: "transparent" }} />
        </TouchableOpacity>
      </View>
    )
  }
    updateButton() {
      return (
        <View style={{ backgroundColor: 'white', width: w * 0.09, height: w * 0.15, justifyContent: 'center', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{}} onPress={() => Actions.notification()}>
            <Image source={require('./Image/left_arrow@2x.png')} style={{ height: 20, width: 20, backgroundColor: "transparent" }} />
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
            navigationBarTitleImage={require("./Image/logo.png")}
            navigationBarTitleImageStyle={{ marginTop: '1%', backgroundColor: 'white' }}
            navigationBarStyle={{ backgroundColor: 'white', height: isIphoneX ? h * 0.1 : h * 0.1 }}
            drawer
            drawerImage={require('./Image/hambrgr@2x.png')}
            drawerPosition="right"
            contentComponent={Drawer}
          >
            {/* <Scene key="dashboardEC" component={DashboardEC}  />  */}
            <Scene key="dashboardTC" component={DashboardTC} navigationBarTitleImageStyle={{ marginLeft: "5%" }} />
            <Scene key="intro" component={Intro} navigationBarTitleImageStyle={{ marginLeft: "5%" }} />
            <Scene key="intro1" component={Intro1} navigationBarTitleImageStyle={{ marginLeft: "5%" }} />
            <Scene key="intro2" component={Intro2} navigationBarTitleImageStyle={{ marginLeft: "5%" }} />
            <Scene key="intro3" component={Intro3} navigationBarTitleImageStyle={{ marginLeft: "5%" }} />
            <Scene key="myacc" component={MyAccount} renderLeftButton={this.leftButton} />
            <Scene key="notification" component={Notification} renderLeftButton={this.leftButton}/>
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
