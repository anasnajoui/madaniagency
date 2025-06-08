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
        <div className="container mx-auto">
          <div className="flex gap-8 pt-32 pb-20 lg:pt-48 lg:pb-40 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular leading-tight">
                <div className="block">
                  <span 
                    className="text-spektr-cyan-50"
                    style={{
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(96, 165, 250, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4)',
                      filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.4))'
                    }}
                  >
                    Il tuo nuovo reparto vendite
                  </span>
                  <span 
                    className="text-4xl md:text-5xl ml-3 animate-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(255, 193, 7, 0.8)) drop-shadow(0 0 30px rgba(255, 193, 7, 0.4))',
                      textShadow: '0 0 20px rgba(255, 193, 7, 0.6)'
                    }}
                  >
                    💰
                  </span>
                </div>
                <div className="block mt-2">
                  <span 
                    className="text-spektr-cyan-50 font-regular"
                    style={{
                      textShadow: '0 0 25px rgba(255, 255, 255, 0.4), 0 0 50px rgba(96, 165, 250, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)',
                      filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.3))'
                    }}
                  > 
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleNumber}
                      className="inline-block font-semibold text-spektr-cyan-50"
                      style={{
                        textShadow: '0 0 35px rgba(255, 255, 255, 0.6), 0 0 70px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.4)',
                        filter: 'drop-shadow(0 0 25px rgba(96, 165, 250, 0.5)) brightness(1.1) contrast(1.1)'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 20,
                        duration: 0.5
                      }}
                    >
                      {titles[titleNumber]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShimmerButton className="flex items-center justify-center">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Scopri se puoi lavorare a percentuale →
                </span>
              </ShimmerButton>
              <p className="text-xs text-muted-foreground">15 secondi stimati.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Madani Logo Container Scroll Section */}
      <div className="-mt-96">
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
                maskImage: "linear-gradient(to bottom, black 0%, black 70%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.2) 96%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.2) 96%, transparent 100%)",
              }}
            />
          </div>
        </ContainerScroll>
      </div>


    </div>
  );
} 