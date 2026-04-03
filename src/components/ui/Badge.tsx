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
        "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
        "border border-gray-200 dark:border-gray-700",
        "transition-all duration-200",
        "hover:border-violet-500/30",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
