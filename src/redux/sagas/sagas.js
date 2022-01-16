import {LOCATION_CHANGE, push} from "redux-first-history";
import {call, put, takeEvery, select} from "redux-saga/effects";
import axios from "axios";
import {BACKEND} from "../../config";
import {FETCH_CREATE_GAME} from "../types";
import {hideLobbyCreatingSpinner, showLobbyCreatingSpinner} from "../actions/appActions";
import {initSetGame} from "../actions/gameActions";


export default function* rootSaga() {
    yield takeEvery(LOCATION_CHANGE, changeLocation);
    yield takeEvery(FETCH_CREATE_GAME, fetchCreateGameWorker);
}


function* changeLocation({payload}) {
    const {location, action} = payload;
    yield console.log("LOCATION_CHANGE", location, action);
}

function* fetchCreateGameWorker() {
    console.log(1)
    yield put(showLobbyCreatingSpinner())
    console.log(2)
    const user = yield select(state => state.currentUser)
    console.log(user)
    const gameState = yield call(fetchCreateGame, user.name, user.avatar)
    console.log(gameState)
    yield put(initSetGame(gameState))
    console.log(5)
    yield put(hideLobbyCreatingSpinner())
    yield put(push("/lobby"))
}

async function fetchCreateGame(name, avatar) {
    return (await axios.post(BACKEND + "/api/create_game", {name, avatar})).data
}
