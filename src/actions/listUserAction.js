import { AsyncStorage } from 'react-native';
import axios from 'axios';
import Logindata from '.././Data/LoginData';
import DashboardTeamCaption from '.././Data/DashboardTeamCaptionData';
import DonationData from '.././Data/DonationData';
import TeamData from '.././Data/TeamData';
import LeaderBoardData from '.././Data/LeaderboardData';
import Notificationdata from '../Data/NotificationData';
import {Actions} from 'react-native-router-flux';

import {
  LIST,
  LIST_USERS
} from '../utils/types';

//Configuration setting for Axios
let instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});


export const login = (data) => {
   return (dispatch)=>{
     dispatch({
        type: 'LOGIN_SUCCESS',
        payload: Logindata,
    })
    Actions.intro();
    }
 }
 export const dashboardTeamCaptionData = () => {
    
   return (dispatch)=>{
       dispatch({
        type: 'DASHBOARD_DATA',
        payload: DashboardTeamCaption, 
    })
    }
 }

 export const donationPage = () => {
    
   return (dispatch)=>{
       dispatch({
        type: 'DONATION_DATA',
        payload: DonationData, 
    })
    }
 }
 export const TeamPage = () => {
    
   return (dispatch)=>{
       dispatch({
        type: 'TEAM_DATA',
        payload: TeamData, 
    })
    }
 }
 export const LeaderBoardPage = () => {
    
   return (dispatch)=>{
       dispatch({
        type: 'LEADERBOARD_DATA',
        payload: LeaderBoardData, 
    })
    }
 }
 export const NotificationPage = () => {
    
   return (dispatch)=>{
       dispatch({
        type: 'NOTIFICATION_DATA',
        payload: Notificationdata, 
    })
    console.log('notifyme....', Notificationdata);
    }
 }
