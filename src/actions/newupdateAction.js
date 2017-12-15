import getNewupdateData from '../data/newupdateData';
import NEWUPDATE from '../utils/types';

export const NewupdatePage = () => {
    return (dispatch) => {
        dispatch({
            type: 'NEWUPDATE_DATA_REQUEST'
        })
        getNewupdateData().then((res)=>{
        if (res) {
            dispatch({
                type: 'NEWUPDATE_DATA_SUCCESS',
                payload: res,
            })
        }
        else {
            dispatch({
                type: 'NEWUPDATE_DATA_FAILURE'
            })
        }
    })
    }
}
