import './App.css';
import { Link } from "react-router-dom";
import AppRoutes from './routes';
import React from 'react';

function App() {

  const routes = AppRoutes.map((routes) => (

    <Link
      to={routes.path}
      element={routes.element}
      key={routes.label} 
     >
      {routes.label}       
     </Link>   

  ));

  return (
    <div className="App">
      <header className="AppHeader">   
        <a target="_blank" href="https://github.com/rbkh/bek-portfolio">github</a>
        <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
      </header>
      <div className="Main">
        <h1 className="Title">Rebekah Felker</h1>
        <p>I’m a problem-solver who loves collaboration and developing strategies to take ideas from discovery through delivery. </p>
        {routes}
      </div>
    </div>
  );
}

export default App;
