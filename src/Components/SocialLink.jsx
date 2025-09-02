import React from 'react';

export default function SocialLink({platform, url, colour}) {
    return (
        <div
            style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                border: `2px solid ${colour}`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
            }}>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                // Remove default link styles
                style={{
                    textDecoration: 'none',
                    color: colour,
                    display: 'flex',
                    fontWeight: '900',
                    alignItems: 'center',
                    padding: '4px 8px',
                }}
            >
                {platform}
            </a>
        </div>
    );
}