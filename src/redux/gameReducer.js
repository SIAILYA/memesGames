import {CHANGE_GAME_SETTING_ALLOW_FOREIGN, CREATE_GAME, DELETE_PLAYER, JOIN_GAME, SET_GAME, SET_GAME_ID} from "./types";

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
        case CREATE_GAME:
            return {}
        case JOIN_GAME:
            return {}
        case CHANGE_GAME_SETTING_ALLOW_FOREIGN:
            return {}
        case SET_GAME_ID:
            return {}
        case DELETE_PLAYER:
            return {}
        case SET_GAME:
            return {...state, ...action.payload}
        default:
            return state
    }
}
