"use client";

import React from "react";
import Image from "next/image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { HeroTypography } from "@/components/ui/hero-typography";

export function ManifestoSectionTwo() {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced smooth transition gradient overlay */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      
      {/* Main section content */}
      <div className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-black relative">
        {/* Refined Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-5xl px-8 relative z-10">
          

          
                      {/* First Section: Traditional Agencies Title (LEFT) + Chat (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              
              {/* LEFT: Le solite Agenzie Title */}
              <div className="relative z-20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-regular leading-tight text-spektr-cyan-50">
                    Con le solite Agenzie.
                  </h3>
                  <div className="relative z-30">
                    <AnimatedTextCycle 
                      words={[
                        "Perdi soldi",
                        "Zero risultati", 
                        "Fai tutto tu"
                      ]}
                      interval={2800}
                      className="text-red-400 font-extrabold text-xl md:text-2xl lg:text-3xl"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Traditional Agencies Chat */}
              <div className="space-y-6">
                {/* Faded Chat with Red Interior Neon */}
                <div 
                  className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(120, 120, 120, 0.1) 0%, rgba(120, 120, 120, 0.05) 100%)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    boxShadow: "inset 0 0 60px rgba(255, 0, 0, 0.15)",
                  }}
                >
                  <div className="space-y-4">
                    {/* Client request */}
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                        <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Ho bisogno di nuovi clienti.</p>
                      </div>
                    </div>

                    {/* Agency responses - faded versions */}
                    <div className="flex justify-start">
                      <div className="bg-white/[0.10] border border-white/15 rounded-2xl rounded-bl-md px-4 py-3 max-w-[70%] min-w-fit">
                        <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Eccoti un Excel con dei contatti 📊</p>
                      </div>
                    </div>

                    {/* Client frustrated */}
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                        <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Ma non sono qualificati! Non rispondono! 😠</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-br-md px-4 py-3 min-w-fit max-w-[50%]" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                        <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Ci siete?</p>
                      </div>
                    </div>

                    {/* No response indicator */}
                    <div className="flex justify-center py-4">
                      <p className="text-white/60 text-sm italic">Nessuna risposta...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Second Section: Madani Chat (LEFT) + Title (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: Madani Chat - order-2 on mobile, order-1 on lg+ */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Clean Chat with NeonBorder */}
              <div 
                className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                  backdropFilter: "blur(25px)",
                  WebkitBackdropFilter: "blur(25px)",
                }}
              >
                <div className="space-y-4">
                  {/* Client request */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: '#007AFF'}}>
                      <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Ho bisogno di nuovi clienti.</p>
                    </div>
                  </div>

                  {/* System responses */}
                  <div className="flex justify-start items-end space-x-2">
                    <Image
                      src="/madani.png"
                      alt="Madani"
                      width={20}
                      height={20}
                      className="object-contain mb-1"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) brightness(1.2)",
                      }}
                    />
                    <div 
                      className="bg-white/[0.15] border rounded-2xl rounded-bl-md px-4 py-3 max-w-[65%] min-w-fit"
                      style={{
                        borderColor: 'rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 25px rgba(59, 130, 246, 0.15), inset 0 0 50px rgba(59, 130, 246, 0.08), inset 2px 2px 10px rgba(59, 130, 246, 0.2)',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(59, 130, 246, 0.08) 100%)'
                      }}
                    >
                      <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordBreak: 'break-word'}}>💰 Lead qualificato acquisito - Marco R. - Budget: €15.000</p>
                    </div>
                  </div>

                  <div className="flex justify-start items-end space-x-2">
                    <Image
                      src="/madani.png"
                      alt="Madani"
                      width={20}
                      height={20}
                      className="object-contain mb-1"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) brightness(1.2)",
                      }}
                    />
                    <div 
                      className="bg-white/[0.15] border rounded-2xl rounded-bl-md px-4 py-3 max-w-[70%] min-w-fit"
                      style={{
                        borderColor: 'rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 25px rgba(59, 130, 246, 0.15), inset 0 0 50px rgba(59, 130, 246, 0.08), inset 2px 2px 10px rgba(59, 130, 246, 0.2)',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(59, 130, 246, 0.08) 100%)'
                      }}
                    >
                      <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">📅 Appuntamento confermato - Oggi ore 14:00</p>
                    </div>
                  </div>

                  <div className="flex justify-start items-end space-x-2">
                    <Image
                      src="/madani.png"
                      alt="Madani"
                      width={20}
                      height={20}
                      className="object-contain mb-1"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) brightness(1.2)",
                      }}
                    />
                    <div 
                      className="bg-white/[0.15] border rounded-2xl rounded-bl-md px-4 py-3 max-w-[70%] min-w-fit"
                      style={{
                        borderColor: 'rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 25px rgba(59, 130, 246, 0.15), inset 0 0 50px rgba(59, 130, 246, 0.08), inset 2px 2px 10px rgba(59, 130, 246, 0.2)',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(59, 130, 246, 0.08) 100%)'
                      }}
                    >
                      <p className="text-white font-bold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">🎉 VENDITA CHIUSA! €3.500 incassati</p>
                    </div>
                  </div>

                  {/* Client response */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-br-md px-4 py-3 min-w-fit max-w-[50%]" style={{backgroundColor: '#007AFF'}}>
                      <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto">Incredibile! 🫶</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Con Madani Title - order-1 on mobile, order-2 on lg+ */}
            <div className="relative z-20 flex items-center justify-center order-1 lg:order-2">
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-regular leading-tight text-spektr-cyan-50">
                  Con Madani.
                </h3>
                <div className="relative z-30">
                  <AnimatedTextCycle 
                    words={[
                      "Contatti qualificati",
                      "Appuntamenti fissati", 
                      "Vendite incassate"
                    ]}
                    interval={2500}
                    className="text-blue-400 font-extrabold text-xl md:text-2xl lg:text-3xl"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 