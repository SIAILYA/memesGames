import {FETCH_USER_AVATAR, SET_USER_ID, SET_USER_NAME} from "./types";

const initialState = {
    avatar: 1,
    name: "",
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
        default:
            return state
    }
}
