"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-background-secondary border border-border rounded-xl py-3 px-4 text-foreground transition-all duration-200",
            "placeholder:text-text-tertiary",
            "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-border",
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-background-secondary border border-border rounded-xl py-3 px-4 text-foreground transition-all duration-200 resize-none min-h-[120px]",
            "placeholder:text-text-tertiary",
            "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-border",
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
