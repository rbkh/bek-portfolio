import React from 'react';
import './styles.css';

function Card(props) {

    const services = props.service.map((service) => (
        <p key={service}>{service}</p>
    ));

    return (
        <div className="projectCard">
             <div className="projectService">
                {services}
            </div>
            <div className="projectInfo">
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
                <a target="_blank" href={props.url}>See Project &#10146;</a>
            </div>
            <div className="projectYear">
                <div>                
                    <p>{props.year}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;