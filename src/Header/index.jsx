import React from 'react';
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header className={styles.appHeader}>
        <div className={styles.contentContainer}>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? `${styles.linkStyle}` : undefined }
          >about</NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? `${styles.linkStyle}` : undefined }
          >past projects</NavLink>
          <a target="_blank" href="https://github.com/rbkh/bek-portfolio">github</a>
          <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
          </div>   
      </header>
    )
}