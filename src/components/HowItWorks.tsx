"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Zap, Filter, Handshake, TrendingUp, Calendar, Users, Target, CheckCircle } from 'lucide-react'

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

export const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  
  const leadCount = useCountUp(1500, 2000, isInView)
  const qualificationRate = useCountUp(85, 1800, isInView)
  const appointmentsCount = useCountUp(25, 1500, isInView)
  const closingRate = useCountUp(72, 2200, isInView)
  const salesCount = useCountUp(150, 2500, isInView)
  
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
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
      
      <div className="py-16 sm:py-20 md:py-24 lg:py-28 bg-black relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: isInView ? [1, 1.1, 1] : 1,
              opacity: isInView ? [0.1, 0.15, 0.1] : 0.1
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-400/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/8 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-8 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center mb-3">
              <div className="px-4 py-2 bg-white/[0.06] border border-white/20 rounded-full backdrop-blur-sm">
                <span className="text-white/90 text-sm font-medium tracking-wide">il nostro processo</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Come trasformiamo
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> lead in vendite</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Il nostro sistema in 3 fasi ti porta dai contatti freddi alle vendite chiuse, gestendo tutto il processo o formando il tuo team.
            </p>
          </motion.div>

          {/* Three-Step Process Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            
            {/* Step 1: Lead Generation */}
            <motion.div 
              className="bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl p-6 relative"
              variants={cardVariants}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400/60" />
                  <TrendingUp className="w-4 h-4 text-green-400/60" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wide">generazione</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Generiamo Lead Qualificati
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Creiamo campagne mirate per attirare prospect interessati ai tuoi servizi, usando strategie avanzate di targeting e content marketing.
              </p>
              
              {/* Animated Funnel */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div 
                    className="w-16 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-2xl shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  />
                  <motion.div 
                    className="w-12 h-8 bg-gradient-to-b from-blue-600 to-blue-800 mx-auto -mt-1 rounded-b-lg shadow-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  />
                  {/* Floating leads */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-3 h-3 rounded-full ${
                        i === 0 ? 'bg-yellow-400 -top-1 -left-2' :
                        i === 1 ? 'bg-green-400 -top-0 -right-2' :
                        'bg-cyan-400 -bottom-0 -left-1'
                      }`}
                      animate={isInView ? {
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 0.8]
                      } : { scale: 0, opacity: 0 }}
                      transition={{
                        delay: 0.8 + i * 0.2,
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Lead mensili</span>
                  <motion.span 
                    className="text-blue-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1 }}
                  >
                    {leadCount}+
                  </motion.span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/30"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? "95%" : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: Qualification & Appointments */}
            <motion.div 
              className="bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl p-6 relative"
              variants={cardVariants}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Filter className="w-5 h-5 text-orange-400" />
                </motion.div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-400/60" />
                  <CheckCircle className="w-4 h-4 text-green-400/60" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">qualificazione</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Filtriamo e Prenotiamo
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Qualifichiamo ogni lead per verificare budget e interesse reale, poi prenotiamo appuntamenti solo con prospect pronti a comprare.
              </p>
              
              {/* Animated Calendar/Filter */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div 
                    className="w-16 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg p-2"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ 
                      scale: isInView ? 1 : 0,
                      rotate: isInView ? 0 : -10
                    }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                  >
                    <div className="grid grid-cols-4 gap-0.5">
                      {Array.from({ length: 12 }, (_, i) => (
                        <motion.div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full ${[2,5,9].includes(i) ? 'bg-green-400' : 'bg-white/40'}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: isInView ? 1 : 0 }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  {/* Filter badge */}
                  <motion.div 
                    className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
                  >
                    <CheckCircle className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Tasso qualificazione</span>
                  <motion.span 
                    className="text-orange-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1 }}
                  >
                    {qualificationRate}%
                  </motion.span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Appuntamenti settimanali</span>
                  <motion.span 
                    className="text-green-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    {appointmentsCount}+
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Sales Coordination */}
            <motion.div 
              className="bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl p-6 relative"
              variants={cardVariants}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Handshake className="w-5 h-5 text-green-400" />
                </motion.div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400/60" />
                  <TrendingUp className="w-4 h-4 text-yellow-400/60" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400 text-sm font-medium uppercase tracking-wide">coordinamento</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Gestiamo le Vendite
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Formiamo il tuo team di vendita con script e tecniche comprovate, o gestiamo direttamente noi le chiamate per chiudere le vendite.
              </p>
              
              {/* Animated Handshake/Success */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div 
                    className="w-16 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <Handshake className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  {/* Success indicators */}
                  <motion.div 
                    className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ 
                      scale: isInView ? 1 : 0,
                      rotate: isInView ? 0 : -45
                    }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                  >
                    💰
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center text-xs"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ 
                      scale: isInView ? 1 : 0,
                      rotate: isInView ? 0 : 45
                    }}
                    transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                  >
                    📈
                  </motion.div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Tasso di chiusura</span>
                  <motion.span 
                    className="text-green-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1 }}
                  >
                    {closingRate}%
                  </motion.span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Vendite mensili</span>
                  <motion.span 
                    className="text-yellow-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    {salesCount}+
                  </motion.span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
} 