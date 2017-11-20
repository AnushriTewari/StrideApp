import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image,  Dimensions ,TouchableOpacity} from 'react-native';
import { Scene, Router, Switch, Modal, Actions, Stack } from 'react-native-router-flux';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Intro from './components/pages/Introduction/Intro';
import Intro1 from './components/pages/Introduction/Intro1';
import Intro2 from './components/pages/Introduction/Intro2';
import Intro3 from './components/pages/Introduction/Intro3';
import Reset from './components/pages/ResetPassword/Reset';
import DashboardTC from './components/pages/Dashboard/DashBoardTeamCaption';
//import DashboardEC from './components/pages/Dashboard/DashBoardEventCordinator';
import Drawer from './components/pages/SideDrawer/Drawer';
import MyAccount from './components/pages/AccountInfo/Myacc';
import Donation from './components/pages/Donation';
import Directory from './components/pages/Directory';
import Notification from './components/pages/Notification';
import LeaderBoard from './components/pages/LeaderBoard/LeaderBoard';
import Team from  './components/pages/Team';
import Update from './components/pages/NewUpdate';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'

const { height: h, width: w } = Dimensions.get('window');


  
class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  leftButton(){
    return(
      <View style={{backgroundColor:'white',width: w * 0.09, height: w * 0.15, justifyContent:'center', alignItems:'flex-end'}}>
    <TouchableOpacity style={{}} onPress={()=>Actions.pop()}>
      <Image source={require('./Image/left_arrow@2x.png')} style={{ height: 20, width:20, backgroundColor:"transparent"}}/>
      </TouchableOpacity>
      </View>
      )}
  render() {

    return (
      <Router>
          <Stack key="root" hideNavBar>
        
            <Scene key="login" component={Login}/>
            <Scene key="register" component={Register}  />
            <Scene key="passwordReset" component={Reset}  />
            <Scene key="drawer"  
                navigationBarTitleImage={require("./Image/logo.png")} 
                navigationBarTitleImageStyle={{  marginTop:'1%', backgroundColor:'white' }}
                navigationBarStyle={{ backgroundColor:'white', height: isIphoneX ? h * 0.1 : h * 0.1 }}
                drawer
               // openDrawerOffset={0.8}
                drawerImage={require('./Image/hambrgr@2x.png')}
                drawerPosition="right"
                contentComponent={Drawer}
                
              >
                 {/* <Scene key="dashboardEC" component={DashboardEC}  />  */}
              <Scene key="dashboardTC" component={DashboardTC}  navigationBarTitleImageStyle={{ marginLeft: "5%"}}/>
              <Scene key="intro" component={Intro} navigationBarTitleImageStyle={{ marginLeft: "5%"}}/>
              <Scene key="intro1" component={Intro1} navigationBarTitleImageStyle={{ marginLeft: "5%"}}/>
              <Scene key="intro2" component={Intro2} navigationBarTitleImageStyle={{ marginLeft: "5%"}}/>
              <Scene key="intro3" component={Intro3} navigationBarTitleImageStyle={{ marginLeft: "5%"}}/>
              <Scene key="myacc" component={MyAccount} renderLeftButton={this.leftButton} /> 
              <Scene key="notification" component={Notification} renderLeftButton={this.leftButton} />
              <Scene key="donation" component={Donation} renderLeftButton={this.leftButton}/>
              <Scene key="directory" component={Directory}  renderLeftButton={this.leftButton}/>
              <Scene key="leaderboard" component={LeaderBoard} renderLeftButton={this.leftButton}/>
              <Scene key="team" component={Team} renderLeftButton={this.leftButton}/>
              <Scene key="update" component={Update} renderLeftButton={this.leftButton}/>
            </Scene>
          </Stack>
      </Router>
    );
  }
}


export default RouterComponent;
