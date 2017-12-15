import { LOGIN} from '../../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    login_data: {},
};

const Reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login_data: action.payload,
                isLoading: false
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: 'ERROR',
                isLoading: false
            }
         
        default:
            return state;
    }
};
export default Reducers;