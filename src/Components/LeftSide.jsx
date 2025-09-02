import GlassCard from "./GlassCard.jsx";
import "../App.css"
import Chip from "./Chip.jsx";
import SocialLink from "./SocialLink.jsx";

export default function LeftSide({ isMobile }) {
    return (
        <GlassCard customStyles={{
            height: isMobile ? 'auto' : '90vh',
            width: isMobile ? '90vw' : '30vw',
            marginTop: isMobile ? '16px' : 'auto',
            marginBottom: isMobile ? '16px' : 'auto',
            marginLeft: isMobile ? 'auto' : '20px',
            marginRight: isMobile ? 'auto' : undefined,
            paddingTop: '0px',
        }}>
            { /* Profile */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '24px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '24px 0',
            }}>
                <img src={"/LogoFixed.png"} alt={"Profile"} style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '25%',
                    objectFit: 'cover',
                    margin: 0,
                }}/>
                <div>
                    <h1 style={{
                        margin: 0,
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#00fa9a',
                    }}>Michael</h1>
                    <p style={{
                        margin: '6px 0 0 0',
                        fontSize: '1rem',
                        color: '#dddddd',
                        fontWeight: 400,
                    }}>I program all sorts of things</p>
                </div>

            </div>

            { /* Socials */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
            }}>
                <SocialLink colour={"#2200ff"} platform={"Discord"}
                            url={"https://discord.com/users/562685530790428692"}/>
                <SocialLink colour={"#000000"} platform={"GitHub"} url={"https://github.com/DaytimeDev"}/>
                <SocialLink colour={"#ba0000"} platform={"Roblox"}
                            url={"https://www.roblox.com/users/532657047/profile"}/>

            </div>

            { /* Skills */}

            <h2 style={{
                textAlign: 'center',
                fontSize: '24px',
                marginTop: '12px'
            }}>Skills</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'start', // spreads them evenly
                alignContent: 'start',    // keeps rows tight
                alignItems: 'center', // 👈 key part
                marginTop: '12px'
            }}>
                <Chip label="Programming" fontSize="1.5rem"/>
                <Chip label="Design" fontSize="1rem"/>
                <Chip label="Teamwork" fontSize="1.2rem"/>
                <Chip label="Creativity" fontSize="1.2rem"/>
                <Chip label="Logic" fontSize="1.5rem"/>
                <Chip label="Problem Solving" fontSize="1.4rem"/>
                <Chip label="Empathy" fontSize="1.8rem"/>
                <Chip label="Technology" fontSize="1.2rem"/>
                <Chip label="Confident" fontSize="1rem"/>
                <Chip label="Open-Minded" fontSize="1.1rem"/>
            </div>
        </GlassCard>
    )
}