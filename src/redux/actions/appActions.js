import {
    CHANGE_INPUT_GAME_ID,
    HIDE_LOBBY_CREATING_SPINNER,
    HIDE_LOCK_SPINNER, LOAD_OPEN_GAMES, SET_OPEN_GAMES,
    SHOW_LOBBY_CREATING_SPINNER,
    SHOW_LOCK_SPINNER
} from "../types";
import axios from "axios";
import {BACKEND} from "../../config";

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

export const changeInputGameId = (newGameId) => {
    return {
        type: CHANGE_INPUT_GAME_ID,
        payload: newGameId
    }
}

export const loadOpenGames = () => {
    return dispatch => {
        dispatch({
            type: LOAD_OPEN_GAMES
        })
    }
}

export const setOpenGames = (games) => {
    return dispatch => {
        dispatch({
            type: SET_OPEN_GAMES,
            payload: games
        })
    }
}

export async function openGamesLoader() {
    return (await axios.get(BACKEND + "/api/opengames")).data
}

export async function fetchRandomMemeText() {
    return (await axios.get(BACKEND + "/api/random_meme_text")).data
}
