import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Route, Routes} from "react-router-dom";
import {HistoryRouter as BrowserRouter} from "redux-first-history/rr6";

import {Provider} from "react-redux"

import "./styles/main.css"

import Home from './views/Home';

import Menu from "./components/Menu";
import FAQ from "./views/FAQ";
import StartGame from "./views/StartGame";
import NotFound from "./views/NotFound";
import Lobby from "./views/Lobby";
import {history, store} from "./store";
import GameBoard from "./components/GameBoard/GameBoard";


ReactDOM.render(
    <Provider store={store}>
        <div className="app pt-4 md:pt-8 pb-4">
            <BrowserRouter history={history}>
                <header className="container px-3 mx-auto">
                    <Menu/>
                </header>
                <main className="page">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/startgame" element={<StartGame/>}/>
                        <Route path="/lobby" element={<Lobby/>}/>
                        <Route path="/gameboard/texttomeme" element={<GameBoard/>}/>
                        <Route path="*" status={404} element={<NotFound/>}/>
                    </Routes>
                </main>
                <footer className="text-center pt-4">
                    with <span className="material-icons-outlined text-xs text-red-400">favorite</span> by <a
                    href="https://overcreated.ru" target="_blank" rel="noreferrer">overcreated</a>
                </footer>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
)
;

reportWebVitals();
