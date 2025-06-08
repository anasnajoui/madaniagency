"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion'
import { Plus, Minus, HelpCircle, Clock, Euro, Users, CheckCircle, Shield } from 'lucide-react'

const faqs = [
  {
    question: 'Come funziona il processo di lead generation di Madani?',
    answer: 'Utilizziamo strategie multicanale personalizzate per il tuo settore. Creiamo campagne mirate su Meta, Google e LinkedIn, con contenuti che attraggono il tuo cliente ideale. Ogni lead viene pre-qualificato per verificare budget e interesse reale.',
    icon: Users,
    category: 'Processo'
  },
  {
    question: 'Quanto tempo serve per vedere i primi risultati?',
    answer: 'I primi lead qualificati arrivano entro 2-3 settimane dall\'avvio delle campagne. I risultati sostanziali in termini di appuntamenti e vendite si vedono generalmente tra il secondo e terzo mese di collaborazione.',
    icon: Clock,
    category: 'Tempistiche'
  },
  {
    question: 'Quale budget minimo è necessario per iniziare?',
    answer: 'Il nostro investimento parte da €2.500/mese per la gestione completa. Questo include la nostra fee e il budget pubblicitario. Per progetti più ampi, creiamo pacchetti personalizzati in base ai tuoi obiettivi.',
    icon: Euro,
    category: 'Investimento'
  },
  {
    question: 'Gestite tutto voi o devo occuparmene personalmente?',
    answer: 'Ci occupiamo di tutto: creazione campagne, gestione lead, qualificazione, prenotazione appuntamenti. Tu ricevi solo appuntamenti pronti per la vendita. Opzionalmente, possiamo anche formare il tuo team di vendita.',
    icon: CheckCircle,
    category: 'Gestione'
  },
  {
    question: 'Che garanzie offrite sui risultati?',
    answer: 'Offriamo garanzia "Risultati o Rimborso" nei primi 90 giorni. Se non generiamo il numero di lead qualificati concordato, ricevi il rimborso completo. Inoltre, il pagamento è sempre posticipato ai risultati.',
    icon: Shield,
    category: 'Garanzie'
  },
  {
    question: 'In che settori avete più esperienza?',
    answer: 'Lavoriamo principalmente con servizi B2B: consulenze, software, coaching, agenzie, studi professionali, e-commerce. Abbiamo case study comprovati in oltre 15 settori diversi con crescite documentate.',
    icon: HelpCircle,
    category: 'Settori'
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
        staggerChildren: 0.1,
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
        ease: "easeOut"
      }
    }
  }

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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-3xl"
            animate={{
              scale: isInView ? [1, 1.1, 1] : 1,
              opacity: isInView ? [0.08, 0.12, 0.08] : 0.08
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-400/6 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/6 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-4xl px-6 relative z-10">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-8 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center mb-3">
              <div className="px-4 py-2 bg-white/[0.06] border border-white/20 rounded-full backdrop-blur-sm">
                <span className="text-white/90 text-sm font-medium tracking-wide">domande frequenti</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Hai ancora
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> qualche dubbio?</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Risposte chiare alle domande più comuni sui nostri servizi
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {faqs.map((faq, index) => {
              const Icon = faq.icon
              const isOpen = openIndex === index
              
              return (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <motion.div 
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-5 h-5 text-indigo-400" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-indigo-400 uppercase tracking-wide font-medium mb-1 block">
                              {faq.category}
                            </span>
                            <h3 className="text-lg font-semibold text-white leading-tight">
                              {faq.question}
                            </h3>
                          </div>
                          
                          <motion.div
                            className="flex-shrink-0 ml-4"
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                              <Plus className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          height: { duration: 0.4, ease: "easeInOut" },
                          opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <div className="border-l-2 border-indigo-500/30 pl-4">
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="bg-gray-900/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Non hai trovato la risposta?
                </h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Prenota una consulenza gratuita di 30 minuti. Ti spiegheremo esattamente come possiamo aiutare il tuo business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prenota Consulenza Gratuita
                </motion.button>
                <motion.button 
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contattaci su WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 