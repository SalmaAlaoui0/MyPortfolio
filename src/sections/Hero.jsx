import { ArrowDown, ArrowRight, Download } from "lucide-react"
import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Left content - Text */}
                <div className="space-y-8">
                    {/* <div className="animation-menu-fade">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer • React Specialist
                        </span>
                    </div> */}
                    {/* headlines */}
                    <div className="font-inria space-y-4">
                        <p className="text-primary text-1xl animation-menu-fade">
                            HELLO, I AM
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl animation-menu-fade animation-delay-100">Salma Alaoui</h1>
                        <span className="text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-linear-to-r from-violet-300 to-pink-300 animation-menu-fade animation-delay-200 hover:bg-linear-to-l hover:from-violet-300 hover:to-pink-300 text-glow">
                            FullStack Developper
                        </span>
                        <p className="text-lg text-muted-foreground max-w-lg animation-menu-fade pt-3 leading-tight animation-delay-3z00">
                            Passionate about building efficient, scalable
                            systems
                            And continuously learning new web technologies to create better user experiences.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6 animation-menu-fade animation-delay-400">
                        <Button>
                            Contact Me <ArrowDown className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5"/>
                            Download CV
                        </AnimatedBorderButton>
                    </div>
                </div>
                <div className="relative animation-menu-fade animation-delay-400">
                    <div
                        className="w-70 h-70 md:w-90 md:h-90 max-w-md mx-auto group [perspective:1000px]"
                        style={{
                            animation: `img-pulse ${Math.random() * 3 + 3}s linear infinite`,
                        }}
                    >
                        {/* glass wrapper */}
                        <div className="glass glow-border rounded-full w-full h-full">
                        
                            {/* 3D rotation */}
                            <div className="relative w-full h-full rounded-full transition-transform duration-1200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                
                                {/* Logo pic */}
                                <img
                                src="/gitpinkpic.png"
                                alt="logo"
                                className="absolute w-full h-full object-cover rounded-full [backface-visibility:hidden] "
                                />

                                {/* Personal pic */}
                                <img
                                src="/profileImg2.png"
                                alt="Salma Alaoui"
                                className="absolute w-full h-full object-cover rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}