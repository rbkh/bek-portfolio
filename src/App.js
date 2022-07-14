import './App.css';
import { Route, Routes } from "react-router-dom";
import AppRoutes from './routes';
import { React, useEffect, useState } from 'react';
import Header from './Header';

export default function App() {

    // this works but doesn't fix the scroll issue, need to set height on root element 

    const [ windowSize, setWindowSize ] = useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    },[])

    const routes = AppRoutes.map((route) => {

        const { path, element, label } = route;

        return (
            <Route
                path={path}
                element={element}
                key={label}
            />
        )
    });

    return (
        <div 
            className="App"
            style={{
                height:windowSize.innerHeight
            }}
        >
            <Header />
            <Routes>{routes}</Routes>
        </div>
    );
}
