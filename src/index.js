import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

function documentHeight() {

    function getWindowHeight() {
        return window.innerHeight;
    }

    function setWindowHeight() {
        return document.getElementById('root').style.height = getWindowHeight()+"px";
    }

    document.addEventListener("resize", setWindowHeight);

    // need to get root to rerender on resize

    console.log(getWindowHeight());
    console.log(setWindowHeight())

}

const root = ReactDOM.createRoot(document.getElementById('root'));
documentHeight();
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
