import React from 'react';
import './styles.css';

function Card(props) {

    return (
        <div className="projectCard">
            <h2>{props.name}</h2>
            <h3>{props.service}</h3>
            <a target="_blank" href={props.url}>Link</a>
        </div>
    )
}

export default Card;