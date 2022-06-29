import './App.css';
import { Route, Routes } from "react-router-dom";
import AppRoutes from './routes';
import React from 'react';
import Header from './Header';

export default function App() {

  const routes = AppRoutes.map((routes) => (

    <Route
      path={routes.path}
      element={routes.element}
      key={routes.label}
    />
  ));

  return (
    <div className="App">
      <Header />
      <Routes>{routes}</Routes>
    </div>
  );
}