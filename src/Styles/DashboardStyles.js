import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
   dashboardmain: { 
       flex: 1 
    },
    dot:{ 
        borderWidth:1, 
        borderColor:'#dcdcdc' 
    },
    progressView:{ 
        flex: 0.3, 
        backgroundColor: 'white', 
        alignItems: 'center' 
    },
    dashboardview:{ 
        flex: 0.1, 
        justifyContent: 'center'
    },
    dashboardcontainer:{ 
        flex: 0.5, 
        backgroundColor:'white' 
    },
    dashboardcontainerec:{ 
        flex: 0.6, 
        backgroundColor:'white' 
    },
    dashboardtext:{ 
        color: 'white', 
        textAlign: 'center', 
        fontWeight: '500' 
    },
    percent:{ 
        fontSize: WINDOW_WIDTH * 0.042, 
        fontWeight: '500',
        color: '#f89e59' 
    },
    eventname:{ 
        color: "#2f658c", 
        fontSize: WINDOW_WIDTH * 0.058, 
        fontWeight: '400', 
        textAlign: 'center'
    },
    swipertext:{ 
        fontSize: WINDOW_HEIGHT * 0.1, 
        color:"#dcdcdc" ,
        paddingBottom:'10%'
    },
    nextview:{ 
        flex: 0.25, 
        justifyContent:'flex-start', 
        backgroundColor:'white'
     },
    stats:{ 
        color: "#f89e59", 
        fontSize: WINDOW_WIDTH * 0.036, 
        fontWeight:'400', 
        textAlign:'center', 
        paddingTop:'4%'
    },
    donornum:{ 
        color: "#38383a", 
        fontSize: WINDOW_WIDTH * 0.033, 
        fontWeight: '400', 
        textAlign: 'center', 
        paddingTop: '1%' 
    },
    boardcontainer:{
        flex:0.5
    },
    boardcontainerec:{
        flex:0.4
    },
    dashboardlink:{ 
        flex: 0.5, 
        flexDirection: 'row' 
    },
    icondashboard:{ 
        flex: 0.6, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        paddingBottom: '5%' 
    },
    activityindicator:{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%' 
      },
    boardview:{ 
        flex: 0.4, 
        alignItems: 'center' 
    },
    dashboardimg:{
        width: WINDOW_WIDTH * 0.07,
        height: WINDOW_WIDTH * 0.07 
    },
    notificationimg:{ 
        width: WINDOW_WIDTH * 0.05, 
        height: WINDOW_WIDTH * 0.05 
    },
    notification:{ 
        flex: 0.5, 
        backgroundColor: '#44859e' 
    },
    team:{ 
        flex: 0.5, 
        backgroundColor: '#3a6d89' 
    },
    leaderboard:{ 
        flex: 0.5, 
        backgroundColor: '#53a5b9' 
    },
    donation:{ 
        flex: 0.5, 
        backgroundColor: '#f89e59' 
    }

})