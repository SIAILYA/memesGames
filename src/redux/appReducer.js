import {
    CHANGE_INPUT_GAME_ID, HIDE_ANSWERS,
    HIDE_LOBBY_CREATING_SPINNER,
    HIDE_LOCK_SPINNER,
    HIDE_OPEN_GAMES_SPINNER,
    SET_GAME_READY,
    SET_OPEN_GAMES,
    SET_RANDOM_MEME_TEXT, SHOW_ANSWERS,
    SHOW_LOBBY_CREATING_SPINNER,
    SHOW_LOCK_SPINNER,
    SHOW_OPEN_GAMES_SPINNER
} from "./types";

const initialState = {
    lockSpinner: false,
    createLobbySpinner: false,
    inputGameId: "",
    openGames: [],
    gameReady: false, // Если true - то редиркет сразу в лобби, без StartGame
    randomMemeText: {pictures: [], texts: []},
    fetchOpenGamesSpinner: true,
    showAnswers: false
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
        case SET_RANDOM_MEME_TEXT:
            return {...state, randomMemeText: action.payload}
        case SHOW_OPEN_GAMES_SPINNER:
            return {...state, fetchOpenGamesSpinner: true}
        case HIDE_OPEN_GAMES_SPINNER:
            return {...state, fetchOpenGamesSpinner: false}
        case SHOW_ANSWERS:
            return {...state, showAnswers: true}
        case HIDE_ANSWERS:
            return {...state, showAnswers: false}
        default:
            return state
    }
}
