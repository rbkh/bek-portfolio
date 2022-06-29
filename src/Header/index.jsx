import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="AppHeader">
        <div className="ContentContainer">
          <Link to="/">about</Link>
          <Link to="/about">past projects</Link>
          <a target="_blank" href="https://github.com/rbkh/bek-portfolio">github</a>
          <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
          </div>   
      </header>
    )
}

export default Header;