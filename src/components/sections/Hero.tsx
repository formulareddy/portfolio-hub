"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-600/30 via-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-pink-600/20 via-purple-600/15 to-transparent rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/5 to-transparent rounded-full blur-[150px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/80 backdrop-blur-sm border border-border mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-text-secondary">
              {personalInfo.available ? "Available for freelance work" : "Currently unavailable"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[120px] font-black text-foreground mb-6 leading-[0.9] tracking-tight"
          >
            <span className="block">Hi, I&apos;m</span>
            <span className="gradient-text block mt-2">
              {personalInfo.name.split(" ")[0]}
              <span className="text-foreground">.</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <p className="text-lg md:text-xl text-text-secondary flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              {personalInfo.title}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects">
              <Button size="lg" className="shadow-glow hover:shadow-glow-lg">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                Get In Touch
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-text-tertiary uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
