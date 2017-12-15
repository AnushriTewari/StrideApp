import { REGISTER } from '../../utils/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    register_data: {},
};

const RegisterReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'REGISTER_REQUEST':
            return {
                ...state,
                isLoading: true
        }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                register_data: action.payload,
                isLoading: false
            }
        case 'REGISTER_FAILED':
            return {
                ...state,
                isLoading: false,
                error: 'ERROR'
            }
        default:
            return state;
    }
};
export default RegisterReducers;

