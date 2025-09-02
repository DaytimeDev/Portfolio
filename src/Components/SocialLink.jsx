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
                display: 'inline-flex',
                border: "2px solid #00fa9a00",
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
            }}

            onMouseOver={e => {
                e.currentTarget.style.transition = 'background 1s, border 0.1s';
                e.currentTarget.style.background = colour;
                e.currentTarget.style.border = `2px solid ${colour}`;
            }}

            onMouseOut={e => {
                e.currentTarget.style.transition = 'background 2s, border 0.5s';
                e.currentTarget.style.background = `rgba(${hexToRgb(colour)}, 0.4)`;
                e.currentTarget.style.border = '2px solid #00fa9a00';
            }}
        >
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