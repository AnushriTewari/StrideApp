import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
   underdevelopement:{ 
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center' ,
       backgroundColor:'white'
    },
   text:{ 
       fontSize:20 
    }
})