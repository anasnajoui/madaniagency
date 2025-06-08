"use client"

import React from 'react'

export const SuperSalesCTA = () => {
  return (
    <section className="relative z-30 mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div 
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 lg:p-20"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)'
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-8 h-8 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Bold Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8">
              <span className="text-white">INIZIA IL TUO</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
                SUPER SALES
              </span>
              <br />
              <span className="text-white">JOURNEY</span>
            </h2>
            
            {/* Email Form */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Inserisci la tua email aziendale"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg"
                />
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-200 text-lg whitespace-nowrap">
                  Prova Gratuita
                </button>
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-white/60">|</span>
              <span className="text-sm">Partner certificato Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 