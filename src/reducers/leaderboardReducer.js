import { LEADERBOARD } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    leaderboard_data: {},

};

const LeaderboardReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case 'LEADERBOARD_DATA_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case 'LEADERBOARD_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                leaderboard_data: action.payload
            }
        case 'LEADERBOARD_DATA_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: 'ERROR',
            }
        default:
            return state;
    }
};
export default LeaderboardReducers;