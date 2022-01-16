import {SET_GAME_DATA, SET_GS_ALLOW_FOREIGN, SETTINGS_UPDATED, PLAYERS_UPDATED, UPDATE_SETTINGS} from "../types";

export const setGameData = (gameData) => {
    console.log("Set game data")
    console.log(gameData.game)

    return dispatch => {
        dispatch({
            type: SET_GAME_DATA,
            payload: gameData.game
        })
    }
}

export const playerConnected = (player) => {
    return dispatch => {
        dispatch({
            type: PLAYERS_UPDATED,
            payload: player
        })
    }
}

export const updateAllowForeign = (state) => {
    return dispatch => {
        dispatch({
            type: SET_GS_ALLOW_FOREIGN,
            payload: state
        })
    }
}

export const settingsUpdated = (settings) => {
    return dispatch => {
        dispatch({
            type: SETTINGS_UPDATED,
            payload: settings
        })
    }
}

