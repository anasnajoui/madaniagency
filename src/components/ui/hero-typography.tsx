import React from "react";
import { cn } from "@/lib/utils";

interface HeroTypographyProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
  center?: boolean;
}

export function HeroTypography({ 
  children, 
  size = "lg", 
  className = "",
  glow = false,
  center = true
}: HeroTypographyProps) {
  const sizeClasses = {
    sm: "text-3xl md:text-4xl lg:text-5xl",
    md: "text-4xl md:text-5xl lg:text-6xl", 
    lg: "text-5xl md:text-7xl",
    xl: "text-6xl md:text-8xl"
  };

  const baseStyles = glow ? {
    textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(96, 165, 250, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4)',
    filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.4))'
  } : {};

  return (
    <h2 
      className={cn(
        sizeClasses[size],
        "max-w-4xl tracking-tighter font-regular leading-tight text-spektr-cyan-50",
        center && "text-center",
        className
      )}
      style={baseStyles}
    >
      {children}
    </h2>
  );
} 