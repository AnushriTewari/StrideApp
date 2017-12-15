import { DASHBOARD } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    dashboard_data: {},
};

const DashboardReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DASHBOARD_DATA_REQUEST':
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case 'DASHBOARD_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                dashboard_data: action.payload
            }
        case 'DASHBOARD_DATA_FAILURE':
            return{
                ...state,
                isLoading: false,
                error: 'ERROR'
            }

        default:
            return state;
    }
};
export default DashboardReducers;