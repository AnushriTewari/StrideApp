import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
  LIST,
  LIST_USERS
} from '../utils/types';

//Configuration setting for Axios
let instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

//List User from Server
export function listUsers (){
    return (dispatch) => {
     	dispatch({ type: LIST.LIST_REQUEST });
     	instance.get(LIST_USERS)
        .then(function (response) {
            console.log("DATA--", response);
            list_user_success(dispatch, response.data);
        })
        .catch(function (error) {
            console.log("ERROR--", error);
            list_user_fail(dispatch);
        });
	};
};

//list_user_success
const list_user_success = (dispatch, data) => {
    dispatch({
        type: LIST.LIST_REQUEST_SUCCESS,
        payload: data
    });
};

//list_user_fail
const list_user_fail = (dispatch) => {
    dispatch({
        type: LIST.LIST_REQUEST_FAIL
    });
};
