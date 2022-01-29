import {setGameData, playersUpdate, settingsUpdated} from "./actions/gameActions";
import {socket} from "./socket";
import {push} from "redux-first-history";
import {hideLobbyCreatingSpinner} from "./actions/appActions";
import {
    ADD_ANSWER, PLAYERS_UPDATED,
    ROUND_STARTED,
    SET_ANSWERS, SET_BEST_ANSWER, SET_CURRENT_USER, SET_GAME_DATA,
    SET_GAME_STATE,
    SET_GAME_TIMER,
    SET_LEAD_ID, SET_PLAY_CARDS, SET_TIMER_ID, SET_USER_ANSWER,
    SHOW_ANSWERS,
    SHOW_CARDS
} from "./types";
import log from "tailwindcss/lib/util/log";

export const socketMiddleware = (store) => {
    socket.on("update_game_state", (gameData) => {
        console.log("Set game data")
        console.log(gameData)

        store.dispatch({type: SET_GAME_DATA, payload: gameData})
        store.dispatch(hideLobbyCreatingSpinner())
    })

    socket.on("connected_to_lobby", (gameId) => {
        store.dispatch(push("/lobby?gameid=" + gameId))
    })

    socket.on("update_current_user", (user) => {
        console.log("Update current user", user)
        store.dispatch({type: SET_CURRENT_USER, payload: user})
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

    socket.on("game_started", (startGameDelay) => {
        console.log("Game started")

        setTimeout(() => {
            socket.emit("start_new_round")
        }, startGameDelay)

        console.log(store.getState().game.mode)

        store.dispatch(push("/gameboard/" + store.getState().game.mode))
    })

    socket.on("set_game_state", (state) => {
        store.dispatch({type: SET_GAME_STATE, payload: state})
    })

    socket.on("new_round", (roundData) => {
        const timerId = setTimeout(() => {
            socket.emit("give_answer_time_up")
        }, roundData.timer)

        store.dispatch({type: SET_TIMER_ID, payload: timerId})
        store.dispatch({type: ROUND_STARTED, payload: roundData})
    })

    socket.on("set_game_timer", (timer) => {
        store.dispatch({type: SET_GAME_TIMER, payload: timer + Math.trunc(Math.random() * 5)})
    })

    socket.on("show_cards", () => {
        store.dispatch({type: SHOW_CARDS})
    })

    socket.on("player_answered", (answer) => {
        console.log("New answer")
        console.log(answer)

        store.dispatch({type: ADD_ANSWER, payload: answer})
    })

    socket.on("all_players_answered", (answersData) => {
        console.log("All answered")
        console.log(answersData.answers)

        clearTimeout(store.getState().app.timerId)
        const timerId = setTimeout(() => {
            socket.emit("select_best_answer_time_up")
        }, answersData.timer)

        store.dispatch({type: SET_TIMER_ID, payload: timerId})
        store.dispatch({type: SET_ANSWERS, payload: answersData.answers})
        store.dispatch({type: SHOW_ANSWERS})
    })

    socket.on("set_lead_id", (leadId) => {
        console.log("New lead")

        store.dispatch({type: SET_CURRENT_USER, payload: {isLead: (leadId === store.getState().currentUser.userId)}})
        store.dispatch({type: SET_LEAD_ID, payload: leadId})
    })

    socket.on("update_game_progress_state", (gameState) => {
        console.log("Update game state", gameState)

        store.dispatch({type: SET_GAME_STATE, payload: gameState})
    })

    socket.on("update_players", (players) => {
        console.log("Update players", players)

        store.dispatch({type: PLAYERS_UPDATED, payload: players})
    })

    socket.on("set_best_answer", (answerId) => {
        clearTimeout(store.getState().app.timerId)
        store.dispatch({type: SET_BEST_ANSWER, payload: answerId})
    })

    socket.on("init_new_round", (timer) => {
        setTimeout(() => {
            socket.emit("start_new_round")
        }, timer)
    })

    socket.on("set_cards", (cards) => {
        console.log("Set play cards", cards)
        store.dispatch({type: SET_PLAY_CARDS, payload: cards})
    })

    socket.on("update_cards", () => {
        socket.emit("update_cards", store.getState().currentUser.lastAnswerPayloadId)
    })

    return (next) => (action) => {
        next(action);
    }
}
