import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
import IntroScreenFirst from './IntroScreenFirst';
import IntroScreenSecond from './IntroScreenSecond';
import IntroScreenThird from './IntroScreenThird';
import Swiper from 'react-native-swiper';
import styles from '../.././styles/introStyles';

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Swiper showsButtons={false}
          showsPagination={true}
          dotColor='transparent'
          dotStyle={styles.dot}
          activeDotColor="#dcdcdc"
          activeDotStyle={styles.activedot}
        >
          <IntroScreenFirst />
          <IntroScreenSecond />
          <IntroScreenThird />
        </Swiper>
      </View>
    )
  }
}

