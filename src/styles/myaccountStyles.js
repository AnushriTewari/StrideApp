import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    height: WINDOW_HEIGHT * 0.86,
    backgroundColor: 'white'
  },
  headerView: {
    ...ifIphoneX({ height: WINDOW_HEIGHT * .07, }, { height: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.07 : WINDOW_HEIGHT * .085, }),
    backgroundColor: '#4890B0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * .0285, }, { fontSize: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.285 : WINDOW_HEIGHT * .03, }),
    color: 'white',
    fontWeight: '600'
  },
  container: {
    height: WINDOW_HEIGHT * 0.65,
    marginHorizontal: '2%',
    justifyContent: 'center',
    marginTop: '1%'
  },
  rowView: {
    flex: .12,
    flexDirection: 'row'
  },
  rowText: {
    ...ifIphoneX({ flex: .25 }, { flex: (Platform.OS === 'iOS') ? .2 : .25, }),
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor:'white',
    ...ifIphoneX({ flex: .75 }, { flex: (Platform.OS === 'iOS') ? .8 : .75, }),
    justifyContent: 'center',
    ...ifIphoneX({paddingLeft: '0%' }, { paddingLeft: '1%'}),

  },
  inputStyles: {
    ...ifIphoneX({ height: WINDOW_HEIGHT * 0.055, }, { height: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.055 : WINDOW_HEIGHT * 0.06, }),
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: WINDOW_WIDTH * 0.04,
    ...ifIphoneX({ paddingLeft: '2%' }, { paddingLeft: '5%' }),

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
  checkBoxView: {
    flex: .12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    ...ifIphoneX({ height: WINDOW_HEIGHT * 0.063 }, { height: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.065 : WINDOW_HEIGHT * 0.075 }),
    width: WINDOW_WIDTH * 0.55,
    backgroundColor: '#EF964D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Update: {
    color: 'white',
    ...ifIphoneX({ fontSize: WINDOW_HEIGHT * 0.026, }, { fontSize: (Platform.OS === 'iOS') ? WINDOW_HEIGHT * 0.027 : WINDOW_HEIGHT * 0.03, }),
    fontWeight: '600'
  }
});