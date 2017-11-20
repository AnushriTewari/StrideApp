import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');
import styles from  '../.././styles/introstyles';
export default class Intro2 extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.intromain}>
        <View style={styles.introcontainer}>
          <View style={styles.introwrap}>
            <View style={styles.introimage}>
              <Image source={require('../../../Image/leaderboard@1,5x.png')} style={styles.introimagestyle}></Image>
            </View>
            <View style={styles.introtextContent}>
              <Text style={styles.introtextStyle}>See who is at the top</Text>
              <Text style={styles.introtextStyle}>of the leaderboard with</Text>
              <Text style={styles.introtextStyle}>a click of a button.</Text>
            </View>
          </View>
          <View style={styles.introbuttonView}>
            <TouchableOpacity>
              <Text onPress={() => Actions.dashboardTC()} style={styles.introtextSkip}>Skip Intro</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.introbuttonView}>
          <TouchableOpacity style={[styles.intronextclick , {backgroundColor: '#53a5b9'}]} onPress={() => Actions.intro3()}>
            <Text style={styles.introbuttontext}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
