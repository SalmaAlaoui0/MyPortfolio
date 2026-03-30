import { useEffect, useState } from "react";
import {Button} from "../components/Button";
import { Menu , X} from "lucide-react"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const  handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return (
        <header className={`fixed top-0 right-0 left-0 transition-all duration-200 ${isScrolled ? "glass-mobile py-1" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#">
                    <img src="/Logo.svg" className='h-13 w-13'/>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm">Get In Touch</Button>
                </div>

                <button 
                    onClick={() => setIsMenuOpen((curr) => !curr)} 
                    className="md:hidden p-2 text-foreground cursor-pointer">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {isMenuOpen && (<div className="md:hidden glass-mobile">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animation-menu-fade">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} onClick={() => {setIsMenuOpen(false)}} className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}
                        </a>
                    ))}
                    <Button onClick={() => {setIsMenuOpen(false)}}>Get In Touch</Button>
                </div>
            </div>)}
        </header>
    );
};