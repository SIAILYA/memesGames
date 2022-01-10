import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
    <div className="app container mx-auto px-2">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)
;

reportWebVitals();
