import React from 'react';

export default function SocialLink({platform, url, colour}) {

    // Function to convert hex to rgb
    function hexToRgb(hex) {
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, '');

        // Parse r, g, b values
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        return `${r}, ${g}, ${b}`;
    }

    return (
        <div
            style={{
                background: `rgba(${hexToRgb(colour)}, 0.4)`,
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
                    color: "#ededed",
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