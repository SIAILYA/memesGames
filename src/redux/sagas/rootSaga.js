import {LOCATION_CHANGE} from "redux-first-history";
import {all, put, select, takeEvery} from "redux-saga/effects";
import {showLobbyCreatingSpinner} from "../actions/appActions";
import {socket} from "../socket";
import {CREATE_GAME, JOIN_GAME, UPDATE_SETTINGS} from "../types";


export default function* rootSaga() {
    yield all([
            takeEvery(UPDATE_SETTINGS, updateSettingsWorker),
            takeEvery(LOCATION_CHANGE, changeLocation),
            takeEvery(CREATE_GAME, createGameWorker),
            takeEvery(JOIN_GAME, joinGameWorker),
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
