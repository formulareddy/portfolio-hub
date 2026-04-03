"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  dribbble: <Dribbble className="w-5 h-5" />,
};

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/50 via-transparent to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's create something amazing together."
          align="center"
        />

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary border border-border"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 text-accent border border-accent/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-text-tertiary mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary border border-border"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 text-accent border border-accent/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-text-tertiary mb-1">Location</p>
                  <p className="text-foreground font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-pink-600/10 rounded-2xl border border-accent/20"
            >
              <p className="text-text-secondary leading-relaxed">
                I&apos;m currently{" "}
                <span className="text-accent font-semibold">
                  {personalInfo.available ? "available for freelance work" : "unavailable"}
                </span>
                . Whether you have a project in mind or just want to chat about
                design and development, I&apos;d love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex gap-3"
            >
              {["github", "linkedin", "twitter", "dribbble"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background-secondary border border-border text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  {socialIcons[social]}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-accent/30 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-glow">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  error={errors.email}
                />
                <Textarea
                  label="Message"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  error={errors.message}
                />
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full shadow-glow hover:shadow-glow-lg"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
