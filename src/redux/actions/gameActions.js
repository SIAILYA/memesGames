import {SET_GAME} from "../types";

export const initSetGame = (gameData) => {
    console.log(gameData)

    return dispatch => {
        dispatch({type: SET_GAME, payload: gameData.game})
    }
}
