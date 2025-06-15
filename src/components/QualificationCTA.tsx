'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight, Shield, Target, Users, Clock } from 'lucide-react'

interface QualificationCTAProps {
  className?: string
}

export default function QualificationCTA({ className = '' }: QualificationCTAProps) {
  const [loading, setLoading] = useState(true)
  const [iframeKey, setIframeKey] = useState(Date.now())
  const calendarRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Auto-hide loading after 5 seconds if iframe doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Force iframe refresh on component mount
  useEffect(() => {
    setIframeKey(Date.now())
  }, [])

  // Two key benefits - focused but not overwhelming
  const benefits = [
    {
      icon: Target,
      text: "Analisi completa del tuo sistema di acquisizione clienti",
      color: "text-blue-400",
      glow: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: Users,
      text: "Strategia personalizzata per scalare il tuo business",
      color: "text-emerald-400",
      glow: "rgba(16, 185, 129, 0.4)"
    }
  ]

  return (
    <>
      <style>{`
        @keyframes calendar-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes floating-arrow {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(6px); }
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="relative overflow-hidden bg-black"
      >
        {/* Minimal Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/3 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="py-14 sm:py-18 md:py-22">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
              {/* Left Side - Desktop: Balanced Content, Mobile: Minimal */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6 }}
              >
                {/* Professional Badge - Hidden on Mobile */}
                <motion.div 
                  className="hidden lg:inline-flex items-center justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div 
                    className="px-5 py-2.5 rounded-full border backdrop-blur-sm"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                      borderColor: 'rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-semibold">Diagnosi AI Gratuita</span>
                    </div>
                  </div>
                </motion.div>

                {/* Strong Headline - Smaller on Mobile */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 lg:mb-6">
                  <span className="text-white">SCALA LA TUA</span>
                  <br />
                  <span 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                    }}
                  >
                    ACQUISIZIONE
                  </span>
                  <br />
                  <span className="text-white">CLIENTI</span>
                </h2>

                {/* Clear Value Proposition - Shorter on Mobile */}
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-lg lg:mx-0 mx-auto">
                  <span className="font-semibold text-white">Molte aziende faticano a trovare il sistema di acquisizione giusto.</span> 
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Scopri come ottimizzare il tuo sistema con una diagnosi AI personalizzata.
                </p>

                {/* Benefits - Desktop: 2 benefits, Mobile: 1 key benefit */}
                <motion.div 
                  className="space-y-3 lg:space-y-4 mb-6 lg:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Mobile: Show only first benefit */}
                  <motion.div
                    className="flex items-center gap-3 lg:hidden justify-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border"
                      style={{
                        background: `rgba(59, 130, 246, 0.1)`,
                        borderColor: `rgba(59, 130, 246, 0.3)`
                      }}
                    >
                      <Target 
                        className="w-3.5 h-3.5 text-blue-400"
                        style={{
                          filter: `drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))`
                        }}
                      />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">Analisi completa del tuo sistema</span>
                  </motion.div>

                  {/* Desktop: Show both benefits */}
                  <div className="hidden lg:block">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 justify-start mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border"
                          style={{
                            background: `rgba(${benefit.color === 'text-blue-400' ? '59, 130, 246' : '16, 185, 129'}, 0.1)`,
                            borderColor: `rgba(${benefit.color === 'text-blue-400' ? '59, 130, 246' : '16, 185, 129'}, 0.3)`
                          }}
                        >
                          <benefit.icon 
                            className={`w-4 h-4 ${benefit.color}`}
                            style={{
                              filter: `drop-shadow(0 0 4px ${benefit.glow})`
                            }}
                          />
                        </div>
                        <span className="text-gray-300 font-medium text-base">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA - Simplified on Mobile */}
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-center gap-2 lg:gap-3 justify-center lg:justify-start">
                    <Calendar 
                      className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400" 
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                      }}
                    />
                    <span className="text-white font-bold text-base lg:text-lg">Prenota la tua diagnosi AI</span>
                    <ArrowRight 
                      className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 hidden sm:block lg:block" 
                      style={{
                        animation: 'floating-arrow 2s ease-in-out infinite'
                      }}
                    />
              </div>
              
                  {/* Quick Details - Hidden on Mobile */}
                  <div className="hidden lg:flex items-center gap-4 justify-start text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>45 min</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-blue-400" />
                      <span>Gratuita</span>
                    </div>
              </div>
            </div>
              </motion.div>

              {/* Right Side - Mobile: Simplified Calendar, Desktop: Full Version */}
              <motion.div 
                className="relative max-w-sm mx-auto lg:mx-0"
                ref={calendarRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div 
                  className="relative backdrop-blur-sm border rounded-xl lg:rounded-2xl overflow-hidden z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)",
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)',
                  }}
                >
                  {/* Shimmer Border - Now Inside Container */}
                  <div className="absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none">
                    <div 
                      className="absolute inset-0 rounded-xl lg:rounded-2xl border"
                      style={{
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                        background: `linear-gradient(90deg, 
                          transparent 0%, 
                          transparent 45%, 
                          rgba(59, 130, 246, 0.2) 50%, 
                          rgba(6, 182, 212, 0.2) 52%, 
                          transparent 55%, 
                          transparent 100%)`,
                        backgroundSize: '200% 100%',
                        animation: 'calendar-shimmer 8s ease-in-out infinite'
                      }}
                    />
                  </div>

                  {/* Calendar Header - Simplified on Mobile */}
                  <div 
                    className="relative z-20 px-3 py-2 lg:px-5 lg:py-3 border-b"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="text-center">
                      <h3 className="text-white font-bold text-sm lg:text-base mb-1">Diagnosi AI</h3>
                      <p className="text-gray-400 text-xs">45 min • Gratuita</p>
                    </div>
                  </div>

                  <iframe 
                    key={iframeKey}
                    src={`https://calendar.madani.agency?hide_event_type_details=1&hide_gdpr_banner=1&embed_type=Inline&embed_domain=madani.agency&t=${iframeKey}`}
                    className="w-full border-0 block relative z-10"
                    style={{
                      height: '550px',
                      minHeight: '550px'
                    }}
                    title="Prenota Appuntamento - Madani Agency"
                    onLoad={() => setLoading(false)}
                  />
                    
                  {/* Simple Loading overlay */}
                  {loading && (
                    <div 
                      className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-20" 
                      style={{ 
                        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)" 
                      }}
                    >
                      <div className="text-center">
                        <div 
                          className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-2 lg:mb-3 mx-auto"
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                          }}
                        />
                        <p className="text-white font-medium text-sm lg:text-base">Caricamento...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Trust Indicators - Hidden on Mobile */}
                <div className="mt-4 text-center hidden lg:block">
                  <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
                    <span>Nessun costo</span>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span>Nessun impegno</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}