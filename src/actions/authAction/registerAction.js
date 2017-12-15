import getRegisterData from '../../data/registerData';
import { REGISTER } from '../../utils/types';

export const register = () => {
    return (dispatch) => {
        dispatch({
            type: 'REGISTER_REQUEST',
        })
        getRegisterData().then((res) => {
            if (res) {
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({
                    type: 'REGISTER_FAILED',
                })
            }
        })
    }
}
