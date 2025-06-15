import React from 'react'
import { Features } from '@/components/ui/features-8'
import { HowItWorks } from '@/components/HowItWorks'
import { HormoziSection } from '@/components/HormoziSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { LogoCarouselSection } from '@/components/LogoCarouselSection'
import { ManifestoSection } from '@/components/ManifestoSection'
import { ManifestoSectionTwo } from '@/components/ManifestoSectionTwo'
import QualificationCTA from '@/components/QualificationCTA'
import LicenseAuthority from '@/components/LicenseAuthority'
import { HeroSection } from '@/components/HeroSection'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <div className="relative z-20 -mt-[400px]">
        <LogoCarouselSection />
      </div>
      <ManifestoSectionTwo />
      <section id="vantaggi">
        <Features />
      </section>
      <section id="come-funziona" className="relative z-30 mt-16">
        <HowItWorks />
      </section>
      <HormoziSection />
      <LicenseAuthority />
      <section id="qualificati">
        <QualificationCTA />
      </section>
      <section id="testimonianze" className="relative z-30 mt-16">
        <TestimonialSection />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      <section id="contatti">
        <Footer />
      </section>
    </main>
  )
} 