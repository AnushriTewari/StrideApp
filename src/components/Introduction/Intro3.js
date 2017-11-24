import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
const { height: h, width: w } = Dimensions.get('window');
import styles from  '../.././Styles/introstyles';
export default class Intro3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.intromain}>
        <View style={styles.introcontainer}>
          <View style={styles.introwrap}>
            <View style={styles.introimage}>
              <Image source={require('../../Image/donation@1,5x.png')} style={styles.introimagestyle}></Image>
            </View>
            <View style={styles.introtextContent}>
              <Text style={styles.introtextStyle}>Check out your latest </Text>
              <Text style={styles.introtextStyle}>donations on your phone!</Text>
            </View>
          </View>
          <View style={styles.introbuttonView}>
            <TouchableOpacity >
              <Text onPress={() => Actions.dashboardTC()} style={styles.introtextSkip}>Skip Intro</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.introbuttonView}>
          <TouchableOpacity onPress={() => Actions.dashboardTC()} style={[styles.intronextclick , {backgroundColor: '#44859e'}]}>
            <Text style={styles.introbuttontext}>BEGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
