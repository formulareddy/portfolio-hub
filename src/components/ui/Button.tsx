"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      children,
      onClick,
      type = "button",
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          {
            "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40":
              variant === "primary",
            "border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-violet-500 hover:text-violet-500 bg-transparent":
              variant === "secondary",
            "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-transparent":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm min-h-[40px]": size === "sm",
            "px-6 py-3 text-base min-h-[48px]": size === "md",
            "px-8 py-4 text-lg min-h-[56px]": size === "lg",
          },
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        {isLoading && (
          <svg
            className="absolute w-5 h-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className={isLoading ? "invisible" : ""}>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
