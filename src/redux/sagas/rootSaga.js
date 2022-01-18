import {LOCATION_CHANGE} from "redux-first-history";
import {all, call, put, select, takeEvery} from "redux-saga/effects";
import {fetchRandomMemeText, openGamesLoader, setOpenGames, showLobbyCreatingSpinner} from "../actions/appActions";
import {socket} from "../socket";
import {
    CREATE_GAME,
    FETCH_RANDOM_MEME_TEXT,
    JOIN_GAME,
    KICK_PLAYER,
    LOAD_OPEN_GAMES, SET_RANDOM_MEME_TEXT,
    START_GAME,
    UPDATE_SETTINGS
} from "../types";


export default function* rootSaga() {
    yield all([
            takeEvery(UPDATE_SETTINGS, updateSettingsWorker),
            takeEvery(LOCATION_CHANGE, changeLocation),
            takeEvery(CREATE_GAME, createGameWorker),
            takeEvery(JOIN_GAME, joinGameWorker),
            takeEvery(LOAD_OPEN_GAMES, loadOpenGamesWorker),
            takeEvery(KICK_PLAYER, kickPlayerWorker),
            takeEvery(START_GAME, startGameWorker),
            takeEvery(FETCH_RANDOM_MEME_TEXT, fetchRandomMemeTextWorker),
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

function* loadOpenGamesWorker() {
    const games = yield call(openGamesLoader)
    yield put(setOpenGames(games))
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
