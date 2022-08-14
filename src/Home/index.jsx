import React from 'react';
import styles from './styles.module.css';

export default function Home() {

    const { mainContainer, title, subTitle, textContainer } = styles;

    return (
        <div className={mainContainer}>
            <div className={textContainer}>
                <h1 className={title}>Rebekah Felker</h1>
                <p className={subTitle}>I’m a problem-solver who loves collaboration and developing strategies to take ideas from discovery through delivery.</p>
                <a target="_blank" href="https://www.linkedin.com/in/rebekahfelker/">connect on linkedin</a>
            </div>
        </div>
    )
}
