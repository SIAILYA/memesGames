import {combineReducers} from "redux";
import {currentUserReducer} from "./currentUserReducer";
import {appReducer} from "./appReducer";
import {gameReducer} from "./gameReducer";

export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    app: appReducer,
    game: gameReducer
})
