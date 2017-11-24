import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: .1,
    backgroundColor: '#53a5b9',
    flexDirection: 'row'
  },
  imageView: {
    flex: .35,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  img: {
    height: h * 0.042,
    width: w * .061
  },
  textview: {
    flex: .65,
    justifyContent: 'center',
    paddingLeft: '4%'
  },
  texthead: {
    color: 'white',
    ...ifIphoneX({ fontSize: h * 0.026 }, { fontSize: h * 0.03 }),
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
    ...ifIphoneX({ fontSize: h * 0.021 }, { fontSize: h * 0.025 })
  },
  left: {
    flex: 0.13
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
    ...ifIphoneX({ fontSize: h * 0.034 }, { fontSize: h * 0.036, }),
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
    ...ifIphoneX({ fontSize: h * 0.039 }, { fontSize: h * 0.039, }),
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
  activityIndicatorView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  divview: {
    flex: .05,
    alignItems: 'center'
  },
  textstats: {
    ...ifIphoneX({ fontSize: h * 0.026 }, { fontSize: h * 0.03, }),
    color: '#f89e59'
  },
  donationview: {
    flex: .6
  },
  textdonor: {
    ...ifIphoneX({ fontSize: h * 0.02 }, { fontSize: h * 0.025, }),
    color: 'grey'
  },
  leaderboardmain: { 
    flex: 1, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  container: { 
    flex: .8, 
    width: w, 
    shadowOffset: { width: 2 }, 
    shadowOpacity: 0.2 
  },
  title: { 
    flex: .2, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  leaderboardtext: { 
    color: '#2f6884', 
    ...ifIphoneX({ fontSize: h * 0.03 }, { fontSize: h * 0.034 }), 
    fontWeight: '400' 
  },
  leaderboardlist: { 
    flex: .8, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  listview: { 
    height: h * .03, 
    width: w,
    borderRadius: 10, 
    flexDirection: 'row' 
  },
  cost: { 
    flex: .4, 
    alignItems: 'flex-start' 
  },
  textname: {
     ...ifIphoneX({ fontSize: h * 0.019 }, 
      { fontSize: h * 0.022 }), 
      fontWeight: '500' 
    },
  space: { 
    flex: .2 
  },
})