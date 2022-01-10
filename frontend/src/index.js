import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Provider} from "react-redux"
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <div className="app container mx-auto px-2">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
)
;

reportWebVitals();
