"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Calendar, CheckCircle, User, Building, Phone, Mail, Euro, Users } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  revenue: string
  employees: string
  challenge: string
  timeline: string
  budget: string
}

export const SuperSalesCTA = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenue: '',
    employees: '',
    challenge: '',
    timeline: '',
    budget: ''
  })

  // Add CSS for gradient animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes subtle-glow {
        0%, 100% { 
          opacity: 0.8;
        }
        50% { 
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email && formData.company
      case 1:
        return formData.phone && formData.revenue && formData.employees
      case 2:
        return formData.challenge && formData.timeline && formData.budget
      default:
        return true
    }
  }

  const steps = [
    {
      title: "Informazioni di base",
      icon: <User className="w-5 h-5" />,
      fields: [
        {
          key: 'name' as keyof FormData,
          label: 'Nome e Cognome',
          type: 'text',
          placeholder: 'Es. Marco Rossi',
          icon: <User className="w-4 h-4" />
        },
        {
          key: 'email' as keyof FormData,
          label: 'Email aziendale',
          type: 'email',
          placeholder: 'marco@tuaazienda.it',
          icon: <Mail className="w-4 h-4" />
        },
        {
          key: 'company' as keyof FormData,
          label: 'Nome azienda',
          type: 'text',
          placeholder: 'La tua azienda',
          icon: <Building className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Informazioni aziendali",
      icon: <Building className="w-5 h-5" />,
      fields: [
        {
          key: 'phone' as keyof FormData,
          label: 'Numero di telefono',
          type: 'tel',
          placeholder: '+39 123 456 7890',
          icon: <Phone className="w-4 h-4" />
        },
        {
          key: 'revenue' as keyof FormData,
          label: 'Fatturato annuale',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona il fatturato' },
            { value: '0-100k', label: '0 - 100.000€' },
            { value: '100k-500k', label: '100.000€ - 500.000€' },
            { value: '500k-1m', label: '500.000€ - 1M€' },
            { value: '1m-5m', label: '1M€ - 5M€' },
            { value: '5m+', label: 'Oltre 5M€' }
          ],
          icon: <Euro className="w-4 h-4" />
        },
        {
          key: 'employees' as keyof FormData,
          label: 'Numero dipendenti',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona dimensione' },
            { value: '1-5', label: '1-5 dipendenti' },
            { value: '6-20', label: '6-20 dipendenti' },
            { value: '21-50', label: '21-50 dipendenti' },
            { value: '51-100', label: '51-100 dipendenti' },
            { value: '100+', label: 'Oltre 100 dipendenti' }
          ],
          icon: <Users className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Qualificazione",
      icon: <CheckCircle className="w-5 h-5" />,
      fields: [
        {
          key: 'challenge' as keyof FormData,
          label: 'Principale sfida attuale',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona la sfida principale' },
            { value: 'lead-generation', label: 'Generare più lead qualificati' },
            { value: 'conversion', label: 'Migliorare il tasso di conversione' },
            { value: 'sales-process', label: 'Ottimizzare il processo di vendita' },
            { value: 'team-training', label: 'Formare il team commerciale' },
            { value: 'scale-business', label: 'Scalare il business' }
          ]
        },
        {
          key: 'timeline' as keyof FormData,
          label: 'Quando vuoi iniziare?',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona tempistiche' },
            { value: 'immediately', label: 'Immediatamente' },
            { value: '1-month', label: 'Entro 1 mese' },
            { value: '3-months', label: 'Entro 3 mesi' },
            { value: '6-months', label: 'Entro 6 mesi' },
            { value: 'just-exploring', label: 'Solo esplorando opzioni' }
          ]
        },
        {
          key: 'budget' as keyof FormData,
          label: 'Budget mensile disponibile',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona budget' },
            { value: '1k-3k', label: '1.000€ - 3.000€' },
            { value: '3k-5k', label: '3.000€ - 5.000€' },
            { value: '5k-10k', label: '5.000€ - 10.000€' },
            { value: '10k+', label: 'Oltre 10.000€' },
            { value: 'depends-results', label: 'Dipende dai risultati' }
          ]
        }
      ]
    }
  ]

  return (
    <section className="relative z-30 mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div 
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
          style={{
            background: `linear-gradient(145deg, 
              rgba(15, 23, 42, 0.95) 0%, 
              rgba(30, 41, 59, 0.9) 50%, 
              rgba(15, 23, 42, 0.95) 100%
            )`,
            backdropFilter: 'blur(20px) saturate(180%)',
            border: '2px solid rgba(59, 130, 246, 0.4)',
            boxShadow: `
              0 25px 50px rgba(0, 0, 0, 0.6),
              0 0 40px rgba(59, 130, 246, 0.3),
              0 0 80px rgba(59, 130, 246, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 0 20px rgba(59, 130, 246, 0.05)
            `
          }}
        >
          {/* Enhanced Background Effects - Blue Neon Theme */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                linear-gradient(45deg, rgba(59, 130, 246, 0.02) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(59, 130, 246, 0.02) 100%)
              `,
              animation: 'subtle-glow 8s ease-in-out infinite'
            }}
          />
          
          {/* Animated Decorative Elements - Blue Theme */}
          <div 
            className="absolute top-8 right-8 w-20 h-20 border-2 rounded-full animate-pulse"
            style={{
              borderColor: 'rgba(59, 130, 246, 0.4)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
            }}
          />
          <div 
            className="absolute bottom-12 left-12 w-12 h-12 rounded-full animate-bounce"
            style={{
              background: 'rgba(59, 130, 246, 0.4)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)'
            }}
          />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Enhanced Headline - Blue Neon */}
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8"
              style={{
                textShadow: `
                  0 0 20px rgba(59, 130, 246, 0.6),
                  0 0 40px rgba(59, 130, 246, 0.3),
                  0 0 60px rgba(59, 130, 246, 0.1),
                  0 4px 12px rgba(0, 0, 0, 0.5)
                `,
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white">Il nostro sistema</span>
              <br />
              <span className="text-white">non è per tutti.</span>
              <br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 30%, #93c5fd 60%, #dbeafe 100%)',
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
                }}
              >
                Ma forse è per te.
              </span>
            </motion.h2>

            {/* Enhanced Progress Indicator - Blue Theme */}
            {currentStep < 3 && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-3">
                  {steps.map((_, index) => (
                    <React.Fragment key={index}>
                      <div 
                        className={`w-4 h-4 rounded-full transition-all duration-500 ${
                          index <= currentStep 
                            ? 'scale-125' 
                            : 'scale-100'
                        }`}
                        style={{
                          background: index <= currentStep 
                            ? 'linear-gradient(45deg, #3b82f6, #60a5fa)' 
                            : 'rgba(59, 130, 246, 0.3)',
                          boxShadow: index <= currentStep 
                            ? '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4)' 
                            : 'none'
                        }}
                      />
                      {index < steps.length - 1 && (
                        <div 
                          className={`w-12 h-1 rounded-full transition-all duration-500`}
                          style={{
                            background: index < currentStep 
                              ? 'linear-gradient(90deg, #3b82f6, #60a5fa)' 
                              : 'rgba(59, 130, 246, 0.3)'
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              {currentStep < 3 ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl mx-auto"
                >
                  {/* Enhanced Step Header - Blue Theme */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.2))',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      {steps[currentStep].icon}
                    </div>
                    <h3 
                      className="text-2xl font-bold text-white"
                      style={{
                        textShadow: '0 0 10px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {steps[currentStep].title}
                    </h3>
                  </div>

                  {/* Enhanced Form Fields - Blue Theme */}
                  <div className="space-y-6 mb-8">
                    {steps[currentStep].fields.map((field) => (
                      <div key={field.key} className="text-left">
                        <label 
                          className="block text-white/90 font-semibold mb-3 text-lg"
                          style={{
                            textShadow: '0 0 8px rgba(59, 130, 246, 0.2), 0 1px 4px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <div className="relative">
                            <select
                              value={formData[field.key]}
                              onChange={(e) => updateFormData(field.key, e.target.value)}
                              className="w-full px-5 py-5 text-white appearance-none focus:outline-none text-lg font-medium rounded-xl transition-all duration-300"
                              style={{
                                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(59, 130, 246, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                                e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                              }}
                            >
                              {field.options?.map((option) => (
                                <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <ChevronRight className="absolute right-5 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-white/60 pointer-events-none" />
                          </div>
                        ) : (
                          <div className="relative">
                            {field.icon && (
                              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/60">
                                {field.icon}
                              </div>
                            )}
                            <input 
                              type={field.type}
                              value={formData[field.key]}
                              onChange={(e) => updateFormData(field.key, e.target.value)}
                              placeholder={field.placeholder}
                              className={`w-full py-5 text-white placeholder-white/60 text-lg font-medium rounded-xl transition-all duration-300 ${
                                field.icon ? 'pl-14 pr-5' : 'px-5'
                              }`}
                              style={{
                                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(59, 130, 246, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                                e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Navigation Buttons - Blue Theme */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                        currentStep === 0
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:scale-105'
                      }`}
                      style={{
                        background: currentStep === 0 
                          ? 'rgba(59, 130, 246, 0.1)' 
                          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(59, 130, 246, 0.3)',
                        color: 'white',
                        boxShadow: currentStep === 0 ? 'none' : '0 4px 15px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Indietro
                    </button>

                    <div 
                      className="text-white/70 text-lg font-medium"
                      style={{
                        textShadow: '0 0 8px rgba(59, 130, 246, 0.2), 0 1px 4px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {currentStep + 1} di {steps.length}
                    </div>

                    <button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                        isStepValid()
                          ? 'hover:scale-105 hover:shadow-2xl'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{
                        background: isStepValid()
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 50%, rgba(59, 130, 246, 0.9) 100%)'
                          : 'rgba(59, 130, 246, 0.3)',
                        color: isStepValid() ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        border: '2px solid rgba(59, 130, 246, 0.6)',
                        boxShadow: isStepValid() 
                          ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                          : 'none',
                        textShadow: isStepValid() ? '0 0 10px rgba(255, 255, 255, 0.8), 0 1px 4px rgba(0, 0, 0, 0.3)' : 'none'
                      }}
                    >
                      {currentStep === steps.length - 1 ? 'Prenota Chiamata' : 'Continua'}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto"
                >
                  {/* Success State */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Perfetto, {formData.name}!
                    </h3>
                    <p className="text-white/80">
                      Sei qualificato per il nostro sistema. Prenota la tua chiamata strategica gratuita.
                    </p>
                  </div>

                  {/* Calendar Integration Placeholder */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">Prenota la tua chiamata</h4>
                    </div>
                    
                    {/* Placeholder for calendar widget */}
                    <div className="text-center text-white/80">
                      <p className="mb-4">Il calendario verrà integrato qui</p>
                      <div className="bg-white/5 rounded-lg p-4 mb-4">
                        <p className="text-sm">📅 Calendly / Cal.com integration</p>
                        <p className="text-xs text-white/60 mt-2">
                          Collega il tuo calendario preferito (Calendly, Cal.com, etc.)
                        </p>
                      </div>
                    </div>

                    {/* Temporary CTA Button */}
                    <button className="w-full px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 text-lg">
                      Continua su WhatsApp
                    </button>
                  </div>

                  {/* Reset Option */}
                  <button
                    onClick={() => {
                      setCurrentStep(0)
                      setFormData({
                        name: '', email: '', company: '', phone: '', revenue: '',
                        employees: '', challenge: '', timeline: '', budget: ''
                      })
                    }}
                    className="text-white/60 hover:text-white transition-colors text-sm underline"
                  >
                    Ricomincia il processo
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Social Proof */}
            {currentStep === 0 && (
              <motion.div 
                className="flex items-center justify-center gap-4 text-white/80 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
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
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 