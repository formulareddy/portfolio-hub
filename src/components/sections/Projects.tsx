"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and case studies"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white dark:bg-[#141414] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-violet-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#141414] via-white/20 dark:via-[#141414]/20 to-transparent opacity-90" />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-transparent flex items-center justify-center"
                    >
                      <div className="p-5 rounded-full bg-white dark:bg-[#0a0a0a] text-violet-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-violet-500/25">
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </motion.div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full text-violet-500 border border-violet-500/20">
                        Case Study
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-violet-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="text-xs bg-violet-500/10 text-violet-500 border-violet-500/20">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
