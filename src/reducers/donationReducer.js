import { DONATION } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    donation_data: {},
};

const DonationReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DONATION_DATA_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case 'DONATION_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                donation_data: action.payload
            }
        case 'DONATION_DATA_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: 'ERROR',
            }
        default:
            return state;
    }
};
export default DonationReducers;