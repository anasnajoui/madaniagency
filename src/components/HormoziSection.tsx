"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export const HormoziSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Simplified scroll animations for better performance
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -30])
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1])
  
  // Simplified title animations
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20])
  
  // Background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b69 25%, #4338ca 50%, #7c3aed 75%, #a855f7 100%)'
    }}>
      {/* Banner Pattern Effects */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-500/40 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-purple-500/40 to-transparent rounded-full blur-xl"></div>
        </div>
      </motion.div>
      
      {/* Top and bottom border highlights */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
                {/* Full-Width Banner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px]">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Partnership Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-orange-500/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              PARTNERSHIP UFFICIALE
              <span className="text-2xl">🇮🇹</span>
            </motion.div>
            

            
            {/* Title */}
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
              style={{ 
                y: titleY
              }}
            >
              <span className="text-white" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'}}>VERSIONI </span>
              <span 
                className="bg-gradient-to-r from-green-400 via-white to-red-400 bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2))'
                }}
              >
                ITALIANE
              </span>
              <br />
              <span className="text-white" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'}}>DISPONIBILI</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Grazie alla nostra partnership con <span className="font-bold" style={{color: '#60a5fa', textShadow: '0 0 12px rgba(96, 165, 250, 0.5)'}}>Acquisition.com</span>, 
              i bestseller di Alex Hormozi sono ora disponibili in <span className="font-bold" style={{color: '#fb923c', textShadow: '0 0 12px rgba(251, 146, 60, 0.5)'}}>italiano</span>
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <a
                href="https://www.amazon.it/stores/author/B099H3YM3R?ingress=0&visitId=62a7704e-a604-4c2c-ba50-626b7d309d32&ref_=sr_ntt_srch_lnk_1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {/* Amazon Logo */}
                <Image
                  src="/amazon.png"
                  alt="Amazon Logo"
                  width={40}
                  height={40}
                  className="filter brightness-0 invert"
                />
                <span>Prendi la tua copia</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          {/* Right Side - Image with Enhanced Background */}
          <div className="order-1 lg:order-2 relative">
            {/* Partnership Logos Above Image */}
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative">
                {/* White neon glow behind Acquisition logo */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.5)',
                    zIndex: 0
                  }}
                />
                <Image
                  src="/acquilogo.png"
                  alt="Acquisition.com Logo"
                  width={340}
                  height={80}
                  className="relative z-10"
                  style={{
                    filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))"
                  }}
                />
              </div>
              <span 
                className="text-orange-400 text-xl font-black relative z-10"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(251, 146, 60, 0.8))",
                  textShadow: '0 0 15px rgba(251, 146, 60, 0.6)'
                }}
              >
                ×
              </span>
              <div className="relative">
                {/* White neon glow behind Madani logo */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
                    filter: 'blur(15px)',
                    transform: 'scale(2)',
                    zIndex: 0
                  }}
                />
                <Image
                  src="/madani.png"
                  alt="Madani Agency Logo"
                  width={80}
                  height={30}
                  className="relative z-10"
                  style={{
                    filter: "brightness(1.8) drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))"
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              style={{ 
                y: imageY,
                scale: imageScale,
                opacity: imageOpacity
              }}
            >
              {/* Simplified background glow */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-violet-500/15 rounded-full blur-xl"></div>
              </div>
              
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-white/5 to-white/2 rounded-full border border-white/10"></div>
              
              {/* Floating particles */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Main image */}
              <div className="relative z-10">
                <Image
                  src="/books123.png"
                  alt="Alex Hormozi Books Collection - Italian Versions"
                  width={500}
                  height={400}
                  className="mx-auto filter drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Subtle reflection effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[80%] h-[20%] bg-gradient-to-t from-white/5 to-transparent rounded-full blur-xl opacity-30"></div>
            </motion.div>
          </div>
          
        </div>


      </div>
      
      {/* Enhanced blur fade transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.9) 85%, black 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
    </section>
  )
} 