import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: .09,
    backgroundColor: '#53a5b9',
    flexDirection: 'row'
  },
  imageView: {
    flex: .35,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  img: {
    ...ifIphoneX({ height: WINDOW_HEIGHT * 0.034 }, { height: WINDOW_HEIGHT * 0.042 }),
    ...ifIphoneX({ width: WINDOW_WIDTH * .061 }, { width: WINDOW_WIDTH * .061 }),
  },
  textview: {
    flex: .65,
    justifyContent: 'center',
    paddingLeft: '4%'
  },
  texthead: {
    color: 'white',
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026 }, { fontSize: WINDOW_HEIGHT * 0.03 }),
    fontWeight: '500'
  },
  scrolltab: {
    flex: .8,
    elevation: 5,
    backgroundColor: 'white'
  },
  underline: {
    backgroundColor: 'transparent'
  },
  tabbartext: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.021 }, { fontSize: WINDOW_HEIGHT * 0.025 })
  },
  left: {
    flex: 0.13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  eventGoalmain: {
    flex: 1,
    backgroundColor: 'white',
    shadowOffset: { width: 2 },
    shadowOpacity: 0.2
  },
  heading: {
    flex: .15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textheader: {
    color: '#3a6d89',
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.034 }, { fontSize: WINDOW_HEIGHT * 0.036, }),
    fontWeight: '400'
  },
  progressView: {
    flex: .6,
    backgroundColor: 'white',
    ...ifIphoneX({ justifyContent: "flex-start" }, { justifyContent: "flex-start" }),
    alignItems: 'center',
    marginTop: '2%'
  },
  percent: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.039 }, { fontSize: WINDOW_HEIGHT * 0.039, }),
    fontWeight: '500',
    color: '#777777'
  },
  value: {
    flex: .25,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  stats: {
    flex: .4,
    flexDirection: 'row'
  },
  div: {
    flex: .45,
    alignItems: 'center'
  },
  divview: {
    flex: .05,
    alignItems: 'center'
  },
  textstats: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026 }, { fontSize: WINDOW_HEIGHT * 0.03, }),
    color: '#f89e59'
  },
  donationview: {
    flex: .6
  },
  textdonor: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.02 }, { fontSize: WINDOW_HEIGHT * 0.025, }),
    color: 'grey'
  },
  leaderboardmain: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOffset: { width: 2 },
    shadowOpacity: 0.2,
  },
  container: {
    flex: (Platform.OS === 'iOS') ? 0.9 : 0.8,
    width: WINDOW_WIDTH,

  },
  title: {
    flex: .2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leaderboardtext: {
    color: '#2f6884',
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.03 }, { fontSize: WINDOW_HEIGHT * 0.034 }),
    fontWeight: '400'
  },
  buttonStyleTitle: {
    height: 20,
    width: 20,
    backgroundColor: "transparent"
  },
  leftButtonView: {
    backgroundColor: 'white',
    width: WINDOW_WIDTH * 0.09,
    height: WINDOW_WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  leaderboardlist: {
    flex: .8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listview: {
    height: WINDOW_HEIGHT * .03,
    width: WINDOW_WIDTH,
    borderRadius: 10,
    flexDirection: 'row'
  },
  cost: {
    flex: .4,
    alignItems: 'flex-start'
  },
  activityindicator:{ 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%' 
  },
  textname: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.019 },
      { fontSize: WINDOW_HEIGHT * 0.022 }),
    fontWeight: '500'
  },
  space: {
    flex: (Platform.OS === 'iOS') ? .1 : .2
  },
})

