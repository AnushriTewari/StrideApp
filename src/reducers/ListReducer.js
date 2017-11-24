import {
    LIST
} from '../utils/types';


const INITIAL_STATE = {
    list_data: null,
    isLoading: false,
    error: '',
    login_data : {},
    dashboard_data : {},
    donation_data : {},
    team_data: {},
    leaderboard_data: {},
    notification_data: {},
};

const Reducers= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST.LIST_REQUEST:
            return { 
                ...state, 
                isLoading : true, 
                error : '' 
            }

        case LIST.LIST_REQUEST_SUCCESS:
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
                list_data : action.payload 
            }

        case 'LOGIN_SUCCESS':
            return { 
                ...state, 
                login_data : action.payload
            }
            
            case 'DASHBOARD_DATA':
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
                dashboard_data : action.payload 
            }
     
            case 'DONATION_DATA':
         
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
                donation_data : action.payload 
            }
            case 'TEAM_DATA':
         
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
               team_data : action.payload 
            }
     
            case 'LEADERBOARD_DATA':
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
               leaderboard_data : action.payload 
            }
            case 'NOTIFICATION_DATA':
          
            return { 
                ...state, 
                isLoading : false, 
                error : '', 
               notification_data : action.payload 
            }
        default:
        return state;
    }
};
export default Reducers;