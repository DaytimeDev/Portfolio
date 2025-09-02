import React from "react";
import GlassCard from "./GlassCard.jsx";
import "../App.css"
import Chip from "./Chip.jsx";
import SocialLink from "./SocialLink.jsx";

export default function LeftSide({isMobile}) {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px", // spacing between cards
            height: isMobile ? "auto" : "90vh",
            width: isMobile ? "90vw" : "30vw",
            marginTop: isMobile ? "16px" : "auto",
            marginBottom: isMobile ? "16px" : "auto",
            marginLeft: isMobile ? "auto" : "20px",
            marginRight: isMobile ? "auto" : undefined,
        }}>

            {/* Profile */}
            <GlassCard customStyles={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "24px"
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
            </GlassCard>

            {/* Socials */}
            <GlassCard customStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "12px",
                width: "fit-content"
            }}>
                <SocialLink colour={"#2200ff"} platform={"Discord"}
                            url={"https://discord.com/users/562685530790428692"}/>
                <SocialLink colour={"#000000"} platform={"GitHub"} url={"https://github.com/DaytimeDev"}/>
                <SocialLink colour={"#ba0000"} platform={"Roblox"}
                            url={"https://www.roblox.com/users/532657047/profile"}/>
            </GlassCard>

            {/* Skills */}
            <GlassCard customStyles={{padding: "16px"}}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    marginTop: '0',
                    marginBottom: '12px'
                }}>Skills</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    justifyContent: 'start',
                    alignContent: 'start',
                    alignItems: 'center',
                }}>
                    {[
                        "Programming",
                        "Design",
                        "Teamwork",
                        "Creativity",
                        "Logic",
                        "Problem Solving",
                        "Empathy",
                        "Technology",
                        "Confident",
                        "Open-Minded",
                        "Friendly"
                    ].map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            fontSize={"0.9rem"}
                        />
                    ))}
                </div>
            </GlassCard>


            {/*    Embed GitHub Contributions*/}
            <GlassCard customStyles={{
                textAlign: "center",
                borderRadius: "18px"
            }}>
                <h4 style={{
                    fontSize: '22px',
                    marginTop: '0',
                    marginBottom: '16px',
                    color: '#00fa9a',
                    letterSpacing: '1px'
                }}>GitHub Contributions</h4>
                <div style={{
                    borderRadius: "14px",
                    display: "inline-block",
                }}>
                    <img
                        src="https://ghchart.rshah.org/DaytimeDev"
                        alt="GitHub Contributions Chart"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto',
                            borderRadius: '10px',
                        }}
                    />
                </div>
            </GlassCard>

        </div>
    )
}
