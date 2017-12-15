import getTeamData from './../data/teamData';
import { TEAM } from '../utils/types';

export const TeamPage = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'TEAM_DATA_REQUEST' 
        })
        getTeamData().then((res) => {
            if (res) {
                dispatch({
                    type: 'TEAM_DATA_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({ 
                    type: 'TEAM_DATA_FAILURE'
                 })
            }
        })
    }
}
