import { NEWUPDATE } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    newupdate_data: {},
};

const NewupdateReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEWUPDATE_DATA_REQUEST':
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case 'NEWUPDATE_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                newupdate_data: action.payload
            }
        case 'NEWUPDATE_DATA_FAILURE':
        return {
            ...state,
            isLoading: false,
            error: 'ERROR',
        }
        default:
            return state;
    }
};
export default NewupdateReducers;