"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-text-secondary max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: "80px" } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 bg-accent mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
