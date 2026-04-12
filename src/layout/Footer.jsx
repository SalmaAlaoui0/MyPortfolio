import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Heart } from "lucide-react";

const socialLinks = [
    {
        icon: FaGithub,
        href: "#",
        label: "Github",
    },
    {
        icon: FaLinkedin,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: MdEmail,
        href: "#",
        label: "Email",
    },
];

const footerLinks = [
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#contact",
        label: "Contact",
    },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 py-12 border-t border-border">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo */}
                <div className="text-center md:text-left">
                    <a href="#">
                        <img src="/Logo.svg" className='h-10 w-10'/>
                    </a>
                    <p className="flex flex-cols gap-2 text-sm text-muted-foreground mt-2">
                        © {currentYear} Salma Alaoui. Built with <Heart className="w-4 h-4 text-primary"/>
                    </p>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                            <Icon className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    </footer>
  );
};
