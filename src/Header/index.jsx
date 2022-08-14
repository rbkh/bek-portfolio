import React from 'react';
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

export default function Header() {

    const { appHeader, contentContainer, linkStyle } = styles;

    return (
        <header className={appHeader}>
            <div className={contentContainer}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? `${linkStyle}` : undefined}
                >about</NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? `${linkStyle}` : undefined}
                >past projects</NavLink>
                <a target="_blank" href="https://github.com/rbkh/">github</a>
                <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">linkedin</a>
            </div>
        </header>
    )
}
