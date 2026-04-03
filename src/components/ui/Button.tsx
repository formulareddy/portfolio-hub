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
      children,
      disabled,
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
          "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full",
          "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40":
              variant === "primary",
            "border-2 border-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-[2px]":
              variant === "secondary",
            "text-text-secondary hover:text-foreground": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          variant === "secondary" && "hover:bg-background-secondary",
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        {variant === "secondary" && (
          <span className="w-full h-full flex items-center justify-center bg-background rounded-full px-6 py-3 hover:bg-background-secondary transition-colors">
            {children}
          </span>
        )}
        {(variant === "primary" || variant === "ghost") && children}
        {isLoading && variant !== "secondary" && (
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
        {isLoading && variant === "secondary" && (
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
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
