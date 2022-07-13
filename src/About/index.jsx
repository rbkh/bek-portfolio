import React from 'react';
import Card from '../Components/Card';
import Projects from './projects';
import styles from './styles.module.css';

export default function About() {

    const { projectContainer, textContainer } = styles;
    
    const renderCard = Projects.map((project) => (
        <Card
            key={project.name}
            {...project}
        />
    ));

    return (
        <div className={projectContainer}>
            {renderCard}
            <div className={textContainer}>
                <p>These are some examples of work done by me, or are publicly-facing applications that I contributed to on a larger team. Due to employer contracts and NDAs, many past projects cannot be disclosed.</p>
            </div>
        </div>
    )
}
