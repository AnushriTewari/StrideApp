import { ACCOUNT } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    account_data: {},
};

const AccountReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ACCOUNTDETAILS_REQUEST':
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case 'ACCOUNTDETAILS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                account_data: action.payload
            }
        case 'ACCOUNTDETAILS_FAILURE':
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