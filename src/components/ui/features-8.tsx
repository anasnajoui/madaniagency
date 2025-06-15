"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, TrendingUp, Users, Zap, Target, CheckCircle, Clock, Euro, Phone, ChartBar, Award, Sparkles } from 'lucide-react'

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

// Animated progress bar component
function AnimatedProgressBar({ 
  percentage, 
  color = "green", 
  label, 
  value, 
  isVisible 
}: { 
  percentage: number
  color?: string
  label: string
  value: string
  isVisible: boolean
}) {
  const animatedPercentage = useCountUp(percentage, 1500, isVisible)
  
  const colorClasses = {
    green: "from-green-500 to-green-400 shadow-green-500/30",
    blue: "from-blue-500 to-blue-400 shadow-blue-500/30",
    purple: "from-purple-500 to-purple-400 shadow-purple-500/30",
    yellow: "from-yellow-500 to-yellow-400 shadow-yellow-500/30",
  }
  
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-400">{label}</span>
        <motion.span 
          className={`font-bold text-${color}-400`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          {isVisible ? animatedPercentage : 0}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} shadow-lg`}
          initial={{ width: "0%" }}
          animate={{ width: isVisible ? `${animatedPercentage}%` : "0%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()
    
    const appointmentsCount = useCountUp(32, 2000, isInView)
    const leadCount = useCountUp(520, 2500, isInView)
    const sectorsCount = useCountUp(15, 1800, isInView)
    const teamCount = useCountUp(47, 1500, isInView)
    const savingsCount = useCountUp(60, 2200, isInView)
    
    useEffect(() => {
      if (isInView) {
        controls.start("visible")
      }
    }, [isInView, controls])

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    }

    const cardVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }

    return (
        <section className="relative overflow-hidden" ref={ref}>
            {/* Smooth transition gradient overlay */}
            <div 
                className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
                style={{
                    background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, black 100%)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                }}
            />
            
            {/* Main section content */}
            <div className="py-16 sm:py-20 md:py-24 lg:py-28 bg-black relative">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Main central glow - much more vibrant */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-3xl"
                      animate={{
                        scale: isInView ? [1, 1.1, 1] : 1,
                        opacity: isInView ? [0.15, 0.2, 0.15] : 0.15
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Dynamic corner glows */}
                    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl"></div>
                </div>

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    {/* Enhanced Header */}
                    <motion.div 
                      className="text-center mb-8 space-y-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                      transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center mb-6">
                          <div 
                            className="px-6 py-3 rounded-full border"
                            style={{
                              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
                              borderColor: 'rgba(59, 130, 246, 0.3)',
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            }}
                          >
                            <span className="text-blue-400 text-sm font-semibold tracking-wide">Sistema All-in-One</span>
                          </div>
                        </div>
        
                        <h2 className="section-title mb-4">
                            Semplicemente i
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Migliori.</span>
                        </h2>
                        
                        <p className="section-subtitle max-w-2xl mx-auto">
                        Un sistema completo. Dal lead alla vendita ci occupiamo di tutto.
                        </p>
                    </motion.div>

                    {/* Compact Animated Bento Grid Layout */}
                    <motion.div 
                      className="grid grid-cols-12 gap-2.5 auto-rows-fr"
                      variants={containerVariants}
                      initial="hidden"
                      animate={controls}
                    >
                        
                        {/* Large Hero Card - Agenda Management */}
                        <motion.div className="col-span-12 lg:col-span-6 row-span-2" variants={cardVariants}>
                            <Card className="h-full relative overflow-hidden bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl">
                                <CardContent className="p-5 h-full flex flex-col">
                                    {/* Header with enhanced icon */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <motion.div 
                                              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30"
                                              whileHover={{ scale: 1.1, rotate: 5 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                                <Calendar className="w-5 h-5 text-blue-400" />
                                            </motion.div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-blue-400/60" />
                                                <CheckCircle className="w-4 h-4 text-green-400/60" />
                                                <Award className="w-4 h-4 text-yellow-400/60" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                            Agenda sempre piena
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Flusso costante di appuntamenti qualificati ogni giorno
                                        </p>
                                    </div>

                                    {/* Compact Visual Calendar Grid */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="w-full max-w-xs">
                                            <div className="grid grid-cols-7 gap-0.5 mb-2">
                                                {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((day) => (
                                                  <div key={day} className="text-center text-xs text-gray-500 py-1">{day}</div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-0.5">
                                                {Array.from({ length: 28 }, (_, i) => {
                                                    const blueShades = [
                                                        'bg-gradient-to-br from-blue-600 to-blue-700',
                                                        'bg-gradient-to-br from-blue-500 to-blue-600', 
                                                        'bg-gradient-to-br from-cyan-500 to-blue-500',
                                                        'bg-gradient-to-br from-blue-400 to-cyan-500',
                                                        'bg-gradient-to-br from-indigo-500 to-blue-600'
                                                    ];
                                                    const shadeIndex = i % blueShades.length;
                                                    return (
                                                        <motion.div 
                                                            key={i} 
                                                            className={`aspect-square rounded text-xs flex items-center justify-center font-medium text-white shadow-lg ${blueShades[shadeIndex]}`}
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            animate={{ 
                                                              scale: isInView ? 1 : 0, 
                                                              opacity: isInView ? 1 : 0 
                                                            }}
                                                            transition={{ 
                                                              delay: i * 0.02 + 0.5,
                                                              duration: 0.3,
                                                              ease: "backOut"
                                                            }}
                                                            whileHover={{ scale: 1.1 }}
                                                        >
                                                            {i + 1}
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Stats with animation */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <motion.div 
                                          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                          initial={{ scale: 0 }}
                                          animate={{ scale: isInView ? 1 : 0 }}
                                          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                                        >
                                            {appointmentsCount}+
                                        </motion.div>
                                        <div className="text-right">
                                            <div className="text-white font-semibold text-sm">Appuntamenti</div>
                                            <div className="text-gray-400 text-xs">ogni mese</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Conversion Rates Card */}
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-3" variants={cardVariants}>
                            <Card className="h-full relative overflow-hidden bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl">
                                <CardContent className="p-4 h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.div 
                                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-green-500/20 border border-green-500/30"
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <TrendingUp className="w-4 h-4 text-green-400" />
                                        </motion.div>
                                        <ChartBar className="w-4 h-4 text-green-400/60" />
                                        <Sparkles className="w-4 h-4 text-yellow-400/60" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        Tassi di conversione
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-4">
                                        I più alti del mercato
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <AnimatedProgressBar
                                          percentage={85}
                                          color="green"
                                          label="Lead → Appuntamenti"
                                          value="85%"
                                          isVisible={isInView}
                                        />
                                        <AnimatedProgressBar
                                          percentage={72}
                                          color="green"
                                          label="Appuntamenti → Vendite"
                                          value="72%"
                                          isVisible={isInView}
                                        />
                                        <AnimatedProgressBar
                                          percentage={92}
                                          color="green"
                                          label="Appuntamenti → Presenza"
                                          value="92%"
                                          isVisible={isInView}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* AI Sales Training Card */}
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-3" variants={cardVariants}>
                            <Card className="h-full relative overflow-hidden bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl">
                                <CardContent className="p-4 h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.div 
                                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30"
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                          animate={isInView ? { 
                                            boxShadow: ["0 0 0 rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.4)", "0 0 0 rgba(168, 85, 247, 0)"]
                                          } : {}}
                                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                        >
                                            <Users className="w-4 h-4 text-purple-400" />
                                        </motion.div>
                                        <div className="text-purple-400/80 text-xs font-bold">AI</div>
                                        <CheckCircle className="w-4 h-4 text-green-400/60" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        AI Sales Training
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-4">
                                        Trasformiamo venditori in top performer
                                    </p>
                                    
                                    {/* AI Training Progress */}
                                    <div className="space-y-3 mb-4">
                                        <div className="bg-white/5 rounded-lg p-2 border border-purple-500/20">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-gray-400">Tempo formazione</span>
                                                <motion.span 
                                                  className="text-purple-400 font-bold text-xs"
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: isInView ? 1 : 0 }}
                                                  transition={{ delay: 0.8 }}
                                                >
                                                  -75%
                                                </motion.span>
                                            </div>
                                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div 
                                                  className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                                                  initial={{ width: "0%" }}
                                                  animate={{ width: isInView ? "75%" : "0%" }}
                                                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="bg-white/5 rounded-lg p-2 border border-green-500/20">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-gray-400">Tasso chiusura</span>
                                                <motion.span 
                                                  className="text-green-400 font-bold text-xs"
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: isInView ? 1 : 0 }}
                                                  transition={{ delay: 1.0 }}
                                                >
                                                  +180%
                                                </motion.span>
                                            </div>
                                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div 
                                                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                                                  initial={{ width: "0%" }}
                                                  animate={{ width: isInView ? "90%" : "0%" }}
                                                  transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-xs text-gray-400">
                                        <div className="flex justify-between">
                                            <span>Venditori certificati:</span>
                                            <motion.span 
                                              className="text-white font-semibold"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: isInView ? 1 : 0 }}
                                              transition={{ delay: 1.2 }}
                                            >
                                              {teamCount}
                                            </motion.span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Automation Card */}
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-3" variants={cardVariants}>
                            <Card className="h-full relative overflow-hidden bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl">
                                <CardContent className="p-4 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.div 
                                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-yellow-500/20 border border-yellow-500/30"
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                          animate={isInView ? { 
                                            boxShadow: ["0 0 0 rgba(234, 179, 8, 0)", "0 0 20px rgba(234, 179, 8, 0.3)", "0 0 0 rgba(234, 179, 8, 0)"]
                                          } : {}}
                                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        >
                                            <Zap className="w-4 h-4 text-yellow-400" />
                                        </motion.div>
                                        <Clock className="w-4 h-4 text-yellow-400/60" />
                                        <Target className="w-4 h-4 text-orange-400/60" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        Automazione
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-4">
                                        Sistemi automatizzati per ridurre ogni costo
                                    </p>
                                    
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div 
                                              className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1"
                                              initial={{ scale: 0 }}
                                              animate={{ scale: isInView ? 1 : 0 }}
                                              transition={{ delay: 1, duration: 0.5, type: "spring" }}
                                            >
                                                -{savingsCount}%
                                            </motion.div>
                                            <div className="text-white font-medium text-sm">Costi operativi</div>
                                            <div className="text-gray-400 text-xs">risparmiati</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Volume & Strategy Card */}
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-3" variants={cardVariants}>
                            <Card className="h-full relative overflow-hidden bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl">
                                <CardContent className="p-4 h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.div 
                                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30"
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Target className="w-4 h-4 text-orange-400" />
                                        </motion.div>
                                        <Sparkles className="w-4 h-4 text-orange-400/60" />
                                        <Euro className="w-4 h-4 text-green-400/60" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        Volume e strategia unici
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-4">
                                        Approccio che nessun'altra agenzia può offrire
                                    </p>
                                    
                                    <div className="grid grid-cols-1 gap-2">
                                        <motion.div 
                                          className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                                          whileHover={{ scale: 1.02, borderColor: "rgba(251, 146, 60, 0.3)" }}
                                        >
                                            <motion.div 
                                              className="text-xl font-bold text-orange-400 mb-1"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: isInView ? 1 : 0 }}
                                              transition={{ delay: 0.8 }}
                                            >
                                              {leadCount}+
                                            </motion.div>
                                            <div className="text-xs text-gray-400">Lead mensili</div>
                                        </motion.div>
                                        <motion.div 
                                          className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                                          whileHover={{ scale: 1.02, borderColor: "rgba(251, 146, 60, 0.3)" }}
                                        >
                                            <motion.div 
                                              className="text-xl font-bold text-orange-400 mb-1"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: isInView ? 1 : 0 }}
                                              transition={{ delay: 1 }}
                                            >
                                              {sectorsCount}
                                            </motion.div>
                                            <div className="text-xs text-gray-400">Settori</div>
                                        </motion.div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
} 