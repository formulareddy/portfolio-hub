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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and case studies"
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-background-tertiary rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 h-full shadow-lg hover:shadow-glow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary via-background-tertiary/20 to-transparent opacity-90" />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-purple-600/20 to-transparent flex items-center justify-center"
                    >
                      <div className="p-5 rounded-full bg-background text-accent transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-glow">
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </motion.div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-accent border border-accent/20">
                        Case Study
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="text-xs bg-accent/10 text-accent border-accent/20">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-text-tertiary self-center">
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
