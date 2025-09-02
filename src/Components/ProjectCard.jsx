import React from 'react';

function getBadgeColor(badge) {
    const opacity = 0.4;
    if (badge.toLowerCase().includes('ai')) return `rgba(255, 215, 0, ${opacity})`;
    if (badge.toLowerCase().includes('roblox')) return `rgba(255, 102, 102, ${opacity})`;
    if (badge.toLowerCase().includes('react')) return `rgba(97, 218, 251, ${opacity})`;
    if (badge.toLowerCase().includes('android')) return `rgba(61, 220, 132, ${opacity})`;
    if (badge.toLowerCase().includes('design')) return `rgba(170, 0, 255, ${opacity})`;
    if (badge.toLowerCase().includes('minecraft')) return `rgba(0, 255, 0, ${opacity})`;
    if (badge.toLowerCase().includes('javascript')) return `rgba(255, 200, 0, ${opacity})`;
    // Make sure this comes first since it contains java
    if (badge.toLowerCase().includes('java')) return `rgba(255, 64, 0, ${opacity})`;
    if (badge.toLowerCase().includes('wip')) return `rgba(255, 0, 0, ${opacity})`;
    if (badge.toLowerCase().includes('discord')) return `rgba(38, 0, 255, ${opacity})`;
    if (badge.toLowerCase().includes('kotlin')) return `rgba(255, 0, 247, ${opacity})`;
    return `rgba(31, 31, 31, ${opacity})`;
}

export default function ProjectCard({name, description, link, image, delay, badges}) {
    return (
        <div
            className="project-card"
            style={{animationDelay: `${delay}s`}}
        >
            <h3 style={{
                fontSize: '20px',
                marginBottom: '8px'
            }}>{name}</h3>
            <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
            }}>{description}</p>
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
            {badges && badges.length > 0 && (
                <div className="badges" style={{marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    {badges.map((badge, i) => (
                        <span key={i} style={{
                            background: getBadgeColor(badge),
                            borderRadius: '12px',
                            padding: '4px 12px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}>
        {badge}
      </span>
                    ))}
                </div>
            )}
        </div>
    );
}