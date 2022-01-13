import {SET_USER_NAME} from "./types";

export const setCurrentUserName = (newName) => {
    console.log(newName)
    return {
        type: SET_USER_NAME,
        payload: newName
    }
}
