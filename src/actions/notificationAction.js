import getNotificationData from '../data/notificationData';
import NOTIFICATION from '../utils/types';

export const NotificationPage = () => {
    return (dispatch) => {
        dispatch({
            type: 'NOTIFICATION_DATA_REQUEST'
        })
        getNotificationData().then((res)=>{
        if (res) {
            dispatch({
                type: 'NOTIFICATION_DATA_SUCCESS',
                payload: res,
            })
        }
        else {
            dispatch({
                type: 'NOTIFICATION_DATA_FAILURE'
            })
        }
    })
    }
}
