// const skills = [
//     {
//         sName: "Languages",
//         skill: "html",
//         proficiency: "",// good - intermidier - faible
//     },
//     {
//         sName: "Frameworks & Libs",
//         skill: "css",
//         proficiency: "",
//     },
//     {
//         sName: "Databases",
//         skill: "JavaScript",
//         proficiency: "",
//     },
//     {
//         sName: "Tools & Environments",
//         skill: "Typescript",
//         proficiency: "",
//     },
//     {
//         sName: "Languages",
//         skill: "html",
//         proficiency: "",
//     },
//     {
//         sName: "Languages",
//         skill: "html",
//         proficiency: "",
//     },
// ];

const skills = [
    {
        lang: "C",
        pourc: "95%",
        whatIlearned: "8+ projects focused on low-level programming concepts & algorithms, ranging from understanding memory and instructions to building functions from scratch, parsing complex inputs, managing processes, handling file descriptors, and working with concurrency concepts like mutexes and threads.",
    },
    {
        lang: "C++",
        pourc: "90%",
        whatIlearned: "7+ projects covering object-oriented programming fundamentals (encapsulation, inheritance, polymorphism), memory management, operator overloading, templates, STL containers & algorithms, exception handling, and building a full HTTP server from scratch, reinforcing networking, I/O multiplexing, and scalable architecture design.",
    },
    {
        lang: "html",
        pourc: "96%",
        whatIlearned: "5+ projects focused on structuring web content using semantic HTML, building accessible and well-organized layouts, integrating forms and media, and understanding the foundations of web architecture and responsive design.",
    },
    {
        lang: "JavaScript",
        pourc: "91%",
        whatIlearned: "multiple projects covering core language concepts, DOM manipulation, asynchronous programming (Promises, async/await), event-driven architecture, and building dynamic, interactive web applications.",
    },
    {
        lang: "TypeScript",
        pourc: "84%",
        whatIlearned: "2 projects focused on static typing, interfaces, generics, type safety, and improving code scalability and maintainability in large applications.",
    },
    {
        lang: "css",
        pourc: "86%",
        whatIlearned: "7+ projects building responsive and modern UI layouts, and advanced styling techniques with a strong focus on cross-browser compatibility.",
    },
    {
        lang: "Tailwind CSS",
        pourc: "93%",
        whatIlearned: "4+ projects designing fast and responsive interfaces using utility-first styling, component composition, and optimizing workflow for scalable UI development.",
    },
    {
        lang: "Reactjs",
        pourc: "88%",
        whatIlearned: "2+ projects developing component-based applications, and maintainable front-end architectures.",
    },
    {
        lang: "Nodejs",
        pourc: "85%",
        whatIlearned: "2+ projects building backend services, REST APIs, handling asynchronous operations, middleware, and integrating with databases for full-stack applications.",
    },
    {
        lang: "Socket.IO",
        pourc: "75%",
        whatIlearned: "real-time communication projects implementing WebSocket-based features such as live chat, live multiGame and tournament match making system, bidirectional client-server interactions.",
    },
    {
        lang: "SQLite",
        pourc: "65%",
        whatIlearned: "2 projects working with relational databases, writing SQL queries, designing schemas, and integrating lightweight database solutions into applications.",
    },
    {
        lang: "Docker",
        pourc: "78%",
        whatIlearned: "3 projects Inception and Transcendence, focused on containerizing full-stack applications, designing multi-service architectures with Docker and docker-compose, managing networking, volumes, and environment configuration, also being part of DevOps project.",
    },
    {
        lang: "Github",
        pourc: "99%",
        whatIlearned: "used across all projects for version control, branching strategies, collaboration, pull requests, and maintaining clean and structured repositories.",
    },
    {
        lang: "Linux",
        pourc: "90%",
        whatIlearned: "extensive daily use of the Linux environment.",
    },
];


export const Skills = () => {
    return <section id="skills" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto mb-16 animation-menu-fade">
                <span className="text-[1.7rem] md:text-[2.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                    Skills
                </span>
            </div>
        </div>
    </section>
}









// import { useState } from "react";

// const skills = [
//     {
//         lang: "C",
//         pourc: "95%",
//         whatIlearned:
//             "8+ projects focused on low-level programming, memory, parsing, processes, file descriptors, mutexes, and threads.",
//     },
//     {
//         lang: "C++",
//         pourc: "90%",
//         whatIlearned:
//             "OOP, templates, STL, HTTP server, networking, scalable architecture.",
//     },
//     {
//         lang: "HTML",
//         pourc: "96%",
//         whatIlearned:
//             "Semantic structure, accessibility, responsive layouts.",
//     },
//     {
//         lang: "JavaScript",
//         pourc: "91%",
//         whatIlearned:
//             "DOM, async/await, dynamic apps.",
//     },
//     {
//         lang: "TypeScript",
//         pourc: "84%",
//         whatIlearned:
//             "Type safety, interfaces, scalable apps.",
//     },
//     {
//         lang: "CSS",
//         pourc: "86%",
//         whatIlearned:
//             "Responsive UI, modern layouts.",
//     },
//     {
//         lang: "Tailwind",
//         pourc: "93%",
//         whatIlearned:
//             "Utility-first styling, fast UI dev.",
//     },
//     {
//         lang: "React",
//         pourc: "88%",
//         whatIlearned:
//             "Component-based architecture.",
//     },
//     {
//         lang: "Node",
//         pourc: "85%",
//         whatIlearned:
//             "APIs, backend logic.",
//     },
// ];

// export const Skills = () => {
//     const [activeSkill, setActiveSkill] = useState(skills[0]);

//     const radius = 160;
//     const angleStep = 360 / skills.length;

//     return (
//         <section
//             id="skills"
//             className="py-32 flex flex-col items-center text-white"
//         >
//             <h2 className="text-3xl mb-16">Skills & Technologies</h2>

//             <div className="relative w-[380px] h-[380px]">

//                 {/* CENTER */}
//                 <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-6 text-center transition-all duration-300">
//                     <div>
//                         <h3 className="text-xl font-bold">
//                             {activeSkill.lang}
//                         </h3>

//                         <p className="text-lg opacity-90">
//                             {activeSkill.pourc}
//                         </p>

//                         <p className="text-sm mt-2 opacity-80 leading-snug">
//                             {activeSkill.whatIlearned}
//                         </p>
//                     </div>
//                 </div>

//                 {/* OUTER RING */}
//                 {skills.map((skill, index) => {
//                     const angle = index * angleStep;

//                     const isActive = activeSkill.lang === skill.lang;

//                     return (
//                         <div
//                             key={skill.lang}
//                             className="absolute top-1/2 left-1/2"
//                             style={{
//                                 transform: `
//                                     rotate(${angle}deg)
//                                     translate(${radius}px)
//                                     rotate(-${angle}deg)
//                                 `,
//                             }}
//                         >
//                             <button
//                                 onClick={() => setActiveSkill(skill)}
//                                 onMouseEnter={() => setActiveSkill(skill)}
//                                 className={`px-3 py-1 rounded-full text-sm transition-all duration-300
//                                     ${
//                                         isActive
//                                             ? "bg-pink-400 scale-110"
//                                             : "bg-gray-700 hover:bg-pink-300"
//                                     }
//                                 `}
//                             >
//                                 {skill.lang}
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };