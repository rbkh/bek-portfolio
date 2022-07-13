import React from 'react';
import styles from './styles.module.css';

export default function Card(props) {

    const { projectType, url, year, name, tagline, service } = props;
    const { projectCard, cardTitle, cardInfo, projectService, cardTagline, projectYear } = styles;
    const renderServices = service.map((service) => (
        <p key={service}>{service}</p>
    ));

    function renderLink(projectType, url) {

        const linkText = projectType == "self" ? "See Codebase" : "See Website"

        if (!url) return null;

        return (
            <a target="_blank" href={url}>{linkText} &#10146;</a>
        )
    }

    return (
        <div className={projectCard}>
            <h2 className={cardTitle}>{name}</h2>
            <div className={cardInfo}>
                <div className={projectService}>
                    {renderServices}
                </div>
                <p className={cardTagline}>{tagline}</p>
                {renderLink(projectType, url)}
            </div>
            <div className={projectYear}>
                <p>{year}</p>
            </div>
        </div>
    )
}
