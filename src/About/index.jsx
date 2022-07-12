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
            projectType={project.projectType}
            tagline={project.tagline}
        />
    ));

    return (
        <div className={styles.projectContainer}>
            {project}
            <div className={styles.textContainer}>
                <p>These are some examples of work done by me, or are publicly-facing applications that I contributed to on a larger team. Due to employer contracts and NDAs, many past projects cannot be disclosed.</p>
            </div>
        </div>
    )
}