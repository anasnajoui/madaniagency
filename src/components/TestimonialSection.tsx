"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Star, TrendingUp, Award, Users, CheckCircle, Calendar, Target } from 'lucide-react'

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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
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

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "TechStart Milano",
      role: "CEO",
      image: "https://avatar.iran.liara.run/public/boy?username=marcorossi",
      quote: "In soli 3 mesi abbiamo triplicato i nostri appuntamenti qualificati e raddoppiato il tasso di chiusura. Il sistema Madani ha trasformato completamente il nostro approccio alle vendite.",
      rating: 5,
      beforeLeads: 50,
      afterLeads: 200,
      beforeAppointments: 12,
      afterAppointments: 45,
      beforeConversion: 8,
      afterConversion: 25,
      beforeSalesRate: 15,
      afterSalesRate: 32,
      beforeRevenue: 15000,
      afterRevenue: 65000,
      growth: 333
    },
    {
      name: "Sofia Bianchi",
      company: "Wellness Pro",
      role: "Founder",
      image: "https://avatar.iran.liara.run/public/girl?username=sofiabianchi",
      quote: "Professionalità e risultati concreti. Madani non promette miracoli, ma costruisce sistemi che funzionano davvero: più appuntamenti qualificati e vendite che si chiudono.",
      rating: 5,
      beforeLeads: 30,
      afterLeads: 150,
      beforeAppointments: 8,
      afterAppointments: 35,
      beforeConversion: 5,
      afterConversion: 22,
      beforeSalesRate: 12,
      afterSalesRate: 28,
      beforeRevenue: 8000,
      afterRevenue: 35000,
      growth: 338
    },
    {
      name: "Luca Verdi",
      company: "Digital Solutions",
      role: "CMO",
      image: "https://avatar.iran.liara.run/public/boy?username=lucaverdi",
      quote: "Risultati oltre le aspettative. Il team Madani non è solo competente, ma capisce davvero le esigenze del business moderno. Appuntamenti di qualità e vendite che si concretizzano.",
      rating: 5,
      beforeLeads: 80,
      afterLeads: 320,
      beforeAppointments: 18,
      afterAppointments: 72,
      beforeConversion: 12,
      afterConversion: 28,
      beforeSalesRate: 18,
      afterSalesRate: 38,
      beforeRevenue: 25000,
      afterRevenue: 95000,
      growth: 280
    }
  ]

  return (
    <>
      <style>{`
        @keyframes card-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes subtle-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.3));
          }
          50% { 
            filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
          }
        }
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <section className="relative overflow-hidden bg-black" ref={ref}>
        {/* Refined Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-emerald-500/3 rounded-full blur-3xl" />
        </div>

        <div className="py-16 sm:py-20 md:py-24 lg:py-28 relative z-10">
          <div className="mx-auto max-w-6xl px-6">
            {/* Header */}
            <motion.div 
              className="text-center mb-12 space-y-4"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -15 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div 
                  className="px-6 py-3 rounded-full border backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <span className="text-blue-400 text-sm font-semibold tracking-wide">Risultati Comprovati</span>
                </div>
              </div>
              
              <h2 className="section-title mb-4">
                I nostri clienti
                <span 
                  className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))'
                  }}
                > parlano chiaro</span>
              </h2>
              
              <p className="section-subtitle max-w-2xl mx-auto text-gray-300">
                Trasformazioni concrete che parlano da sole
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.6) 100%)",
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.05), 0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  variants={cardVariants}
                >
                  {/* Subtle shimmer overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                      animation: 'card-shimmer 8s ease-in-out infinite'
                    }}
                  />

                  {/* Header with Stars and Photo */}
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <div 
                      className="w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0"
                      style={{
                        borderColor: 'rgba(245, 158, 11, 0.3)',
                        animation: 'gentle-pulse 4s ease-in-out infinite'
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
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
                            <Star 
                              className="w-4 h-4 text-amber-400 fill-current" 
                              style={{
                                filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.4))'
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                      <p className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Enhanced Growth Metrics */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp 
                        className="w-4 h-4 text-emerald-400" 
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))'
                        }}
                      />
                      <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">Risultati Ottenuti</span>
                    </div>
                    
                    {/* Main Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div 
                        className="rounded-lg p-3 text-center border"
                        style={{
                          background: "rgba(15, 23, 42, 0.4)",
                          borderColor: 'rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <motion.div 
                          className="text-lg font-bold text-emerald-400 mb-1"
                          style={{
                            filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))'
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isInView ? 1 : 0 }}
                          transition={{ delay: index * 0.2 + 1 }}
                        >
                          +{testimonial.growth}%
                        </motion.div>
                        <div className="text-xs text-gray-400">Fatturato</div>
                      </div>
                      
                      <div 
                        className="rounded-lg p-3 text-center border"
                        style={{
                          background: "rgba(15, 23, 42, 0.4)",
                          borderColor: 'rgba(59, 130, 246, 0.2)'
                        }}
                      >
                        <motion.div 
                          className="text-lg font-bold text-blue-400 mb-1"
                          style={{
                            filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isInView ? 1 : 0 }}
                          transition={{ delay: index * 0.2 + 1.2 }}
                        >
                          {Math.round(testimonial.afterLeads / testimonial.beforeLeads)}x
                        </motion.div>
                        <div className="text-xs text-gray-400">Lead</div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        className="rounded-lg p-2 text-center border"
                        style={{
                          background: "rgba(15, 23, 42, 0.3)",
                          borderColor: 'rgba(139, 92, 246, 0.2)'
                        }}
                      >
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Calendar className="w-3 h-3 text-violet-400" />
                          <motion.div 
                            className="text-sm font-bold text-violet-400"
                            style={{
                              filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.4))'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ delay: index * 0.2 + 1.4 }}
                          >
                            {Math.round(testimonial.afterAppointments / testimonial.beforeAppointments)}x
                          </motion.div>
                        </div>
                        <div className="text-xs text-gray-400">Appuntamenti</div>
                      </div>
                      
                      <div 
                        className="rounded-lg p-2 text-center border"
                        style={{
                          background: "rgba(15, 23, 42, 0.3)",
                          borderColor: 'rgba(245, 158, 11, 0.2)'
                        }}
                      >
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Target className="w-3 h-3 text-amber-400" />
                          <motion.div 
                            className="text-sm font-bold text-amber-400"
                            style={{
                              filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.4))'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ delay: index * 0.2 + 1.6 }}
                          >
                            +{testimonial.afterSalesRate - testimonial.beforeSalesRate}%
                          </motion.div>
                        </div>
                        <div className="text-xs text-gray-400">Tasso Vendite</div>
                      </div>
                    </div>

                    {/* Before/After Comparison */}
                    <div 
                      className="pt-3 border-t"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-red-400 mb-1 font-medium">Prima</div>
                          <div className="text-gray-400">{testimonial.beforeLeads} lead/mese</div>
                          <div className="text-gray-400">{testimonial.beforeAppointments} appuntamenti</div>
                          <div className="text-gray-400">{testimonial.beforeSalesRate}% vendite</div>
                        </div>
                        <div>
                          <div className="text-emerald-400 mb-1 font-medium">Dopo</div>
                          <div className="text-gray-400">{testimonial.afterLeads} lead/mese</div>
                          <div className="text-gray-400">{testimonial.afterAppointments} appuntamenti</div>
                          <div className="text-gray-400">{testimonial.afterSalesRate}% vendite</div>
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
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center border"
                      style={{
                        background: "rgba(16, 185, 129, 0.1)",
                        borderColor: 'rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <CheckCircle 
                        className="w-4 h-4 text-emerald-400" 
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))'
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Bottom Stats Summary */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border backdrop-blur-sm p-8"
              style={{
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.6) 100%)",
                borderColor: 'rgba(59, 130, 246, 0.2)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.05), 0 4px 20px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Subtle shimmer overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: 'card-shimmer 10s ease-in-out infinite'
                }}
              />

              <div className="text-center mb-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  Risultati aggregati dei nostri clienti
                </h3>
                <p className="text-gray-400 text-sm">
                  Media dei risultati ottenuti nei primi 6 mesi di collaborazione
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Users 
                      className="w-5 h-5 text-blue-400 mr-2" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-blue-400"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                      }}
                    >
                      {useCountUp(320, 2000, isInView)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Aumento Lead</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Calendar 
                      className="w-5 h-5 text-violet-400 mr-2" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))'
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-violet-400"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))'
                      }}
                    >
                      {useCountUp(380, 2100, isInView)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Più Appuntamenti</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Target 
                      className="w-5 h-5 text-amber-400 mr-2" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.4))'
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-amber-400"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))'
                      }}
                    >
                      +{useCountUp(18, 1600, isInView)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Tasso Vendite</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp 
                      className="w-5 h-5 text-emerald-400 mr-2" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))'
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-emerald-400"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                      }}
                    >
                      {useCountUp(340, 2200, isInView)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Crescita Fatturato</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle 
                      className="w-5 h-5 text-emerald-400 mr-2" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))'
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-emerald-400"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                      }}
                    >
                      {useCountUp(98, 1500, isInView)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Soddisfazione</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 