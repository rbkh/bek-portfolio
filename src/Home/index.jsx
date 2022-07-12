import React from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Rebekah Felker</h1>
            <p className={styles.subTitle}>I’m a problem-solver who loves collaboration and developing strategies to take ideas from discovery through delivery.</p>
            {/* <a href="mailto:rebekahfelker@gmail.com">send me an email</a> */}
            <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">connect on linkedin</a>
        </div>
    )
}