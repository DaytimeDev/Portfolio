import React, {useState, useRef, useEffect} from 'react';
import GlassCard from "./GlassCard.jsx";
import Chip from "./Chip.jsx";
import projects from "../assets/projects.json";
import ProjectCard from "./ProjectCard.jsx";

export default function RightSide({isMobile}) {

    const notes = [
        {
            category: "Roblox",
            note: "These are a couple of roblox the projects, I've worked on a lot more, but need to collect all the code first"
        },
        {
            category: "AI",
            note: "This is something I've only just started working with, NEAT algorithms and mathmatical evolution, so theres only so much here; and also building these is a nightmare"
        },
        {
            category: "Websites",
            note: "These are some of the websites I've made, I have a lot more experience with web development than is shown here, for example I've made sites in react (like this one) and many sites in HTML too"
        },
        {
            category: "Apps",
            note: "This is a new category for me, I recently started working with Apps, specifically Android, Jetpack Compose and Kotlin"
        },
        {
            category: "Other",
            note: "These are some other projects I've worked on that don't fit into the other, like Minecraft Servers, discord bots and chrome extensions"
        }
    ]

    const [selected, setSelected] = useState("Roblox");
    const chips = ["Roblox", "AI", "Websites", "Apps", "Other"];

    const filteredProjects = selected
        ? projects.filter(project => project.category === selected)
        : projects;

    // store per-category animation state
    const animated = useRef({});

    return (
        <div style={{
            height: isMobile ? 'auto' : '90vh',
            width: isMobile ? '95vw' : '60vw',
            marginTop: isMobile ? '16px' : 'auto',
            marginBottom: isMobile ? '16px' : 'auto',
            paddingTop: '0px',
            padding: isMobile ? '0px 10px' : '20px',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? "column" : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
            }}>
                <h1 style={{
                    textAlign: 'left',
                    fontSize: isMobile ? '24px' : '30px',
                    textDecoration: "underline",
                    marginBottom: '0',
                    backgroundColor: '#ffffff20',
                    padding: '5px',
                    borderRadius: '12px',
                    border: '1px solid #ffffff40',
                }}>Projects</h1>
                <GlassCard customStyles={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: 'fit-content',
                    borderRadius: "200px",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '5px',
                }}>
                    {chips.map(label => (
                        <Chip
                            key={label}
                            highlight={selected === label}
                            onclick={() => setSelected(label)}
                        >
                            {label}
                        </Chip>
                    ))}
                </GlassCard>
            </div>
            <GlassCard>
                {notes.filter(note => note.category === selected).map((note, idx) => {
                    const [displayed, setDisplayed] = useState('');

                    useEffect(() => {
                        // If this category already animated, show instantly
                        if (animated.current[note.category]) {
                            setDisplayed(note.note);
                            return;
                        }

                        let current = '-'.repeat(note.note.length);
                        setDisplayed(current);

                        let i = 0;
                        const interval = setInterval(() => {
                            current =
                                current.slice(0, i) +
                                note.note[i] +
                                current.slice(i + 1);

                            setDisplayed(current);
                            i++;

                            if (i >= note.note.length) {
                                clearInterval(interval);
                                animated.current[note.category] = true; // mark as done
                            }
                        }, 20);

                        return () => clearInterval(interval);
                    }, [note.note, note.category]);

                    return (
                        <p
                            key={idx}
                            style={{
                                margin: '8px',
                                fontSize: isMobile ? '12px' : '14px',
                                color: '#80ffac',
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            {displayed}
                        </p>
                    );
                })}
            </GlassCard>
            <div style={{
                marginTop: isMobile ? "10px" : '32px',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                gap: isMobile ? '10px' : '24px',
                height: 'calc(100vh + 20px)',
                overflowY: 'auto',
                marginBottom: '0px',
            }}>
                {filteredProjects.map((project, idx) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        link={project.link ?? undefined}
                        image={project.image ?? undefined}
                        badges={project.badges ?? []}
                        delay={idx * 0.15}
                    />
                ))}
            </div>
        </div>
    );
}
