"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HeroTypography } from '@/components/ui/hero-typography'

// Custom hook for number animation
function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!trigger) return
    
    let startTime: number
    const startValue = 0
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const currentCount = Math.floor(progress * (target - startValue) + startValue)
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [target, duration, trigger])
  
  return count
}

const processSteps = [
  {
    id: 'lead-gen',
    title: "Lead Generation",
    subtitle: "Acquisizione Clienti",
    description: "Creiamo campagne di digital marketing mirate che attirano prospect qualificati nel tuo settore attraverso canali ottimizzati e strategie data-driven.",
    emoji: "🎯",
    bgGradient: "from-blue-500/8 via-cyan-500/4 to-transparent",
    glowColor: "#3b82f6",
    borderColor: "#3b82f6",
    metrics: { value: 1500, label: "Lead generati mensilmente", unit: "+" }
  },
  {
    id: 'appointments',
    title: "Qualificazione & Appuntamenti",
    subtitle: "Selezione Prospect",
    description: "Filtriamo e qualifichiamo ogni lead per prenotare appuntamenti solo con prospect che hanno reale interesse e budget disponibile per acquistare.",
    emoji: "📅",
    bgGradient: "from-violet-500/8 via-purple-500/4 to-transparent",
    glowColor: "#8b5cf6",
    borderColor: "#8b5cf6",
    metrics: { value: 85, label: "Tasso di qualificazione", unit: "%" }
  },
  {
    id: 'sales',
    title: "Chiusura Vendite",
    subtitle: "Conversione Finale",
    description: "Gestiamo le chiamate di vendita con script testati e formiamo il tuo team per massimizzare le conversioni e chiudere più contratti.",
    emoji: "💰",
    bgGradient: "from-emerald-500/8 via-green-500/4 to-transparent",
    glowColor: "#10b981",
    borderColor: "#10b981",
    metrics: { value: 72, label: "Tasso di chiusura", unit: "%" }
  }
];

export const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  
  // Animated metrics
  const metrics = processSteps.map(step => 
    useCountUp(step.metrics.value, 2000, isInView)
  )
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Refined animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const flowVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <style>{`
        @keyframes elegant-flow {
          0%, 100% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.4));
          }
        }
        @keyframes card-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <section 
        className="relative overflow-hidden bg-black" 
        ref={ref}
        aria-labelledby="how-it-works-title"
        role="region"
      >
        {/* Refined Background Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-violet-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-emerald-500/3 rounded-full blur-3xl" />
        </div>

        <div className="py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -15 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-8">
                <div 
                  className="px-6 py-3 rounded-full border backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <span className="text-blue-400 text-sm font-semibold tracking-wide">Processo Automatizzato</span>
                </div>
              </div>
              
              <h2 className="section-title text-white mb-8 text-center" id="how-it-works-title">
                Come Funziona il
                <span 
                  className="block bg-clip-text text-transparent mt-3"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                  }}
                >
                  Sistema Madani
                </span>
              </h2>
              
              <p className="section-subtitle text-gray-300 max-w-4xl mx-auto text-center mb-16 leading-relaxed px-4">
                Un processo automatizzato in 3 fasi che trasforma visitatori anonimi in clienti paganti attraverso un sistema testato e ottimizzato.
              </p>

              {/* System Stats */}
              <div className="flex flex-wrap justify-center gap-12 md:gap-20 lg:gap-24">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-400 mb-3">3</div>
                  <div className="body-small text-gray-400 uppercase tracking-wider font-medium">Fasi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-violet-400 mb-3">24/7</div>
                  <div className="body-small text-gray-400 uppercase tracking-wider font-medium">Automatico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-400 mb-3">∞</div>
                  <div className="body-small text-gray-400 uppercase tracking-wider font-medium">Scalabile</div>
                </div>
              </div>
            </motion.div>

            {/* Process Flow Container */}
            <div className="relative max-w-6xl mx-auto mt-8">
              
              {/* Desktop Flow */}
              <div className="hidden lg:block">
                <div className="relative mb-16">
                  
                  {/* Elegant Flow Line */}
                  <div className="relative h-12 mb-12" role="presentation" aria-hidden="true">
                    {/* Background Track */}
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 transform -translate-y-1/2 bg-gray-800/30 rounded-full" />
                    
                    {/* Animated Flow */}
                    <motion.div 
                      className="absolute top-1/2 left-8 right-8 h-0.5 transform -translate-y-1/2 rounded-full z-10"
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
                        backgroundSize: "200% 100%",
                        animation: isInView ? 'elegant-flow 6s ease-in-out infinite' : 'none',
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
                      }}
                      variants={flowVariants}
                      initial="hidden"
                      animate={controls}
                    />
                  </div>
                  
                  {/* Process Cards */}
                  <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    role="list"
                    aria-label="Process steps"
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        className="group relative"
                        variants={cardVariants}
                        role="listitem"
                      >
                        {/* Connection Line */}
                        <motion.div
                          className="absolute w-0.5 h-12 z-20"
                          style={{
                            left: '50%',
                            top: '-48px',
                            transform: 'translateX(-50%)',
                            background: `linear-gradient(180deg, ${step.glowColor}, transparent)`,
                            animation: isInView ? 'subtle-pulse 3s ease-in-out infinite' : 'none'
                          }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                          aria-hidden="true"
                        />

                        {/* Card */}
                        <div 
                          className="relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 min-h-[360px] group-hover:transform group-hover:scale-[1.02]"
                          style={{
                            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.6) 100%)",
                            borderColor: `${step.glowColor}40`,
                            boxShadow: `0 0 20px ${step.glowColor}10, 0 4px 20px rgba(0,0,0,0.2)`
                          }}
                          aria-labelledby={`step-${index + 1}-title`}
                        >
                          {/* Shimmer Overlay */}
                          <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                              background: `linear-gradient(90deg, transparent 0%, ${step.glowColor}20 50%, transparent 100%)`,
                              backgroundSize: "200% 100%",
                              animation: 'card-shimmer 8s ease-in-out infinite'
                            }}
                          />

                          {/* Content */}
                          <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                            
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                              <div 
                                className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center border text-2xl lg:text-3xl flex-shrink-0"
                                style={{
                                  backgroundColor: `${step.glowColor}10`,
                                  borderColor: `${step.glowColor}30`
                                }}
                                aria-hidden="true"
                              >
                                {step.emoji}
                              </div>
                              
                              {/* Step Number */}
                              <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border flex-shrink-0"
                                style={{
                                  backgroundColor: step.glowColor,
                                  borderColor: '#ffffff20',
                                  boxShadow: `0 0 10px ${step.glowColor}40`
                                }}
                                aria-label={`Step ${index + 1}`}
                              >
                                {index + 1}
                              </div>
                            </div>
                            
                            {/* Process Info */}
                            <div className="mb-4">
                              <div className="ui-label text-gray-400 mb-2">
                                {step.subtitle}
                              </div>
                              <h3 
                                id={`step-${index + 1}-title`}
                                className="text-lg lg:text-xl font-bold text-white leading-tight"
                              >
                                {step.title}
                              </h3>
                            </div>
                            
                            {/* Description */}
                            <p className="body-medium text-gray-300 mb-6 flex-grow">
                              {step.description}
                            </p>
                            
                            {/* Metrics */}
                            <div className="mt-auto">
                              <div className="flex items-center justify-between mb-4">
                                <div className="min-w-0 flex-1">
                                  <div 
                                    className="text-xl lg:text-2xl font-black"
                                    style={{ 
                                      color: step.glowColor,
                                      filter: `drop-shadow(0 0 8px ${step.glowColor}40)`
                                    }}
                                    aria-label={`${metrics[index]}${step.metrics.unit} ${step.metrics.label}`}
                                  >
                                    {metrics[index]}{step.metrics.unit}
                                  </div>
                                  <div className="body-small text-gray-400">
                                    {step.metrics.label}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Status Indicator */}
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ 
                                    backgroundColor: step.glowColor,
                                    animation: 'subtle-pulse 2s ease-in-out infinite'
                                  }}
                                  aria-hidden="true"
                                />
                                <span className="text-xs text-gray-400">
                                  Sistema operativo
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              {/* Mobile Flow - Vertical Timeline */}
              <div className="lg:hidden">
                <div className="relative px-4">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800/30 rounded-full" role="presentation" aria-hidden="true" />
                  
                  {/* Animated Vertical Flow */}
                  <motion.div
                    className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full z-10"
                    style={{
                      background: "linear-gradient(180deg, #3b82f6, #8b5cf6, #10b981)",
                      boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)"
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isInView ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                
                  {/* Mobile Cards */}
                  <motion.div 
                    className="space-y-12 relative ml-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    role="list"
                    aria-label="Process steps"
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        className="relative"
                        variants={cardVariants}
                        role="listitem"
                      >
                        {/* Horizontal Connection Line */}
                        <motion.div 
                          className="absolute w-8 h-0.5 z-20"
                          style={{
                            left: '-32px',
                            top: '20px',
                            background: `linear-gradient(90deg, ${step.glowColor}, transparent)`,
                            animation: isInView ? 'subtle-pulse 3s ease-in-out infinite' : 'none'
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                          aria-hidden="true"
                        />

                        {/* Card */}
                        <div 
                          className="relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-200 min-h-[280px] w-full"
                          style={{
                            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.6) 100%)",
                            borderColor: `${step.glowColor}40`,
                            boxShadow: `0 0 15px ${step.glowColor}08, 0 4px 15px rgba(0,0,0,0.2)`
                          }}
                          aria-labelledby={`mobile-step-${index + 1}-title`}
                        >
                          {/* Shimmer Overlay */}
                          <div 
                            className="absolute inset-0 opacity-15"
                            style={{
                              background: `linear-gradient(90deg, transparent 0%, ${step.glowColor}20 50%, transparent 100%)`,
                              backgroundSize: "200% 100%",
                              animation: 'card-shimmer 8s ease-in-out infinite'
                            }}
                          />

                          {/* Content */}
                          <div className="relative z-10 p-5 h-full flex flex-col">
                            
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center border text-xl flex-shrink-0"
                                style={{
                                  backgroundColor: `${step.glowColor}10`,
                                  borderColor: `${step.glowColor}30`
                                }}
                                aria-hidden="true"
                              >
                                {step.emoji}
                              </div>
                              
                              {/* Step Number */}
                              <div 
                                className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs border flex-shrink-0"
                                style={{
                                  backgroundColor: step.glowColor,
                                  borderColor: '#ffffff20',
                                  boxShadow: `0 0 8px ${step.glowColor}40`
                                }}
                                aria-label={`Step ${index + 1}`}
                              >
                                {index + 1}
                              </div>
                            </div>

                            {/* Process Info */}
                            <div className="mb-3">
                              <div className="ui-label text-gray-400 mb-1">
                                {step.subtitle}
                              </div>
                              <h3 
                                id={`mobile-step-${index + 1}-title`}
                                className="text-base font-bold text-white leading-tight"
                              >
                                {step.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="body-medium text-gray-300 mb-4 flex-grow">
                              {step.description}
                            </p>
                
                            {/* Metrics */}
                            <div className="mt-auto">
                              <div className="flex items-center justify-between mb-3">
                                <div className="min-w-0 flex-1">
                                  <div 
                                    className="text-lg font-black"
                                    style={{ 
                                      color: step.glowColor,
                                      filter: `drop-shadow(0 0 6px ${step.glowColor}40)`
                                    }}
                                    aria-label={`${metrics[index]}${step.metrics.unit} ${step.metrics.label}`}
                                  >
                                    {metrics[index]}{step.metrics.unit}
                                  </div>
                                  <div className="text-xs text-gray-400 font-medium">
                                    {step.metrics.label}
                                  </div>
                                </div>
                              </div>

                              {/* Status Indicator */}
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ 
                                    backgroundColor: step.glowColor,
                                    animation: 'subtle-pulse 2s ease-in-out infinite'
                                  }}
                                  aria-hidden="true"
                                />
                                <span className="text-xs text-gray-400">
                                  Sistema operativo
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 