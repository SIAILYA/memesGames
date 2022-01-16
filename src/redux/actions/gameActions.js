import {PLAYERS_UPDATED, SET_CURRENT_USER, SET_GAME_DATA, SET_GS_ALLOW_FOREIGN, SETTINGS_UPDATED} from "../types";

export const setGameData = (gameData) => {
    console.log("Set game data")
    console.log(gameData.game)

    return dispatch => {
        dispatch({
            type: SET_GAME_DATA,
            payload: gameData.game
        })
        dispatch({
            type: SET_CURRENT_USER,
            payload: gameData.player
        })
    }
}

export const playersUpdate = (players) => {
    return dispatch => {
        dispatch({
            type: PLAYERS_UPDATED,
            payload: players
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

