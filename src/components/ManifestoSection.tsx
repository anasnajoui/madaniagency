"use client";

import React from "react";
import Image from "next/image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { BorderTrail } from "@/components/ui/border-trail";
import { NeonBorder } from "@/components/ui/neon-border";
import { HeroTypography } from "@/components/ui/hero-typography";

const manifestoWords = [
  "Non vendiamo lead. Chiudiamo vendite.",
  "Zero agenzie da coordinare. Un partner, tutto fatto.",
  "Venditori formati, non improvvisati.",
  "Ogni contatto diventa un'opportunità.",
  "Più chiusure con meno lead.",
  "Sistema completo, non pezzi sparsi."
];

export function ManifestoSection() {
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
          {/* Subtle central glow - much more refined */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
          {/* Corner accent glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 relative z-10">
          <div className="text-center space-y-12">

            {/* iMessage Style Comparison */}
            <div className="max-w-6xl mx-auto mt-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">

                  
                  {/* Hero-style title structure */}
                  <div className="min-h-[160px] sm:min-h-[180px] flex items-center justify-center relative z-20">
                    <HeroTypography>
                      <span>
                        Ci pensa Madani.
                      </span>
                      <span className="relative flex w-full justify-center text-center md:pb-2 md:pt-1 z-30">
                        <AnimatedTextCycle 
                          words={[
                            "contatti qualificati",
                            "appuntamenti fissati",
                            "vendite incassate"
                          ]}
                          interval={2500}
                          className="text-blue-400 font-extrabold"
                        />
                      </span>
                    </HeroTypography>
                  </div>
                </div>

                {/* Clean Bubble Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Madani Agency Side - Organized Success */}
                  <div className="space-y-6 lg:-mt-15">
                    <div className="text-center mb-8">
                      <div className="relative inline-block">
                        {/* Blue neon background */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                            filter: 'blur(15px)',
                            transform: 'scale(2.5)',
                            zIndex: 0
                          }}
                        />
                        {/* Additional blue glow rings */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 30%, transparent 60%)',
                            filter: 'blur(8px)',
                            transform: 'scale(1.8)',
                            zIndex: 1
                          }}
                        />
                        <Image
                          src="/madani.png"
                          alt="Madani Logo"
                          width={50}
                          height={50}
                          className="object-contain mx-auto relative z-10"
                          style={{
                            filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4)) brightness(1.3)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Clean Chat with NeonBorder */}
                    <NeonBorder className="rounded-3xl" duration={4}>
                      <div 
                        className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-6"
                        style={{
                          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                          backdropFilter: "blur(25px)",
                          WebkitBackdropFilter: "blur(25px)",
                        }}
                      >
                        {/* Clean Chat Messages */}
                        <div className="space-y-4">
                          {/* Client request */}
                          <div className="flex justify-end">
                            <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: '#007AFF'}}>
                              <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Ho bisogno di nuovi clienti.</p>
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
                              className="bg-white/[0.15] border rounded-2xl rounded-bl-md px-4 py-3 max-w-[70%] min-w-fit"
                              style={{
                                borderColor: 'rgba(59, 130, 246, 0.4)',
                                boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 25px rgba(59, 130, 246, 0.15), inset 0 0 50px rgba(59, 130, 246, 0.08), inset 2px 2px 10px rgba(59, 130, 246, 0.2)',
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(59, 130, 246, 0.08) 100%)'
                              }}
                            >
                              <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>💰 Lead qualificato acquisito - Marco R. - Budget: €15.000</p>
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
                              <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>📅 Appuntamento confermato - Oggi ore 14:00</p>
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
                              <p className="text-white font-bold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>🎉 VENDITA CHIUSA! €3.500 incassati</p>
                            </div>
                          </div>

                          {/* Client response */}
                          <div className="flex justify-end">
                            <div className="rounded-2xl rounded-br-md px-4 py-3 min-w-fit max-w-[50%]" style={{backgroundColor: '#007AFF'}}>
                              <p className="text-white font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Incredibile! 🫶</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NeonBorder>
                  </div>

                  {/* Traditional Agencies Side - Chaotic Problems */}
                  <div className="space-y-6 lg:mt-20">
                    <div className="text-center mb-8">
                      <div 
                        className="inline-block px-6 py-3 rounded-full bg-gray-600/20 border border-gray-500/30"
                        style={{
                          boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 40px rgba(255, 0, 0, 0.1)",
                        }}
                      >
                        <h3 className="text-lg font-bold text-white">Agenzie tradizionali</h3>
                      </div>
                    </div>

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
                      {/* Faded Chat Messages */}
                      <div className="space-y-4">
                        {/* Client request */}
                        <div className="flex justify-end">
                          <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                            <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Ho bisogno di nuovi clienti.</p>
                          </div>
                        </div>

                        {/* Agency responses - faded versions */}
                        <div className="flex justify-start">
                          <div className="bg-white/[0.10] border border-white/15 rounded-2xl rounded-bl-md px-4 py-3 max-w-[70%] min-w-fit">
                            <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Eccoti un Excel con dei contatti 📊</p>
                          </div>
                        </div>

                        {/* Client frustrated */}
                        <div className="flex justify-end">
                          <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[70%] min-w-fit" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                            <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Ma non sono qualificati! Non rispondono! 😠</p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <div className="rounded-2xl rounded-br-md px-4 py-3 min-w-fit max-w-[50%]" style={{backgroundColor: 'rgba(0, 122, 255, 0.4)'}}>
                            <p className="text-white/95 font-semibold text-sm text-left leading-relaxed tracking-wide break-words hyphens-auto" style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>Ci siete?</p>
                          </div>
                        </div>

                        {/* No response indicator */}
                        <div className="flex justify-center py-4">
                          <p className="text-gray-400 text-xs italic">Nessuna risposta...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      
      {/* Enhanced bottom blur fade transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      />
    </section>
  );
} 