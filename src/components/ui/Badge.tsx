"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "bg-background-tertiary text-text-secondary",
        "border border-border",
        "transition-all duration-200",
        "hover:border-accent/30",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
