import React from 'react';

export default function ProjectCard({name, description, link, image, delay}) {
    return (
        <div
            className="project-card"
            style={{animationDelay: `${delay}s`}}
        >
            <h3>{name}</h3>
            <p>{description}</p>
            {image && (
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        marginBottom: '12px'
                    }}
                />
            )}
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            )}
        </div>
    );
}