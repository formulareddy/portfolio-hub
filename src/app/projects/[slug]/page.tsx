"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProjectBySlug, projects } from "@/lib/data";

interface CaseStudyNavProps {
  sections: string[];
  activeSection: string;
}

function CaseStudyNav({ sections, activeSection }: CaseStudyNavProps) {
  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-background-secondary/80 backdrop-blur-lg border border-border rounded-full px-4 py-3">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-3 text-sm transition-colors ${
                  activeSection === section.toLowerCase().replace(/\s+/g, "-")
                    ? "text-accent"
                    : "text-text-tertiary hover:text-foreground"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSection === section.toLowerCase().replace(/\s+/g, "-")
                      ? "bg-accent"
                      : "bg-text-tertiary"
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

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "problem", "process", "results"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
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

  return (
    <article className="min-h-screen">
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-text-secondary mb-6"
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
                <Badge key={tag}>{tag}</Badge>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
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
            <span className="text-4xl font-bold text-accent/20">01</span>
            <h2 className="text-2xl font-bold text-foreground">The Problem</h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">
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
            <span className="text-4xl font-bold text-accent/20">02</span>
            <h2 className="text-2xl font-bold text-foreground">The Process</h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {project.process}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.wireframes.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-background-secondary"
              >
                <Image
                  src={image}
                  alt={`Wireframe ${index + 1}`}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-text-secondary">
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
            <span className="text-4xl font-bold text-accent/20">03</span>
            <h2 className="text-2xl font-bold text-foreground">The Results</h2>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
            <p className="text-xl text-foreground leading-relaxed">
              {project.results}
            </p>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
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

          <div className="text-text-secondary">
            Next Project:
            <span className="text-foreground ml-2">
              {projects.find((p) => p.slug === params.slug)
                ? projects[
                    (projects.findIndex((p) => p.slug === params.slug) + 1) %
                      projects.length
                  ].title
                : ""}
            </span>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
