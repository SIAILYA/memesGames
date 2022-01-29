import {FETCH_USER_AVATAR, SET_USER_ANSWER, SET_CURRENT_USER, SET_USER_ID, SET_USER_NAME, RESET_ROUND} from "./types";

const initialState = {
    avatar: Math.trunc(Math.random() * 5) + 1,
    // name: "Путин-" + Math.trunc(Math.random() * 10),
    name: "",
    userId: "",
    answer: null,
    lastAnswerPayloadId: null,
    isAdmin: false,
    isLead: false
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload}
        case FETCH_USER_AVATAR:
            return {...state, avatar: action.payload}
        case SET_USER_ID:
            return {...state, userId: action.payload}
        case SET_CURRENT_USER:
            return {...state, ...action.payload}
        case SET_USER_ANSWER:
            return {...state, answer: action.payload.index, lastAnswerPayloadId: action.payload.payloadId}
        case RESET_ROUND:
            return {...state, answer: null}
        default:
            return state
    }
}
