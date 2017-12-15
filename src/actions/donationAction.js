import getDonationData from '.././data/donationData';
import { DONATION } from '../utils/types';

export const donationPage = () => {
    return (dispatch) => {
        dispatch({
            type: 'DONATION_DATA_REQUEST'
        })
        getDonationData().then((res) => {
            if (res) {
                dispatch({
                    type: 'DONATION_DATA_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ type: 'DONATION_DATA_FAILURE' })
            }
        })
    }
}
