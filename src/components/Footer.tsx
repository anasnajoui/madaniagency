"use client"

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top CTA Section - Mobile Optimized */}
      <div className="relative py-12 sm:py-16 lg:py-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(96, 165, 249, 0.2) 0%, rgba(38, 69, 122, 0.15) 50%, rgba(4, 11, 30, 0.1) 100%)"
            }}
          ></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 leading-tight">
            <span className="text-white">MADANI </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(to right, #60A5F9 0%, #26457A 50%, #60A5F9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              NON È UN'AGENZIA
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-6 lg:mb-8">
            {/* Mobile: Shorter text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed block sm:hidden">
              Siamo l'estensione invisibile del tuo business. Portiamo ordine, focus e risultati in mezzo al caos della crescita.
            </p>
            {/* Desktop: Full text */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed hidden sm:block">
              Madani non è un'agenzia. Siamo l'estensione invisibile del tuo business: pensiamo, testiamo e ottimizziamo come se fossimo parte della tua azienda. Scalare non è solo questione di lead o di ads, è la capacità di far convivere strategia, esecuzione e crescita commerciale sotto lo stesso tetto. La vera difficoltà è mantenere lucidità quando tutto si muove insieme: traffico, vendite, team, margini. Noi esistiamo per portare ordine, focus e risultati in mezzo al caos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Image
                src="/madani.png"
                alt="Madani"
                width={20}
                height={20}
                className="opacity-80 sm:w-6 sm:h-6"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(96, 165, 249, 0.4)) brightness(1.2)",
                }}
              />
              <div className="flex" style={{ color: "#60A5F9" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>
            </div>
            <span className="hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm text-center">Madani Acquisition AI by <strong className="text-white">Madani</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Mobile Optimized */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          
          {/* Mobile Layout: Single Column */}
          <div className="block lg:hidden space-y-8">
            
            {/* Logo Section */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/madani.png"
                  alt="Madani Agency"
                  width={100}
                  height={33}
                  className="h-8 w-auto mx-auto"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(96, 165, 249, 0.4)) brightness(1.2)",
                  }}
                />
              </div>
              <p className="text-gray-400 text-xs mb-4">
                Sistemi di Acquisizione
              </p>
            </div>

            {/* Essential Links */}
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">Navigazione</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('come-funziona')}
                    className="text-gray-400 hover:text-white transition-colors text-xs block w-full"
                  >
                    Come funziona
                  </button>
                  <button 
                    onClick={() => scrollToSection('qualificati')}
                    className="text-gray-400 hover:text-white transition-colors text-xs block w-full"
                  >
                    Qualificati
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonianze')}
                    className="text-gray-400 hover:text-white transition-colors text-xs block w-full"
                  >
                    Testimonianze
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">Contatti</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => scrollToSection('qualificati')}
                    className="text-gray-400 hover:text-white transition-colors text-xs block w-full"
                  >
                    Prenota ora
                  </button>
                  <a 
                    href="https://wa.me/393341902677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs block"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:ceo@madani.agency"
                    className="text-gray-400 hover:text-white transition-colors text-xs block"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Back to Top */}
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Torna su
              </button>
            </div>

            {/* Company Info */}
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-relaxed">
                MARKTR LLC<br />
                Casper WY 82609, USA
              </p>
            </div>
          </div>

          {/* Desktop Layout: Multi-Column */}
          <div className="hidden lg:grid grid-cols-4 gap-12">
            
            {/* Logo Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/madani.png"
                  alt="Madani Agency"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(96, 165, 249, 0.4)) brightness(1.2)",
                  }}
                />
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Madani Agency.<br />
                Sistemi di Acquisizione.<br /><br />
                MARKTR LLC<br />
                5830 2nd Street, Suite 7000, #15153<br />
                Casper WY 82609 
                United States
USA
              </p>
              
              {/* Instagram Link */}
              <div className="mb-6">
                <a 
                  href="https://www.instagram.com/ceo.madani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navigazione</h4>
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('come-funziona')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Come funziona
                </button>
                <button 
                  onClick={() => scrollToSection('vantaggi')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Vantaggi
                </button>
                <button 
                  onClick={() => scrollToSection('qualificati')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Qualificati
                </button>
                <button 
                  onClick={() => scrollToSection('testimonianze')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Testimonianze
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Servizi</h4>
              <div className="space-y-4">
                <span className="text-gray-400 text-sm block">Lead Generation</span>
                <span className="text-gray-400 text-sm block">Prenotazione Appuntamenti</span>
                <span className="text-gray-400 text-sm block">Formazione e Supporto Vendite</span>
                <span className="text-gray-400 text-sm block">Business Intelligence</span>
                <span className="text-gray-400 text-sm block">Sistemi di Acquisizione</span>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contatti</h4>
              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection('qualificati')}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Qualificati ora
                </button>
                <a 
                  href="https://wa.me/393341902677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  WhatsApp
                </a>
                <a 
                  href="mailto:ceo@madani.agency"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Email
                </a>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Torna su
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
