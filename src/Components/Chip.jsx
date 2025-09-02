import React, {useState} from 'react';

export default function Chip({label, onclick, fontSize, children, highlight}) {
    if (highlight === undefined) {
        highlight = true;
    }
    const [hovered, setHovered] = useState(false);

    const backgroundColor = highlight
        ? 'rgba(255, 255, 255, 0.2)'
        : hovered
            ? 'rgba(255, 255, 255, 0.2)'
            : 'transparent';

    const border = highlight
        ? '1px solid rgba(255, 255, 255, 0.3)'
        : hovered
            ? '1px solid rgba(255, 255, 255, 0.3)'
            : '1px solid rgba(255, 255, 255, 0)'; // Border always there so it doesn't shift

    return (
        <div
            onClick={onclick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: '6px 16px',
                borderRadius: '50px',
                backgroundColor,
                color: 'white',
                fontSize: fontSize ? fontSize : '1rem',
                cursor: 'pointer',
                width: 'fit-content',
                height: 'fit-content',
                userSelect: 'none',
                transition: 'background-color 0.3s, border 0.3s',
                border,
            }}
        >
            {label}
            {children}
        </div>
    );
}