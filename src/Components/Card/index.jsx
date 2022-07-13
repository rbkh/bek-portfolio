import React from 'react';
import styles from './styles.module.css';

export default function Card(props) {

    const services = props.service.map((service) => (
        <p key={service}>{service}</p>
    ));

    function renderLink(props) {

        const linkText = props.projectType == "self" ? "See Codebase" : "See Website"

        if (!props.url) return null;

        return (
            <a target="_blank" href={props.url}>{linkText} &#10146;</a>
        )
    }

    return (
        <div className={styles.projectCard}>
            <h2 className={styles.title}>{props.name}</h2>
            <div className={styles.projectInfo}>
                <div className={styles.projectService}>
                    {services}
                </div>
                <p className={styles.tagline}>{props.tagline}</p>
                {renderLink(props)}
            </div>
            <div className={styles.projectYear}>
                <p>{props.year}</p>
            </div>
        </div>
    )
}
