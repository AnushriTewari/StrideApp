import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');
import styles from '../.././styles/introStyles';

export default class IntroScreenThird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMail: ''
    }
    this.goToDashboard=this.goToDashboard.bind(this);
  }
  goToDashboard() {
      Actions.dashboardTeamCaptain();
  }

  render() {
    return (
      <View style={styles.intromain}>
        <View style={styles.introcontainer}>
          <View style={styles.introwrap}>
            <View style={styles.introimage}>
              <Image source={require('../../image/access_event@1,5x.png')} style={styles.introimagestyle}></Image>
            </View>
            <View style={styles.introtextContent}>
              <Text style={styles.introtextStyle}>Access event updates</Text>
              <Text style={styles.introtextStyle}>from one place.</Text>
            </View>
          </View>
          <View style={styles.introbuttonView}>
            <TouchableOpacity >
              <Text onPress={() => this.goToDashboard()} style={styles.introtextSkip}>Skip Intro</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.introbuttonView}>
          <TouchableOpacity onPress={() => Actions.intro2()} style={[styles.intronextclick, { backgroundColor: '#f89e59' }]}>
            <Text style={styles.introbuttontext}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

