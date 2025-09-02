export default function GlassCard({ children, customStyles }) {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '10px',
            color: 'white',
            fontFamily: 'Silkscreen, sans-serif',
            ...customStyles
        }}>
            {children}
        </div>
    )
}