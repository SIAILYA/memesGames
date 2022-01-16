import {SET_GAME_DATA, SET_GS_ALLOW_FOREIGN, SETTINGS_UPDATED, PLAYERS_UPDATED} from "./types";

const initialState = {
    gameId: "",
    players: [],
    state: "",
    status: "",
    settings: {
        allowForeign: true
    }
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_DATA:
            return {...state, ...action.payload}
        case PLAYERS_UPDATED:
            return {...state, players: action.payload.players}
        case SETTINGS_UPDATED:
            return {...state, settings: action.payload}
        case SET_GS_ALLOW_FOREIGN:
            return {...state, settings: {...state.settings, allowForeign: action.payload}}
        default:
            return state
    }
}
