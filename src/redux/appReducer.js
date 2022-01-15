import {HIDE_LOBBY_CREATING_SPINNER, HIDE_LOCK_SPINNER, SHOW_LOBBY_CREATING_SPINNER, SHOW_LOCK_SPINNER} from "./types";

const initialState = {
    lockSpinner: false,
    createLobbySpinner: false
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
        default:
            return state
    }
}
