"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'Come funziona il processo di lead generation?',
    answer: 'Utilizziamo strategie multicanale personalizzate per il tuo settore. Creiamo campagne mirate su Meta, Google e LinkedIn, con contenuti che attraggono il tuo cliente ideale. Ogni lead viene pre-qualificato per verificare budget e interesse reale.'
  },
  {
    question: 'Quanto tempo serve per vedere i primi risultati?',
    answer: 'I primi lead qualificati arrivano entro 2-3 settimane dall\'avvio delle campagne. I risultati sostanziali in termini di appuntamenti e vendite si vedono generalmente tra il secondo e terzo mese di collaborazione.'
  },
  {
    question: 'Quale budget minimo è necessario per iniziare?',
    answer: 'Il nostro investimento parte da €2.500/mese per la gestione completa. Questo include la nostra fee e il budget pubblicitario. Per progetti più ampi, creiamo pacchetti personalizzati in base ai tuoi obiettivi.'
  },
  {
    question: 'Gestite tutto voi o devo occuparmene personalmente?',
    answer: 'Ci occupiamo di tutto: creazione campagne, gestione lead, qualificazione, prenotazione appuntamenti. Tu ricevi solo appuntamenti pronti per la vendita. Opzionalmente, possiamo anche formare il tuo team di vendita.'
  },
  {
    question: 'Che garanzie offrite sui risultati?',
    answer: 'Offriamo garanzia "Risultati o Rimborso" nei primi 90 giorni. Se non generiamo il numero di lead qualificati concordato, ricevi il rimborso completo. Inoltre, il pagamento è sempre posticipato ai risultati.'
  },
  {
    question: 'In che settori avete più esperienza?',
    answer: 'Lavoriamo principalmente con servizi B2B: consulenze, software, coaching, agenzie, studi professionali, e-commerce. Abbiamo case study comprovati in oltre 15 settori diversi con crescite documentate.'
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
                <span className="text-blue-400 text-sm font-semibold tracking-wide">All the A's to your Q's</span>
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

          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="backdrop-blur-xl border rounded-3xl p-12 md:p-16"
              style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(59, 130, 246, 0.05) 100%)",
                borderColor: 'rgba(59, 130, 246, 0.2)',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 40px rgba(59, 130, 246, 0.08)',
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hai altre domande?
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Parla direttamente con un nostro esperto per una consulenza gratuita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://calendly.com/madani-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 1) 100%)",
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 6px 25px rgba(59, 130, 246, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Prenota consulenza gratuita
                </motion.a>
                <motion.a
                  href="https://wa.me/393347090974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border rounded-full font-semibold text-blue-400 transition-all duration-200"
                  style={{
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                    background: 'rgba(0, 0, 0, 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(59, 130, 246, 0.6)',
                    background: 'rgba(59, 130, 246, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Scrivici su WhatsApp
                </motion.a>
              </div>
            </div>
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