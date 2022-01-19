import {setGameData, playersUpdate, settingsUpdated} from "./actions/gameActions";
import {socket} from "./socket";
import {push} from "redux-first-history";
import {hideLobbyCreatingSpinner} from "./actions/appActions";
import {
    ADD_ANSWER, PLAYERS_UPDATED,
    ROUND_STARTED,
    SET_ANSWERS, SET_BEST_ANSWER,
    SET_GAME_STATE,
    SET_GAME_TIMER,
    SET_LEAD_ID,
    SHOW_ANSWERS,
    SHOW_CARDS
} from "./types";
import log from "tailwindcss/lib/util/log";

export const socketMiddleware = (store) => {
    socket.on("room_created", (gameData) => {
        console.log("Game room created")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(hideLobbyCreatingSpinner())
        store.dispatch(push("/lobby?gameid=" + gameData.game.gameId))
    })

    socket.on("connected_to_room", (gameData) => {
        console.log("Connected to game")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(push("/lobby?gameid=" + gameData.game.gameId))
    })

    socket.on('player_connected', (players) => {
        console.log("Player connected")
        console.log(players)

        store.dispatch(playersUpdate(players));
    });

    socket.on("player_leave", (players) => {
        console.log("Player leave")
        console.log(players)

        store.dispatch(playersUpdate(players));
    })

    socket.on("player_kicked", (kickedId) => {
        console.log("Player kicked")
        console.log(kickedId)
    })

    socket.on("you_are_kicked", () => {
        console.log("You are kicked")
        //TODO: Страница кика
        window.onbeforeunload = () => {}
        window.location.href = "/kicked"
    })

    socket.on("settings_updated", (settings) => {
        console.log("Settings updated")
        console.log(settings)

        store.dispatch(settingsUpdated(settings))
    })

    socket.on("game_started", () => {
        console.log("Game started")

        store.dispatch(push("/gameboard/" + store.getState().game.mode))
    })

    socket.on("set_game_state", (state) => {
        store.dispatch({type: SET_GAME_STATE, payload: state})
    })

    socket.on("new_round", (roundData) => {
        store.dispatch({type: ROUND_STARTED, payload: roundData})
    })

    socket.on("set_game_timer", (timer) => {
        store.dispatch({type: SET_GAME_TIMER, payload: timer})
    })

    socket.on("show_cards", () => {
        store.dispatch({type: SHOW_CARDS})
    })

    socket.on("player_answered", (answer) => {
        console.log("New answer")
        console.log(answer)

        store.dispatch({type: ADD_ANSWER, payload: answer})
    })

    socket.on("all_players_answered", (answers) => {
        console.log("All answered")
        console.log(answers)

        store.dispatch({type: SET_ANSWERS, payload: answers})
        store.dispatch({type: SHOW_ANSWERS})
    })

    socket.on("set_lead_id", (leadId) => {
        console.log("New lead")

        store.dispatch({type: SET_LEAD_ID, payload: leadId})
    })

    socket.on("update_game_state", (gameState) => {
        console.log("Update game state")
        console.log(gameState)

        store.dispatch({type: SET_GAME_STATE, payload: gameState})
    })

    socket.on("update_players", (players) => {
        console.log(players)

        store.dispatch({type: PLAYERS_UPDATED, payload: players})
    })

    socket.on("set_best_answer", (answerId) => {
        store.dispatch({type: SET_BEST_ANSWER, payload: answerId})
    })

    return (next) => (action) => {
        next(action);
    }
}
