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

    function setWindowHeight(event) {
        console.log(event)
        const root = document.getElementById('root');
        root.style.border = "1px solid red";
        root.innerHTML += "," + getWindowHeight();
        return root.style.height = getWindowHeight() *1.1+"px";
    }

    function handleScreenOrientation() {
        const landscapeQuery = window.matchMedia(`(orientation: landscape)`);
        const portraitQuery = window.matchMedia(`(orientation: portrait)`);

        console.log(landscapeQuery);
        landscapeQuery.addEventListener('change', setWindowHeight);
        portraitQuery.addEventListener('change', (event) => {
            if (event.matches) {
                setWindowHeight()
                document.getElementById('root').style.border = "1px solid green";
            }
        });

    }

    window.addEventListener('DOMContentLoaded', () => {
        setWindowHeight();
        window.addEventListener("resize", setWindowHeight);
        handleScreenOrientation();
    })


 


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
