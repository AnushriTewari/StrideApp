import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'


export default StyleSheet.create({
   main:{ 
       flex: 1 ,
       backgroundColor:'white'
    },
   headerview:{ 
       flex: .07, 
       backgroundColor: '#f89e59', 
       flexDirection: 'row' 
    },
   imageview:{ 
       flex: .35, 
       justifyContent: 'center', 
       alignItems: 'flex-end' 
    },
   image:{ 
       ...ifIphoneX({ height: h * 0.030}, { height: h * 0.034 }), 
        ...ifIphoneX({ width: w * .052}, {  width: w * .052 }) 
    },
   titleview:{ 
       flex: .65, 
       justifyContent: 'center', 
       paddingLeft: '4%' 
    },
   texthead:{
       color: 'white', 
       fontSize: h * 0.03, 
       fontWeight: '500'
    },
   body:{ 
       flex: .8, 
       width: w 
    },
   flatlist:{ 
       flex: .8, 
       justifyContent: 'center', 
       marginTop: '10%'
    },
   listview:{ 
       height: h * .03, 
       width: w , 
       flexDirection: 'row' 
    },
   name:{ 
       flex: .4, 
       alignItems: 'flex-start', 
       justifyContent: 'center', 
       marginLeft: '12%' 
    },
   amount:{ 
       flex: .2, 
       justifyContent: 'center', 
       alignItems: 'center',
       marginLeft: '10%' 
    },
   date:{ 
       flex: .35, 
       justifyContent: 'center', 
       alignItems: 'flex-start', 
       marginLeft: "15%" 
    },
   nametext:{ 
       color: '#2f6884', 
       ...ifIphoneX({ fontSize: h * 0.016 }, { fontSize: h * 0.018, }), 
       fontWeight: '500' 
    },
    bottomview:{ 
        flex: 0.05 
    },
    amountcollected:{ 
        flex: .15, 
        width: w * .7, 
        alignSelf: 'center' 
    },
    donornumberview:{ 
        flex: .6, 
        alignItems: 'center', 
        paddingTop: '3%', 
        justifyContent: 'flex-start' 
    },
    numberdonor:{ 
        ...ifIphoneX({ fontSize: h * 0.020 }, { fontSize: h * 0.022, }), 
        color: 'grey' 
    },
    viewdiv:{ 
        flex: .45, 
        alignItems: 'center' 
    },
    statics:{ 
        color: '#f89e59', 
        ...ifIphoneX({ fontSize: h * 0.022 }, { fontSize: h * 0.025, }) 
    },

})