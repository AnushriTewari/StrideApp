import { LOGOUT } from '../../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    logout_data: {},
};
const logoutReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                logout_data: action.payload,
                isLoading: false
            }
        case 'LOGOUT_FAILED':
            return {
                ...state,
                error: 'ERROR',
                isLoading: false
            }
        default:
            return state;
    }
};
export default logoutReducers;