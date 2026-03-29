export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content - Text */}
                <div className="space-y-8">
                    <div className="animation-menu-fade">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer • React Specialist
                        </span>
                    </div>
                    {/* headlines */}
                    <div>
                        <p className="text-[#ffecfe] text-sm">
                            HELLO, I AM
                        </p>
                        <span className="text-4xl text-transparent bg-clip-text bg-linear-to-r from-violet-300 to-pink-300 glow-text">
                            Salma Alaoui
                        </span>
                    </div>
                </div>
                <div>
                {/* Right content - pic/img/animation */}

                </div>
            </div>
        </div>
    </section>
)}