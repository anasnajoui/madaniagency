"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}

export function NeonBorder({
  children,
  className,
  duration = 3,
  clockwise = true,
}: NeonBorderProps) {
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 100%)",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevState) => rotateDirection(prevState));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration, clockwise]);

  return (
    <div className={cn("relative", className)}>
      {children}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          filter: "blur(1px)",
          zIndex: -1,
        }}
        initial={{ background: movingMap[direction] }}
        animate={{ background: movingMap[direction] }}
        transition={{ ease: "linear", duration: duration }}
      />
    </div>
  );
} 