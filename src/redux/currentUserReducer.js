import {SET_USER_AVATAR, SET_USER_NAME} from "./types";

const initialState = {
    avatar: "",
    name: "",
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload}
        case SET_USER_AVATAR:
            return {...state, avatar: action.payload}
        default: return state
    }
}
