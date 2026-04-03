"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  dribbble: <Dribbble className="w-5 h-5" />,
};

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold text-foreground tracking-tight">
              <span className="gradient-text">AC</span>
              <span>.</span>
            </Link>
            <p className="text-text-secondary mt-2 flex items-center gap-1">
              Designed & Built with <Heart className="w-4 h-4 text-pink-500 animate-pulse" /> by <span className="text-foreground font-medium">Alex Chen</span>
            </p>
            <p className="text-sm text-text-tertiary mt-1">
              © 2024 All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background-secondary border border-border text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
