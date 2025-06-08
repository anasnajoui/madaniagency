"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  ArrowRight,
  Shield,
  Star,
  Users,
  TrendingUp
} from 'lucide-react'

export const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-black" ref={ref}>
      {/* Smooth transition gradient overlay */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, black 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      <div className="py-16 sm:py-20 md:py-24 relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: isInView ? [1, 1.1, 1] : 1,
              opacity: isInView ? [0.05, 0.08, 0.05] : 0.05
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-400/4 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/4 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="mb-6">
                <Image
                  src="/madani.png"
                  alt="Madani Agency"
                  width={150}
                  height={50}
                  className="h-10 w-auto mb-4"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)) brightness(1.2)",
                  }}
                />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Madani Agency
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  L'agenzia di lead generation che trasforma i contatti freddi in vendite calde. 
                  Risultati garantiti, pagamento a performance.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-gray-400">Garanzia "Risultati o Rimborso"</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Star className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-gray-400">98% Tasso di Soddisfazione</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Users className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-400">47 Venditori Formati</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-gray-400">+340% Crescita Media</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-4">Navigazione</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('come-funziona')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Come funziona
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vantaggi')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    I nostri vantaggi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonianze')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Testimonianze
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    FAQ
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-4">Servizi</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Lead Generation B2B</li>
                <li className="text-gray-400">Gestione Appuntamenti</li>
                <li className="text-gray-400">Formazione Team Vendite</li>
                <li className="text-gray-400">Automazione Marketing</li>
                <li className="text-gray-400">Consulenza Strategica</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">+39 342 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">info@madaniagency.it</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">Milano, Italia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">Lun-Ven 9:00-18:00</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="text-sm font-medium text-white mb-3">Seguici</h5>
                <div className="flex gap-3">
                  <motion.a 
                    href="https://linkedin.com/company/madani-agency" 
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com/madaniagency" 
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-500/20 border border-white/20 hover:border-pink-500/30 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/393421234567" 
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-green-500/20 border border-white/20 hover:border-green-500/30 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Madani Agency. Tutti i diritti riservati.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/termini" className="text-gray-400 hover:text-white transition-colors">
                  Termini di Servizio
                </a>
                <a href="/cookie" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 text-center"
          >
            <div className="bg-gray-900/50 border border-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Pronto a trasformare il tuo business?
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Prenota una consulenza gratuita e scopri come generare più lead qualificati per la tua azienda.
              </p>
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Prenota Consulenza Gratuita
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 