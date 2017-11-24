import React, { Component, PropTypes } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView,  Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import styles from '../.././Styles/Drawerstyles'

export default class Drawer extends Component {

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.mainView}>
        <View style={styles.mainView}>
          <View style={styles.main}></View>
          <View style={styles.container}>
          <View style={styles.wrap}>
              <Text onPress={() => Actions.dashboardTC()} style={styles.textstyle}>Dashboard</Text>
            </View>
            <View style={styles.wrap}>
              <Text onPress={() => Actions.donation()} style={styles.textstyle}>Donations</Text>
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
              <TouchableOpacity onPress={() => Actions.login()} style={styles.logoutText}>
                <Text style={styles.logoutButton}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonview}>
             <Image source={require('../../Image/dsaco.png')} style={{}}/>
             <Text style={styles.text}>Special Thanks to Our Partner</Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
