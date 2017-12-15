import { DIRECTORY } from '../utils/types';
import getDirectoryData from './../data/directoryData';

export const directoryPage = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'DIRECTORY_DATA_REQUEST'
         })
        getDirectoryData().then((res) => {
            if (res) {
                dispatch({
                    type: 'DIRECTORY_DATA_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ 
                    type: 'DIRECTORY_DATA_FAILURE' 
                })

            }
        })
    }
}


