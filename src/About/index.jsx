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
        />
    ));

    return (
        <div className='MainContainer'>
          <p>Past Projects</p>
            {/* {project} */}
        </div>
    )
}

export default About;