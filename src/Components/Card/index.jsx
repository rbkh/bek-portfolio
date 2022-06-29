import React from 'react';
import styles from './styles.module.css';

export default function Card(props) {

    const services = props.service.map((service) => (
        <p key={service}>{service}</p>
    ));

    return (
        <div className={styles.projectCard}>
             <div className={styles.projectService}>
                {services}
            </div>
            <div className={styles.projectInfo}>
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
                <a target="_blank" href={props.url}>See Project &#10146;</a>
            </div>
            <div className={styles.projectYear}>
                <div>                
                    <p>{props.year}</p>
                </div>
            </div>
        </div>
    )
}