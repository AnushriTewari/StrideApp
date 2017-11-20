import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1
  },
  dot: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: '35%'
  },
  activedot: {
    marginBottom: '35%'
  },
    intromain: {
        flex: 1
      },
      introcontainer: { 
        flex: 0.88, 
        flexDirection: 'column', 
        backgroundColor: 'white' 
      },
      introwrap:{ 
        flex: 0.9
       },
       introimage:{ 
         flex: 0.6, 
         alignItems: 'center', 
         justifyContent: 'flex-end', 
         paddingBottom: "5%" 
        },
      introimagestyle:{ 
        width: w * 0.3, 
        height: w * 0.3 
      },
      introtextContent:{ 
        flex: 0.4, 
        alignItems: 'center', 
        justifyContent: 'flex-start' 
      },
      introtextSkip:{ 
        textAlign: 'center', 
        fontSize: w * 0.045, 
        color: "#d38b3f" 
      },
      introbuttonView: {
        flex: 0.11
      },
      introbuttontext:{ 
          color: 'white', 
          fontSize: w * 0.05 
        },
      introtextStyle: {
        color: '#426387',
        fontSize: w * 0.05,
        fontWeight: "400"
      },
      intronextclick:{ 
        flex: 0.1, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }
  });