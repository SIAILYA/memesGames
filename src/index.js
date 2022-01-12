import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Provider} from "react-redux"
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

import "./styles/main.css"

import Home from './views/Home';

import Menu from "./components/Menu";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <div className="app pt-8 pb-4">
            <BrowserRouter>
                <header className="container px-2 mx-auto">
                    <Menu/>
                </header>
                <main className="page">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </main>
                <footer className="text-center">
                    with <span className="material-icons-outlined text-xs text-red-400">favorite</span> by <a href="https://overcreated.ru" target="_blank">overcreated</a>
                </footer>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
)
;

reportWebVitals();
