"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/lib/data";
import { MapPin, Award, Users, Clock } from "lucide-react";

const highlights = [
  "Problem Solving",
  "User-Centered Design",
  "Clean Code",
  "Performance",
  "Collaboration",
];

const stats = [
  { icon: Clock, value: "2+", label: "Years Experience" },
  { icon: Award, value: "15+", label: "Projects Delivered" },
  { icon: Users, value: "10+", label: "Happy Clients" },
  { icon: MapPin, value: "AP", label: "Andhra Pradesh" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="About Me" 
          subtitle="A little bit about my journey and passion"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur-xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Reddaiah Dasuru"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-[#141414] rounded-2xl px-6 py-4 border border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text">2+ Years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">of Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe that great products are born at the intersection of design
              thinking and technical excellence. Every pixel matters, every
              interaction tells a story.
            </p>

            <div className="pt-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
                Core Strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge className="px-4 py-1.5">{item}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                    <stat.icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
