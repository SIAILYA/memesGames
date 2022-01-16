import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools, devToolsEnhancer} from "redux-devtools-extension";
import {createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from "history";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/sagas/rootSaga";
import {currentUserReducer} from "./redux/currentUserReducer";
import {appReducer} from "./redux/appReducer";
import {gameReducer} from "./redux/gameReducer";
import thunk from "redux-thunk";
import {socketMiddleware} from "./redux/socketMiddleware";

const sagaMiddleware = createSagaMiddleware();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({history: createBrowserHistory()});

const composeEnhancers = composeWithDevTools({
    actionCreators: true, trace:true
});

export const store = createStore(
    combineReducers({
        router: routerReducer,
        currentUser: currentUserReducer,
        app: appReducer,
        game: gameReducer
    }),
    composeEnhancers(
        applyMiddleware(socketMiddleware),
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware),
        applyMiddleware(thunk),
    )
);

sagaMiddleware.run(mySaga);

export const history = createReduxHistory(store);
