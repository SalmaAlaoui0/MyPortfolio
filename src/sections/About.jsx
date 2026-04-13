import { useEffect, useState } from "react"
import { ButtonV2 } from "../components/ButtonV2"

const SoftSkills = [
    {
        Skill: "Strong debugging and analytical thinking",
    },
    {
        Skill: "Fast learner with high adaptability",
    },
    {
        Skill: "Team-oriented with strong communication skills",
    },
    {
        Skill: "Resilient, disciplined, and consistent under pressure",
    },
    {
        Skill: "Problem-solving mindset",
    },
    {
        Skill: "Highly motivated, passionate, and hardworking",
    },
];

const Journey = [
    {
        year: "2023 - PRESENT",
        proficient: "Software Engineering",
        SchoolName: "1337 Coding School",
        text: "",
    },
    {
        year: "2021 - 2023",
        proficient: "SMIA",
        SchoolName: "Université Moulay Ismail Meknès",
        text: "",
    },
    {
        year: "2020 - 2021",
        proficient: "Baccalaureate in physical sciences",
        SchoolName: "Anassi High School",
        text: "",
    },
]

export const About = () => {
    const[isStrenth, setIsStrenth] = useState(false);
    const pulseDuration = Math.random() * 3 + 3;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const skills = [
        { name: "Arabic", level: 98 },
        { name: "English", level: 78 },
        { name: "French", level: 67 },
    ];
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto py-6 px-6 relative z-10">
            <span className="text-[1.7rem] md:text-[2.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                About Me
            </span>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* right side | About Me*/}
                <div className='space-y-8'>
                    <div className="animation-menu-fade flex-row justify-center item-center">
                    </div>
                    <div className="text-muted-foreground animation-menu-fade animation-delay-200">
                        <div className='flex flex-row'>
                            <h2 className='font-inria text-[2em] mt-5'>I am</h2>
                            <img src='/SA.svg' className='ml-3 mt-6 h-10 w-10' />
                            <h2 className='alice text-[#d0d0d0] text-[2.1em] mt-5'>LMA,</h2>
                        </div>
                        <div className="font-inria text-[1rem] md:text-[1.5em]">
                            Software engineering student at 1337 Coding School with strong problem-solving skills and a passion for
                            building reliable, efficient systems. Experienced in backend and frontend development, Linux environments, and
                            containerized applications. I enjoy working in collaborative teams and contribute to meaningful,
                            user-focused projects.
                        </div>
                    </div>
                     <div className="text-muted-foreground animation-menu-fade animation-delay-200">
                        <h3 className="text-white font-inria text-[2em] mt-5">I can Speak:</h3>

                        <div className="space-y-4 mt-4 alice">
                            {skills.map((skill) => (
                            <div key={skill.name}>
                                <p className="mb-1">{skill.name}</p>
                                {/* Background bar */}
                                <div className="w-full h-3 bg-gray-700/30 rounded-full overflow-hidden">
                                    {/* Animated fill */}
                                    <div
                                        className="h-full bg-primary/50 hover:bg-primary rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                        width: loaded ? `${skill.level}%` : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    <div className="glass rounded-2xl p-6 animation-menu-fade animation-delay-300 mt-10 border vision-border">
                        <p className="text[1rem] md:text-lg font-medium italic text-foreground">
                            "Open to work with collaborative teams and contribute to meaningful, user-focused products to make Great ideas come to Life"
                        </p>
                    </div>
                </div>
                {/* left side | Journey and vision thing*/}
                <div className="flex flex-col gap-7 animation-menu-fade animation-delay-300">
                    <div
                        className="container mx-auto py-3 flex flex-row rounded-2xl justify-center items-center gap-5 alice"
                        style={{
                                animation: `img-pulse ${pulseDuration}s linear infinite`,
                            }}
                    >
                        <ButtonV2
                            size="sm" md:size="default"
                            onClick={() => setIsStrenth(false)}
                            className={`text-[1rem] md:text-[1.4rem] transition-all duration-300 ${
                            !isStrenth ? "bg-primary text-white" : "bg-transparent"}`}
                        >
                            My Journey
                        </ButtonV2>
                        <ButtonV2
                            size="sm" md:size="default"
                            onClick={() => setIsStrenth(true)}
                            className={`text-[1rem] md:text-[1.4rem] transition-all duration-300 ${
                            isStrenth ? "bg-primary text-white" : "bg-transparent"}`}
                        >
                            My Strenth
                        </ButtonV2>
                    </div>
                    <div className="glass vision-border p-5 rounded-3xl animation-menu-fade animation-delay-400">
                        <div
                            className={`transition-opacity duration-900 
                            ${!isStrenth ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"}`}
                        > {/*  this div is for Journey  */}
                            {/* TimeLine Itself */}
                            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary to-transparent -translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                            {/* TimeLine Items */}
                            <div className="space-y-10">
                                {Journey.map((exp, idx) => (
                                    <div
                                        key={idx}
                                        className="relative grid md:grid-cols-2 animation-menu-fade"
                                    >
                                        {/* this is for the dots */}
                                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2  ring-3 ring-background z-10"></div>
                                        {/* this is for the Journey content */}
                                        <div className={`pl-8 md:pl-0 ${idx %2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16 "}`}>
                                            <div className={`glass p-6 rounded-2xl border hover:border-primary/90 transition-all duration-400 hover:-translate-y-2`}>
                                                <span className="text-sm text-primary font-inria font-medium">{exp.year}</span>
                                                <h3 className="tex-xl font-semibold mt-2">{exp.proficient}</h3>
                                                <p className="text-[1.1rem] text-muted-foreground mt-4">{exp.SchoolName}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`font-inria text-[1.1rem] md:text-[1.3rem] transition-opacity duration-900 
                            ${isStrenth ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"}`}
                        > {/*  this div is for Strenth  */}
                            <h2 className="font-bold flex text-[1.4rem] md:text-[2rem] justify-center">Soft Skills</h2>
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-15 mx-7 my-5 md:my-10">
                                {SoftSkills.map((item, idx) => (
                                    <div key={idx} className="text-sm md:text-[1.22rem] text-muted-foreground hover:text-white glass border hover:border-primary/90 transition-all duration-400 hover:-translate-y-2 p-5 flex justify-center items-center rounded-2xl">
                                        {item.Skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}