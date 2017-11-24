import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Swiper from 'react-native-swiper';
import styles from '../.././Styles/introstyles';

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
          <Intro1 />
          <Intro2 />
          <Intro3 />
        </Swiper>
      </View>
    )
  }
}

