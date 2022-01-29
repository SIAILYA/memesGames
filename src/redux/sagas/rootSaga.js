import {LOCATION_CHANGE, push, replace} from "redux-first-history";
import {all, call, put, select, takeEvery} from "redux-saga/effects";
import {fetchOpenGames, fetchRandomMemeText, setOpenGames, showLobbyCreatingSpinner} from "../actions/appActions";
import {socket} from "../socket";
import {
    CREATE_GAME,
    FETCH_OPEN_GAMES,
    FETCH_RANDOM_MEME_TEXT,
    HIDE_ANSWERS,
    HIDE_OPEN_GAMES_SPINNER,
    INCREASE_ROUND,
    JOIN_GAME,
    KICK_PLAYER,
    RESET_ROUND,
    ROUND_STARTED,
    SELECT_BEST_ANSWER,
    SET_RANDOM_MEME_TEXT,
    SET_ROUND_PAYLOAD,
    SET_USER_ANSWER,
    SHOW_CARDS,
    SHOW_OPEN_GAMES_SPINNER,
    START_GAME,
    UPDATE_SETTINGS
} from "../types";


export default function* rootSaga() {
    yield all([
            takeEvery(UPDATE_SETTINGS, updateSettingsWorker),
            takeEvery(LOCATION_CHANGE, changeLocation),
            takeEvery(CREATE_GAME, createGameWorker),
            takeEvery(JOIN_GAME, joinGameWorker),
            takeEvery(FETCH_OPEN_GAMES, fetchOpenGamesWorker),
            takeEvery(KICK_PLAYER, kickPlayerWorker),
            takeEvery(START_GAME, startGameWorker),
            takeEvery(FETCH_RANDOM_MEME_TEXT, fetchRandomMemeTextWorker),
            takeEvery(SHOW_CARDS, fetchPlayCardsWorker),
            takeEvery(ROUND_STARTED, roundStartedWorker),
            takeEvery(SET_USER_ANSWER, answerWorker),
            takeEvery(SELECT_BEST_ANSWER, bestAnswerWorker),
        ]
    )
}


function* changeLocation({payload}) {
    const {location, action} = payload;
    yield console.log("LOCATION_CHANGE", location, action);
}

function* createGameWorker() {
    yield put(showLobbyCreatingSpinner())
    const user = yield select(state => state.currentUser)
    yield socket.emit("create_room", {name: user.name, avatar: user.avatar})
}

function* joinGameWorker() {
    const user = yield select(state => state.currentUser)
    const gameId = yield select(state => state.app.inputGameId)
    yield socket.emit("connect_room", {gameId: gameId, name: user.name, avatar: user.avatar})
}

function* updateSettingsWorker() {
    const settings = yield select(state => state.game.settings)
    yield socket.emit("change_settings", {settings: settings})
}

function* fetchOpenGamesWorker() {
    yield put({type: SHOW_OPEN_GAMES_SPINNER})
    const games = yield call(fetchOpenGames)
    yield put(setOpenGames(games))
    yield put({type: HIDE_OPEN_GAMES_SPINNER})
}

function* kickPlayerWorker({payload}) {
    yield socket.emit("kick_player", payload)
}

function* startGameWorker() {
    yield socket.emit("start_game")
}

function* fetchRandomMemeTextWorker() {
    const items = yield call(fetchRandomMemeText)
    yield put({type: SET_RANDOM_MEME_TEXT, payload: items})
}

function* fetchPlayCardsWorker() {
    // const gameMode = yield select(state => state.game.mode)
    // const cards = yield call(fetchPlayCards, gameMode)
    // yield put({type: SET_PLAY_CARDS, payload: cards.cards})
    yield socket.emit("get_cards")
}

function* answerWorker({payload}) {
    yield socket.emit("answer", payload)
}

function* roundStartedWorker({payload}) {
    yield put({type: RESET_ROUND})
    yield put({type: HIDE_ANSWERS})
    yield put({type: INCREASE_ROUND})
    yield put({type: SET_ROUND_PAYLOAD, payload: payload.roundPayload})
}

function* bestAnswerWorker({payload}) {
    console.log(payload)

    yield socket.emit("select_best_answer", payload)
}
