import getLeaderboardData from '.././data/leaderboardData';
import { LEADERBOARD } from '../utils/types';

export const LeaderBoardPage = () => {
    return (dispatch) => {
        dispatch({
            type: 'LEADERBOARD_DATA_REQUEST'
        })
        getLeaderboardData().then((res) => {
            if (res) {
                dispatch({
                    type: 'LEADERBOARD_DATA_SUCCESS',
                    payload: res,
                })
            }
            else {
                dispatch({
                    type: 'LEADERBOARD_DATA_FAILURE'
                })
            }
        })
    }
}
