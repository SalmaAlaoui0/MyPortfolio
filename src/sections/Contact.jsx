import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "salmaalaoui739@gmail.com",
        href: "mailto:salma@examplecom",
    },
    {
        icon: Phone,
        label: "phone",
        value: "+212 632844519",
        href: "tel:+212632844519",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Morocco, Meknes",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});
        try{
            const serviceId = import.meta.env.VITE_SERVICE_ID;
            const templateId = import.meta.env.VITE_TEMPLATE_ID;
            const publicId = import.meta.env.VITE_PUBLIC_ID;

            if (!serviceId || !templateId || !publicId) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your env variables."
                );
            }

            const result = await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicId)

            console.log(result);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.log("EmailJs error:", err)
            setSubmitStatus({
                type: "error",
                message: err.text || "Failed to sent message. Please try again later.",
            });
        } finally {
            setIsLoading(false)
        }
    };
    return <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto mb-16 animation-menu-fade mb-16">
                <span className="text-[1.7rem] md:text-[2.5rem] font-inria text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-[#c06dcd] hover:bg-linear-to-r hover:from-[#c06dcd] hover:to-pink-300 font-medium tracking-wider text-glow">
                    Get In Touch
                </span>
                <h2 className="alice text-2xl md:text-3xl font-bold leading-tight animation-menu-fade animation-delay-100 text-primary animation-100 text-">
                    Let's Build
                    <span className="font-serif italic font-normal text-white"> something great</span>
                </h2>
                <p className="text-muted-foreground animation-menu-fade animation-delay-200">
                    Have a project in mind or want to
                    discuss the latest in tech? Feel free to
                    reach out.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animation-menu-fade animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value})
                                }}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/
                            >
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                type="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value})
                                }}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/
                            >
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                rows={5}
                                required
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value})
                                }}
                                placeholder="Your message ..."
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                        </div>
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    Sending ...
                                </>
                            ) : 
                            (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5"/>
                                </>
                            )}
                        </Button>
                        {submitStatus.type && (
                            <div
                            className={`flex items-center gap-3
                                p-4 rounded-xl ${
                                submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                            >
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            )}
                            <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </section>
}