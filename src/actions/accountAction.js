import { ACCOUNT } from '../utils/types';
import getAccountData from './../data/accountData';

export const account = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'ACCOUNTDETAILS_REQUEST'
         })
         getAccountData().then((res) => {
            if (res) {
                dispatch({
                    type: 'ACCOUNTDETAILS_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ 
                    type: 'ACCOUNTDETAILS_FAILURE' 
                })

            }
        })
    }
}


