import {HIDE_LOBBY_CREATING_SPINNER, HIDE_LOCK_SPINNER, SHOW_LOBBY_CREATING_SPINNER, SHOW_LOCK_SPINNER} from "../types";

export const showLockSpinner = () => {
    return {
        type: SHOW_LOCK_SPINNER
    }
}

export const hideLockSpinner = () => {
    return {
        type: HIDE_LOCK_SPINNER
    }
}

export const showLobbyCreatingSpinner = () => {
    return {
        type: SHOW_LOBBY_CREATING_SPINNER
    }
}

export const hideLobbyCreatingSpinner = () => {
    return {
        type: HIDE_LOBBY_CREATING_SPINNER
    }
}


