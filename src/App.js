import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import AppRoutes from './routes';
import React from 'react';

function App() {

  const routes = AppRoutes.map((routes) => (

    <Route
      path={routes.path}
      element={routes.element}
      key={routes.label}
    />
  ));

  return (
    <div className="App">
      <header className="AppHeader">   
        <a target="_blank" href="https://github.com/rbkh/bek-portfolio">github</a>
        <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
      </header>
      <Routes>{routes}</Routes>
    </div>
  );
}

export default App;
