import './App.css';
import { Route, Routes } from "react-router-dom";
import AppRoutes from './routes';
import React from 'react';
import Header from './Header';

export default function App() {

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
        <div className="App">
            <Header />
            <Routes>{routes}</Routes>
        </div>
    );
}
