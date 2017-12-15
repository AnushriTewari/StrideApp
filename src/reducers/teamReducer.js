import { TEAM } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    team_data: {},
};

const TeamReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TEAM_DATA_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: '',
            }

        case 'TEAM_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                team_data: action.payload
            }
        case 'TEAM_DATA_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: 'ERROR',
            }

        default:
            return state;
    }
};
export default TeamReducers;



