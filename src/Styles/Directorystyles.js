import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: h, width: w } = Dimensions.get('window');

export default StyleSheet.create({
   textlist:{ 
       color: 'steelblue', 
       fontSize: h * 0.02, 
       fontWeight: 'bold' 
    },

   bottomview:{ 
       height: h * .04, 
       width: w , 
       flexDirection: 'row', 
       marginVertical: '1%' 
    },
   headview:{ 
       flex: .05, 
       flexDirection: 'row', 
       justifyContent: 'space-around' 
    },
   heading:{ 
       color: 'black', 
       fontSize: h * 0.02, 
       marginRight:'4%' 
    },
   container:{ 
       flex: .8, 
       width: w , 
       alignSelf: 'center' 
    },
   incontain:{ 
       flex: .8, 
       justifyContent: 'center', 
       marginTop: '5%' 
    },
   list:{ 
    flex: .8, 
    paddingBottom: '4%'   
},
   mainheadtext:{ 
       color: 'white', 
       fontSize: h * 0.03 
    },
   mainheadview:{
        flex: .72, 
        justifyContent: 'center',
         paddingLeft: '4%' },
   img:{ 
       height: h * 0.03, 
       width: w * .048 },
   imageiconview:{ 
       flex: .37, 
       justifyContent: 'center', 
       alignItems: 'flex-end' 
    },
   mainhead:{ 
       flex: .08, 
       backgroundColor: '#F09F61', 
       flexDirection: 'row' 
    },
   main:{ 
       flex: 1, 
       backgroundColor: 'white' 
    },
   textname:{ 
       flex: .34, 
       flexDirection: 'row', 
       alignItems: 'flex-end', 
       justifyContent: "center",
        marginLeft: "3%" },
   textteam:{ 
       flex: .32, 
       flexDirection: 'row', 
       justifyContent: 'center', 
       alignItems: 'center' },
   phone:{ flex: .34, flexDirection: 'row', alignItems: 'center' }


})