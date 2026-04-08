const skills = [
    {
        sName: "Languages",
        skill: "html",
        proficiency: "",// good - intermidier - faible
    },
    {
        sName: "Frameworks & Libs",
        skill: "css",
        proficiency: "",
    },
    {
        sName: "Databases",
        skill: "JavaScript",
        proficiency: "",
    },
    {
        sName: "Tools & Environments",
        skill: "Typescript",
        proficiency: "",
    },
    {
        sName: "Languages",
        skill: "html",
        proficiency: "",
    },
    {
        sName: "Languages",
        skill: "html",
        proficiency: "",
    },
];

export const Skills = () => {
    return <section id="skills" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto mb-16 animation-menu-fade">
                <span className="text-[2.7rem] md:text-[3.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                    Skills
                </span>
            </div>
        </div>
    </section>
}