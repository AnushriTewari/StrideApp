import { DIRECTORY } from '../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    directory_data: {},
};

const DirectoryReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DIRECTORY_DATA_REQUEST':
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case 'DIRECTORY_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                directory_data: action.payload
            }
        case 'DIRECTORY_DATA_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: 'ERROR',
            }
       default:
            return state;
}
};
export default DirectoryReducers;