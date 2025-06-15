'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield } from 'lucide-react'

export default function LicenseAuthority() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <>
      <style>{`
        @keyframes elegant-shimmer {
          0% { 
            background-position: -200% 0;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.15), 0 0 30px rgba(59, 130, 246, 0.08);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1);
          }
          100% { 
            background-position: 200% 0;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.15), 0 0 30px rgba(59, 130, 246, 0.08);
          }
        }
        @keyframes gentle-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.6));
          }
        }
        @keyframes card-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      
      <div className="py-10 bg-black">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div 
            ref={sectionRef}
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div 
              className="relative flex items-center gap-4 px-8 py-5 rounded-2xl border backdrop-blur-sm max-w-3xl w-full overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 50%, rgba(15, 23, 42, 0.6) 100%)",
                borderColor: 'rgba(59, 130, 246, 0.3)',
                animation: isInView ? 'elegant-shimmer 6s ease-in-out infinite' : 'none'
              }}
            >
              {/* Elegant shimmer overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: isInView ? 'card-shimmer 8s ease-in-out infinite' : 'none'
                }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                style={{
                  animation: isInView ? 'gentle-glow 4s ease-in-out infinite' : 'none'
                }}
              >
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
              </motion.div>
              
              <div className="flex-1 text-center relative z-10">
                <motion.p 
                  className="text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="font-semibold text-white">Decine di agenzie</span> usano già il nostro sistema sotto{' '}
                  <span 
                    className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    style={{ 
                      filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))'
                    }}
                  >
                    Licenza Madani
                  </span>.{' '}
                  Per la prima volta apriamo le porte alle aziende italiane:{' '}
                  <span 
                    className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    style={{ 
                      filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))'
                    }}
                  >
                    lavora direttamente con la fonte
                  </span>.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 