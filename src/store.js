import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createWouterHook } from "redux-first-history/wouter";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/sagas/sagas";
import {currentUserReducer} from "./redux/currentUserReducer";
import {appReducer} from "./redux/appReducer";
import {gameReducer} from "./redux/gameReducer";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = createStore(
    combineReducers({
        router: routerReducer,
        currentUser: currentUserReducer,
        app: appReducer,
        game: gameReducer
    }),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware),
        applyMiddleware(thunk),
    )
);

sagaMiddleware.run(mySaga);

export const history = createReduxHistory(store);
