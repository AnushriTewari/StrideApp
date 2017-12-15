import getLogoutdata from '../../data/logoutData';
import { LOGOUT } from '../../utils/types';
import { Actions } from 'react-native-router-flux';

export const logout = (data) => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_REQUEST' })
        getlogoutresponse().then((res) => {
            if (res) {
                dispatch({
                    type: 'LOGOUT_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ type: 'LOGOUT_FAILED' })
            }
        })
    }}

   