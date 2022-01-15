import axios from "axios";
import {BACKEND} from "../../config";
import {HIDE_LOBBY_CREATING_SPINNER, SET_GAME, SET_USER_ID, SHOW_LOBBY_CREATING_SPINNER} from "../types";
import {createRoom} from "../../sockets/connectors";

export const createGame = (name, avatar, cb) => {
    return async dispatch => {
        dispatch({type: SHOW_LOBBY_CREATING_SPINNER})

        const res = (await axios.post(BACKEND + "/api/create_game", {name, avatar})).data

        dispatch({
            type: SET_GAME,
            payload: res.game
        })

        dispatch({
            type: SET_USER_ID,
            payload: res.playerId
        })

        dispatch({type: HIDE_LOBBY_CREATING_SPINNER})

        createRoom(res.game.gameId)
        cb()
    }
}
