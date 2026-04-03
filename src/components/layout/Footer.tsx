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
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-[#0a0a0a] dark:to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="gradient-text">Hitanimes55</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center justify-center md:justify-start gap-1">
              Designed & Built with <Heart className="w-4 h-4 text-pink-500 animate-pulse" /> by <span className="font-medium text-gray-900 dark:text-white">Reddaiah Dasuri</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
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
                className="p-3 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-violet-500 hover:border-violet-500/30 transition-all duration-300"
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
