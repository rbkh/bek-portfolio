import React from 'react';
import Card from '../Components/Card';
import Projects from './projects';
import './styles.css';
;
function About() {

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
        <div className='ProjectContainer'>
            {project}
        </div>
    )
}

export default About;