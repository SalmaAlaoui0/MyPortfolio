const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    return <header>
        <nav>
            <a>
                <img src="/Logo.svg" className='h-16 w-16 ml-25 relative z-10' />
            </a>

            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}>{link.label}</a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
}