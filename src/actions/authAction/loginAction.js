import getLogindata from '../../data/loginData';
import { LOGIN } from '../../utils/types';
import { Actions } from 'react-native-router-flux';

export const login = (data) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_REQUEST' })
        getLogindata().then((res) => {
            if (res) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ type: 'LOGIN_FAILED' })
            }
        })
    }}

   