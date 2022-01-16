import {FETCH_USER_AVATAR, SET_CURRENT_USER, SET_USER_ID, SET_USER_NAME} from "./types";

const initialState = {
    avatar: Math.trunc(Math.random() * 5),
    name: "Путин-" + Math.trunc(Math.random() * 10),
    userId: ""
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
        default:
            return state
    }
}
