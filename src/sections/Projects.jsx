import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { X } from "lucide-react"

const projects = [
    {
        icon: "🌸",
        date: "2024",
        title: "ft_transcendence",
        description:
            "Real-Time Full-Stack Web Application including authantication system and multiplayer Ping Pong game, real-time multiplayer communication plus Tournament System with matchmaking, player progression, and results management.",
        tags: ["Typescript", "NodeJS", "Fastify", "Socket.IO", "SQLite", "Docker", "Tailwind CSS"],
        github: "#",
    },
    {
        icon: "🌸",
        date: "2024",
        title: "ft_transcendence",
        description:
            "Real-Time Full-Stack Web Application including authantication system and multiplayer Ping Pong game, real-time multiplayer communication plus Tournament System with matchmaking, player progression, and results management.",
        tags: ["Typescript", "NodeJS", "Fastify", "Socket.IO", "SQLite", "Docker", "Tailwind CSS"],
        github: "#",
    },
    {
        icon: "🌸",
        date: "2023",
        title: "ft_transcendence",
        description:
            "Real-Time Full-Stack Web Application including authantication system and multiplayer Ping Pong game, real-time multiplayer communication plus Tournament System with matchmaking, player progression, and results management.",
        tags: ["Typescript", "NodeJS", "Fastify", "Socket.IO", "SQLite", "Docker", "Tailwind CSS"],
        github: "#",
    },
    {
        icon: "🌸",
        date: "2023",
        title: "ft_transcendence",
        description:
            "Real-Time Full-Stack Web Application including authantication system and multiplayer Ping Pong game, real-time multiplayer communication plus Tournament System with matchmaking, player progression, and results management.",
        tags: ["Typescript", "NodeJS", "Fastify", "Socket.IO", "SQLite", "Docker", "Tailwind CSS"],
        github: "#",
    },
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        {/* <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" /> */}
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto mb-16 animation-menu-fade">
                <span className="text-[2.7rem] md:text-[3.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                    Projects
                </span>
                <p className="text-muted-foreground animate-menu-fade animation-delay-20">
                    A selection of my recent work, ranging from academic projects focused on low-level concepts to
                    advanced full-stack & personal projects utilizing modern tools and technologies.
                </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer glass rounded-2xl overflow-hidden animation-menu-fade md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        <div className="glass p-8 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-5xl">{project.icon}</span>
                                    <span className="text-xs text-muted-foreground bg-white/10 px-3 py-1 rounded-full">{project.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span 
                                            key={tagIdx}
                                            className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-500 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-primary/45 hover:text-primary transition-colors text-[1.1rem] font-medium"
                                    >
                                        <FaGithub size={30} /> Code Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    
                    {/* Modal Card */}
                    <div className="relative w-[90%] max-w-2xl glass rounded-2xl p-8">

                    {/* Close button */}
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
                    >
                        <X />
                    </button>

                    {/* Content */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{selectedProject.icon}</span>
                        <div>
                        <h2 className="text-2xl font-bold text-blue-400">
                            {selectedProject.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {selectedProject.date}
                        </p>
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                        {selectedProject.description}
                    </p>

                    <h4 className="text-cyan-400 font-semibold mb-3">
                        Technologies utilisées
                    </h4>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>

                    {/* Button */}
                    <a
                        href={selectedProject.github}
                        target="_blank"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-medium"
                    >
                        Voir le code
                    </a>
                    </div>
                </div>
            )}
        </div>
    </section>
}
