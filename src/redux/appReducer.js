import {
    CHANGE_INPUT_GAME_ID,
    HIDE_LOBBY_CREATING_SPINNER,
    HIDE_LOCK_SPINNER, SET_GAME_READY, SET_OPEN_GAMES,
    SHOW_LOBBY_CREATING_SPINNER,
    SHOW_LOCK_SPINNER
} from "./types";

const initialState = {
    lockSpinner: false,
    createLobbySpinner: false,
    inputGameId: "",
    openGames: [],
    gameReady: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOCK_SPINNER:
            return {...state, lockSpinner: true}
        case HIDE_LOCK_SPINNER:
            return {...state, lockSpinner: false}
        case SHOW_LOBBY_CREATING_SPINNER:
            return {...state, createLobbySpinner: true}
        case HIDE_LOBBY_CREATING_SPINNER:
            return {...state, createLobbySpinner: false}
        case CHANGE_INPUT_GAME_ID:
            return {...state, inputGameId: action.payload}
        case SET_OPEN_GAMES:
            return {...state, openGames: action.payload}
        case SET_GAME_READY:
            return {...state, gameReady: true}
        default:
            return state
    }
}
