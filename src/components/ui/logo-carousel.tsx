"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string
  id: number
  img?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url?: string
  domain?: string
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const currentLogo = logos[currentIndex]

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            {currentLogo.url ? (
              <img
                src={currentLogo.url}
                alt={currentLogo.name}
                className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32 brightness-0 invert"
                loading="lazy"
              />
            ) : currentLogo.img ? (
              <currentLogo.img className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32 fill-white" />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

// Static logo grid component for mobile
const StaticLogoGrid: React.FC<{ logos: Logo[] }> = ({ logos }) => {
  return (
    <div className="relative">
      {/* Tilted grid container */}
      <motion.div
        className="grid grid-cols-3 gap-4 transform -rotate-3 scale-95"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {logos.slice(0, 6).map((logo, index) => (
          <motion.div
            key={logo.id}
            className="relative h-16 w-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: Math.random() * 6 - 3,
              transition: {
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0,
              transition: { duration: 0.2 }
            }}
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            
            {logo.url ? (
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-8 max-h-[60%] max-w-[60%] object-contain brightness-0 invert opacity-80"
                loading="lazy"
              />
            ) : logo.img ? (
              <logo.img className="h-8 w-8 max-h-[60%] max-w-[60%] object-contain fill-white opacity-80" />
            ) : null}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      const intervalId = setInterval(updateTime, 100)
      return () => clearInterval(intervalId)
    }
  }, [updateTime, isMobile])

  useEffect(() => {
    if (!isMobile) {
      const distributedLogos = distributeLogos(logos, columnCount)
      setLogoSets(distributedLogos)
    }
  }, [logos, columnCount, isMobile])

  // Render static tilted grid on mobile
  if (isMobile) {
    return (
      <div className="flex justify-center items-center py-8">
        <StaticLogoGrid logos={logos} />
      </div>
    )
  }

  // Render animated carousel on desktop
  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn } 