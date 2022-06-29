import React from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.appHeader}>
        <div className={styles.contentContainer}>
          <Link to="/">about</Link>
          <Link to="/about">past projects</Link>
          <a target="_blank" href="https://github.com/rbkh/bek-portfolio">github</a>
          <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
          </div>   
      </header>
    )
}