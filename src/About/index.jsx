import React from 'react';
import Card from '../Components/Card';
import Projects from './projects';
import styles from './styles.module.css';

export default function About() {

    const project = Projects.map((project) => (
        <Card
            name={project.name}
            service={project.service}
            url={project.url}
            key={project.name}
            year={project.year}
            tagline={project.tagline}
        />
    ));

    return (
        <div className={styles.projectContainer}>
            {project}
        </div>
    )
}