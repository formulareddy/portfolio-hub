"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProjectBySlug, projects } from "@/lib/data";

function CaseStudyNav({ sections, activeSection }: { sections: string[]; activeSection: string }) {
  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full px-4 py-3">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className={`flex items-center gap-3 text-sm transition-colors ${
                  activeSection === section.toLowerCase()
                    ? "text-violet-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSection === section.toLowerCase()
                      ? "bg-violet-500"
                      : "bg-gray-400 dark:bg-gray-600"
                  }`}
                />
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["overview", "problem", "process", "results"];
      for (const id of sectionIds.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    notFound();
  }

  const sections = ["Overview", "Problem", "Process", "Results"];
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen">
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-white/50 dark:via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects" className="inline-block mb-6">
              <Button variant="ghost" className="-ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl"
            >
              {project.fullDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <Badge key={tag} className="bg-violet-500/10 text-violet-500 border-violet-500/20">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <CaseStudyNav sections={sections} activeSection={activeSection} />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl font-bold text-violet-500/20">01</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </motion.section>

        <motion.section
          id="process"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl font-bold text-violet-500/20">02</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Process</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {project.process}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.wireframes.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800"
              >
                <Image
                  src={image}
                  alt={`Wireframe ${index + 1}`}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-400">
                  Wireframe {index + 1}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="results"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl font-bold text-violet-500/20">03</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Results</h2>
          </div>
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-8">
            <p className="text-xl text-gray-900 dark:text-white leading-relaxed">
              {project.results}
            </p>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-500 transition-colors"
          >
            Next Project:
            <span className="font-medium text-gray-900 dark:text-white">{nextProject.title}</span>
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
