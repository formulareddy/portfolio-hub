"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Palette,
  Figma,
  Globe,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="w-6 h-6" />,
  Backend: <Server className="w-6 h-6" />,
  "Design & Tools": <Palette className="w-6 h-6" />,
};

const skillIcons: Record<string, React.ReactNode> = {
  React: <Code2 className="w-4 h-4" />,
  "Next.js": <Globe className="w-4 h-4" />,
  TypeScript: <Terminal className="w-4 h-4" />,
  "Tailwind CSS": <Palette className="w-4 h-4" />,
  "Framer Motion": <Code2 className="w-4 h-4" />,
  "Node.js": <Server className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  Firebase: <Server className="w-4 h-4" />,
  GraphQL: <Database className="w-4 h-4" />,
  Python: <Terminal className="w-4 h-4" />,
  Figma: <Figma className="w-4 h-4" />,
  Git: <GitBranch className="w-4 h-4" />,
  Docker: <Server className="w-4 h-4" />,
  "CI/CD": <GitBranch className="w-4 h-4" />,
  AWS: <Server className="w-4 h-4" />,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px]" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with daily"
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600/50 via-purple-600/30 to-pink-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-background-secondary rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 text-accent border border-accent/20">
                    {iconMap[category.name]}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-accent/70">
                            {skillIcons[skill.name]}
                          </span>
                          <span className="text-sm font-medium text-text-secondary">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
