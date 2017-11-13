import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image,  Dimensions } from 'react-native';
import { Scene, Router, Switch, Modal, Actions, Stack } from 'react-native-router-flux';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Intro1 from './components/pages/Intro1';
import Intro2 from './components/pages/Intro2';
import Intro3 from './components/pages/Intro3';
import Reset from './components/pages/Reset';
import Dashboard from './components/pages/DashBoard';
import Drawer from './components/pages/Drawer';
import MyAccount from './components/pages/Myacc';
import Donation from './components/pages/Donation';
import Notification from './components/pages/Notification';
import LeaderBoard from './components/pages/LeaderBoard';
import Team from  './components/pages/Team';


const { height: h, width: w } = Dimensions.get('window');


  
class RouterComponent extends Component {
  render() {

    return (
      <Router>
          <Stack key="root" >
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="register" component={Register} hideNavBar />
            <Scene key="passwordReset" component={Reset} hideNavBar />
            <Scene key="drawer"  
                navigationBarTitleImage={require("./Image/logo.png")} 
                navigationBarTitleImageStyle={{ alignContent:'flex-start', marginLeft:'4%',marginTop:'1%',backgroundColor:'white'}}
                navigationBarStyle={{ backgroundColor:'white',height: h * 0.1}} 
                renderBackButton={()=>null} hideNavBar
                drawer
                drawerImage={require('./Image/hambrgr@2x.png')}
                drawerPosition="right"
                contentComponent={Drawer}
              >
              <Scene key="dashboard" component={Dashboard} />
              <Scene key="intro1" component={Intro1} renderBackButton={()=>null} />
              <Scene key="intro2" component={Intro2} renderBackButton={()=>null} />
              <Scene key="intro3" component={Intro3} renderBackButton={()=>null} />
              <Scene key="myacc" component={MyAccount} /> 
              <Scene key="notification" component={Notification} />
              <Scene key="donation" component={Donation} />
              <Scene key="leaderboard" component={LeaderBoard} />
              <Scene key="team" component={Team}  />
            </Scene>
          </Stack>
      </Router>
    );
  }
}


export default RouterComponent;
