import {
    SET_GAME_DATA,
    SET_GS_ALLOW_FOREIGN,
    SETTINGS_UPDATED,
    PLAYERS_UPDATED,
    SET_GAME_TIMER,
    SET_PLAY_CARDS,
    RESET_GAME,
    ADD_ANSWER,
    SET_ANSWERS,
    SET_ROUND_PAYLOAD,
    SET_LEAD_ID,
    SET_GAME_STATE,
    SELECT_BEST_ANSWER, SET_BEST_ANSWER, RESET_ROUND
} from "./types";

const initialState = {
    gameId: "",
    players: [],
    leadId: "",
    state: "",
    status: "",
    roundPayload: null,
    mode: "",
    playCards: [],
    answers: [],
    settings: {
        allowForeign: true
    },
    timer: 5000,
    bestAnswerId: ""
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_DATA:
            console.log(action.payload)
            return {...state, ...action.payload}
        case PLAYERS_UPDATED:
            return {...state, players: action.payload}
        case SETTINGS_UPDATED:
            return {...state, settings: action.payload}
        case SET_GS_ALLOW_FOREIGN:
            return {...state, settings: {...state.settings, allowForeign: action.payload}}
        case SET_GAME_TIMER:
            return {...state, timer: action.payload}
        case SET_PLAY_CARDS:
            return {...state, playCards: action.payload}
        case RESET_GAME:
            return initialState
        case ADD_ANSWER:
            return {...state, answers: [...state.answers, action.payload]}
        case SET_ANSWERS:
            return {...state, answers: action.payload}
        case SET_ROUND_PAYLOAD:
            return {...state, roundPayload: action.payload}
        case SET_LEAD_ID:
            return {...state, leadId: action.payload}
        case SET_GAME_STATE:
            return {...state, state: action.payload}
        case SELECT_BEST_ANSWER:
            return {...state, bestAnswerId: action.payload}
        case SET_BEST_ANSWER:
            return {...state, bestAnswerId: action.payload}
        case RESET_ROUND:
            return {...state, answers: [], bestAnswerId: ""}
        default:
            return state
    }
}
