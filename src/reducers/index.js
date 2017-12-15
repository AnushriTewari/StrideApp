import { combineReducers } from 'redux';
import Reducers from './authReducer/loginReducer';
import RegisterReducers from './authReducer/registerReducer';
import DashboardReducers from './dashboardReducer';
import DirectoryReducers from './directoryReducer';
import DonationReducers from './donationReducer';
import NotificationReducers from './notificationReducer';
import NewupdateReducers from './newupdateReducer';
import TeamReducers from './teamReducer';
import LeaderboardReducers from './leaderboardReducer';
import LogoutReducers from './authReducer/logoutReducer';

export default combineReducers({
    Reducers,
    RegisterReducers,
    DashboardReducers,
    DirectoryReducers,
    DonationReducers,
    TeamReducers,
    NotificationReducers,
    NewupdateReducers,
    LeaderboardReducers
});
