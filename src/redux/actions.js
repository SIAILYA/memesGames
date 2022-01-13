import {FETCH_USER_AVATAR, SET_USER_NAME} from "./types";
import axios from "axios";
import {BACKEND} from "../config";

export const setCurrentUserName = (newName) => {
    return {
        type: SET_USER_NAME,
        payload: newName
    }
}

export const fetchCurrentUserAvatar = () => {
    return async dispatch => {
        const response = await axios.get(BACKEND + "/utils/random_avatar")

        dispatch({
            type: FETCH_USER_AVATAR,
            payload: response.data
        })
    }
}
