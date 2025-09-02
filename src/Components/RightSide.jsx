import React, {useState} from 'react';
import GlassCard from "./GlassCard.jsx";
import Chip from "./Chip.jsx";
import projects from "../assets/projects.json";
import ProjectCard from "./ProjectCard.jsx";

export default function RightSide() {
    const [selected, setSelected] = useState("AI");
    const chips = ['Roblox', 'AI', 'Websites', 'Apps', "Other"];

    const filteredProjects = selected
        ? projects.filter(project => project.category === selected)
        : projects;

    return (
        <div style={{
            height: '90vh',
            width: '60vw',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: '20px',
            paddingTop: '0px'
        }}>
            <h1 style={{textAlign: 'center', fontSize: '32px', marginBottom: '24px', marginTop: '0px'}}>Projects</h1>
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
            <div style={{
                marginTop: '32px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px',
                height: '60vh',
                overflowY: 'auto'
            }}>
                {filteredProjects.map((project, idx) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        link={project.link ?? undefined}
                        image={project.image ?? undefined}
                        delay={idx * 0.15} // 0.15s delay between cards
                    />
                ))}
            </div>
        </div>
    );
}