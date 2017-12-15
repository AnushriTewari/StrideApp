import { DASHBOARD } from '../utils/types';
import getDashboardData from './../data/dashboardteamcaptionData';

export const dashboardTeamCaptainData = () => {
    return (dispatch) => {
        dispatch({
            type: 'DASHBOARD_DATA_REQUEST',
        })
        getDashboardData().then((res) => {
            if (res) {
                dispatch({
                    type: 'DASHBOARD_DATA_SUCCESS',
                    payload: res,
                })
            } else {
                dispatch({
                    type: 'DASHBOARD_DATA_FAILURE',
                })
            }
        })
    }
}
