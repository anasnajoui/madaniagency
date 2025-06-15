"use client"

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from 'next/image';

export function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Solo più efficiente.", "Solo più preciso.", "Solo più intelligente."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative">
      {/* Hero Text Section */}
      <div className="w-full relative">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-10 md:left-60 md:-top-20 opacity-40"
          fill="rgba(45, 81, 134, 0.6)"
        />
        <div className="container mx-auto px-4">
          <div className="flex gap-8 pt-32 pb-16 lg:pt-48 lg:pb-24 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl tracking-tighter text-center font-regular leading-tight">
                <div className="flex flex-col">
                  <span 
                    className="text-spektr-cyan-50"
                    style={{
                      textShadow: '0 0 20px rgba(96, 165, 250, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)',
                      filter: 'drop-shadow(0 0 12px rgba(96, 165, 250, 0.3))'
                    }}
                  >
                    <span className="block sm:inline">Il tuo nuovo</span>
                    <span className="block sm:inline sm:ml-3">
                      reparto vendite{' '}
                      <span 
                        className="animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(255, 193, 7, 0.8)) drop-shadow(0 0 30px rgba(255, 193, 7, 0.4))',
                          textShadow: '0 0 20px rgba(255, 193, 7, 0.6)',
                          fontSize: '0.8em'
                        }}
                      >
                        💰
                      </span>
                    </span>
                  </span>
                </div>
                <div className="block mt-4">
                  <span className="text-spektr-cyan-50 font-regular"> 
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleNumber}
                      className="inline-block font-semibold text-spektr-cyan-50"
                      style={{
                        textShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 2px 4px rgba(0, 0, 0, 0.3)',
                        filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))',
                        willChange: 'transform, opacity'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3
                      }}
                    >
                      {titles[titleNumber]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </div>
            <div className="flex flex-col items-center gap-4 relative z-30">
              <a
                href="#qualificati"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('qualificati');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                <ShimmerButton className="flex items-center justify-center">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Qualificati ora →
                  </span>
                </ShimmerButton>
              </a>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <p className="text-xs text-muted-foreground">meno di 1 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Madani Logo Container Scroll Section */}
      <div className="-mt-96 sm:-mt-96 lg:-mt-80">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative mx-auto h-full w-full">
            <Image
              src={`/madani.png`}
              alt="Madani Logo"
              height={576}
              width={1120}
              className="relative z-10 mx-auto object-contain h-full w-full"
              draggable={false}
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) saturate(130%) contrast(110%)",
                WebkitFilter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) saturate(130%) contrast(110%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 50%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 85%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.05) 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 85%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.05) 95%, transparent 100%)",
              }}
            />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
} 