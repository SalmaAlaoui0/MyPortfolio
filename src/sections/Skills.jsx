import { SkillsInfo } from '../constants'
import Tilt from 'react-parallax-tilt'

export const Skills = () => {
    return <section id="skills" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto mb-16 animation-menu-fade">
                <span className="text-[1.7rem] md:text-[2.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                    Skills & Technologies
                </span>
                <div className='w-24 bg-[#8245ec] mx-auto mt-2'>
                </div>
                <p className='text-muted-foreground animate-menu-fade animation-delay-100'>A collection of my technical skills and expertise honed through various projects and experiences</p>
            </div>
            <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between animation-menu-fade animation-delay-200'>
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className='glass vision-border px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl
                        hover:shadow-[0_0_20px_1px_primary]'
                    >
                        <h3 className='text-2xl sm:text-3xl font-semibold font-inria text-muted-foreground mb-4 text-center'>
                            {category.title}
                        </h3>

                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className='flex items-center justify-center space-x-2 bg-transparent rounded-full border border-primary/30 hover:border-primary/90 transition-colors py-2 px-2 text-center'
                                    >
                                        <img
                                            src={skill.logo}
                                            alt= {`${skill.name} logo`}
                                            className='w-6 h-6 sm:w-8 sm:h-8'
                                        />
                                        <span className='text-xs sm:text-sm text-gray-300'>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

