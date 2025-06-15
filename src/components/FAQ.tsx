"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'Lavorate con qualsiasi tipo di business?',
    answer: 'No. Siamo estremamente selettivi perché il nostro sistema richiede visione, struttura e volontà reale di crescere. Lavoriamo solo con business B2B o agenzie già attive, con un\'offerta chiara e ambizione concreta. Se ti qualifichi, sarà evidente già nella prima diagnosi.'
  },
  {
    question: 'Cosa ottenete per i vostri clienti?',
    answer: 'Ci prendiamo la responsabilità di generare opportunità reali — non solo lead. Appuntamenti con potenziali clienti che corrispondono al tuo target, ottenuti con costi tra i più bassi del mercato, grazie a un\'infrastruttura automatizzata e scalabile. Ma non ci fermiamo lì: ti aiutiamo anche a convertirli in vendite.'
  },
  {
    question: 'Siete un\'agenzia?',
    answer: 'No. Siamo un\'estensione operativa del tuo team. Pensiamo come co-fondatori, agiamo come reparto growth interno, ottimizziamo come partner. Non prendiamo fee per far girare campagne: ci interessa l\'impatto che generiamo sul tuo fatturato.'
  },
  {
    question: 'Quanto costa lavorare con voi?',
    answer: 'Dipende. Abbiamo tre modalità operative: Fee fissa mensile per il sistema e le campagne, Revenue share se esistono le condizioni, Hybrid se il tuo caso lo richiede. In ogni caso, si parte solo se il potenziale ROI è evidente da subito.'
  },
  {
    question: 'Come funziona la diagnosi gratuita?',
    answer: 'È una sessione strategica 1:1 dove analizziamo il tuo sistema di acquisizione e vendita. Se ti qualifichi, ti spieghiamo come potremmo intervenire. Se non ti qualifichi, ti lasciamo comunque con consigli pratici e zero pressioni.'
  },
  {
    question: 'Chi ha già lavorato con voi?',
    answer: 'Abbiamo collaborato con agenzie top, business strutturati, e realtà B2B che oggi crescono ogni mese con un sistema costruito insieme. In parallelo, il nostro metodo è già stato adottato da centinaia di agenzie italiane tramite Madani Academy.'
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="faq" className="relative overflow-hidden" ref={ref}>


      <div className="py-24 bg-black relative">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-4xl px-6 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div 
                className="px-6 py-3 rounded-full border"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <span className="text-blue-400 text-sm font-semibold tracking-wide">Domande Frequenti</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Domande frequenti
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Tutto quello che devi sapere sui nostri servizi
            </p>
          </motion.div>

          {/* FAQ Bubbles */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  <div
                    className="relative backdrop-blur-xl border rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
                    style={{
                      background: isOpen 
                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(59, 130, 246, 0.1) 100%)"
                        : "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(59, 130, 246, 0.05) 100%)",
                      borderColor: isOpen ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)',
                      boxShadow: isOpen 
                        ? '0 0 25px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.15)' 
                        : '0 0 15px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.08)',
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-white pr-8 leading-relaxed">
                          {faq.question}
                        </h3>
                        
                        <motion.div
                          className="flex-shrink-0"
                          animate={{ 
                            rotate: isOpen ? 45 : 0,
                            scale: isOpen ? 0.9 : 1
                          }}
                          transition={{ 
                            duration: 0.3, 
                            ease: [0.4, 0, 0.2, 1] 
                          }}
                        >
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center border"
                            style={{
                              background: isOpen 
                                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)"
                                : "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)",
                              borderColor: isOpen ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)',
                            }}
                          >
                            <Plus className={`w-5 h-5 transition-colors duration-200 ${isOpen ? 'text-blue-300' : 'text-blue-400'}`} />
                          </div>
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.4, 0, 0.2, 1],
                              opacity: { duration: 0.3 }
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 pr-16">
                              <div 
                                className="p-4 rounded-2xl"
                                style={{
                                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(59, 130, 246, 0.08) 100%)",
                                  border: '1px solid rgba(59, 130, 246, 0.2)',
                                  backdropFilter: "blur(10px)",
                                  WebkitBackdropFilter: "blur(10px)",
                                }}
                              >
                                <p className="text-lg text-gray-200 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>


        </div>
      </div>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      />
    </section>
  )
} 