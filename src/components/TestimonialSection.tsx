"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Star, TrendingUp, Award, Users, CheckCircle } from 'lucide-react'

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

export const TestimonialSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  
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

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "TechStart Milano",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      quote: "In soli 3 mesi abbiamo triplicato i nostri appuntamenti qualificati. Il sistema Madani ha trasformato completamente il nostro approccio alle vendite.",
      rating: 5,
      beforeLeads: 50,
      afterLeads: 200,
      beforeConversion: 8,
      afterConversion: 25,
      beforeRevenue: 15000,
      afterRevenue: 65000,
      growth: 333
    },
    {
      name: "Sofia Bianchi",
      company: "Wellness Pro",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?q=80&w=2070&auto=format&fit=crop",
      quote: "Professionalità e risultati concreti. Madani non promette miracoli, ma costruisce sistemi che funzionano davvero nel lungo termine.",
      rating: 5,
      beforeLeads: 30,
      afterLeads: 150,
      beforeConversion: 5,
      afterConversion: 22,
      beforeRevenue: 8000,
      afterRevenue: 35000,
      growth: 338
    },
    {
      name: "Luca Verdi",
      company: "Digital Solutions",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      quote: "Risultati oltre le aspettative. Il team Madani non è solo competente, ma capisce davvero le esigenze del business moderno.",
      rating: 5,
      beforeLeads: 80,
      afterLeads: 320,
      beforeConversion: 12,
      afterConversion: 28,
      beforeRevenue: 25000,
      afterRevenue: 95000,
      growth: 280
    }
  ]

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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-3xl"
            animate={{
              scale: isInView ? [1, 1.1, 1] : 1,
              opacity: isInView ? [0.08, 0.12, 0.08] : 0.08
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/6 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/6 rounded-full blur-2xl"></div>
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
                <span className="text-white/90 text-sm font-medium tracking-wide">risultati reali</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              I nostri clienti
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> parlano chiaro</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Trasformazioni concrete che parlano da sole
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:bg-gray-900/60 transition-all duration-500 rounded-2xl p-6 relative"
                variants={cardVariants}
              >
                {/* Header with Stars and Photo */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/30 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ 
                            scale: isInView ? 1 : 0,
                            rotate: isInView ? 0 : -45
                          }}
                          transition={{ 
                            delay: i * 0.1 + index * 0.2 + 0.5,
                            duration: 0.4,
                            type: "spring"
                          }}
                        >
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                    <p className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Growth Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Crescita</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                      <motion.div 
                        className="text-lg font-bold text-green-400 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ delay: index * 0.2 + 1 }}
                      >
                        +{testimonial.growth}%
                      </motion.div>
                      <div className="text-xs text-gray-400">Fatturato</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                      <motion.div 
                        className="text-lg font-bold text-blue-400 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ delay: index * 0.2 + 1.2 }}
                      >
                        {Math.round(testimonial.afterLeads / testimonial.beforeLeads)}x
                      </motion.div>
                      <div className="text-xs text-gray-400">Lead</div>
                    </div>
                  </div>

                  {/* Before/After Comparison */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="text-red-400 mb-1 font-medium">Prima</div>
                        <div className="text-gray-400">{testimonial.beforeLeads} lead/mese</div>
                        <div className="text-gray-400">{testimonial.beforeConversion}% conversione</div>
                      </div>
                      <div>
                        <div className="text-green-400 mb-1 font-medium">Dopo</div>
                        <div className="text-gray-400">{testimonial.afterLeads} lead/mese</div>
                        <div className="text-gray-400">{testimonial.afterConversion}% conversione</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ 
                    scale: isInView ? 1 : 0,
                    rotate: isInView ? 0 : -45
                  }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.5, type: "spring" }}
                >
                  <div className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats Summary */}
          <motion.div
            className="bg-gray-900/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Risultati aggregati dei nostri clienti
              </h3>
              <p className="text-gray-400 text-sm">
                Media dei risultati ottenuti nei primi 6 mesi di collaborazione
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-2xl font-bold text-blue-400">
                    {useCountUp(320, 2000, isInView)}%
                  </span>
                </div>
                <div className="text-xs text-gray-400">Aumento Lead</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-2xl font-bold text-green-400">
                    {useCountUp(150, 1800, isInView)}%
                  </span>
                </div>
                <div className="text-xs text-gray-400">Migliore Conversione</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold text-amber-400">
                    {useCountUp(340, 2200, isInView)}%
                  </span>
                </div>
                <div className="text-xs text-gray-400">Crescita Fatturato</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-2xl font-bold text-purple-400">
                    {useCountUp(98, 1500, isInView)}%
                  </span>
                </div>
                <div className="text-xs text-gray-400">Soddisfazione</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 