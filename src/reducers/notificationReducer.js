import { NOTIFICATION } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    notification_data: {},
};

const NotificationReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NOTIFICATION_DATA_REQUEST':
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case 'NOTIFICATION_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                notification_data: action.payload
            }
        case 'NOTIFICATION_DATA_FAILURE':
        return {
            ...state,
            isLoading: false,
            error: 'ERROR',
        }
        default:
            return state;
    }
};
export default NotificationReducers;