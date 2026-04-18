'use client'

import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import { motion } from 'framer-motion' // Import motion

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Background Image Container with Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }} // Starts at normal size
        animate={{ scale: 1 }} // Zooms in to 110%
        transition={{ 
          duration: 1, // Takes 4 seconds for a slow, premium feel
          ease: "easeOut" 
        }}
      >
        <Image
          src="/images/Hero_page.jpg" 
          alt="Infinite Machine Scooter"
          fill
          priority
          className="object-cover object-[center_70%]"
        />
      </motion.div>

      {/* Main Title */}
      <div className="absolute top-0 left-0 w-full z-20 pt-6 px-4 flex justify-center overflow-hidden">
        <h1 className="
          text-white 
          font-[900] 
          uppercase 
          whitespace-nowrap 
          leading-[0.8]
          tracking-[-0.07em]
          text-[13.2vw] 
          /* NOTE: Increase scale-x to 1.25 if you want the 'Wide' font look from the original */
          scale-x-[0.93] 
          origin-top
          select-none
        "
        style={{ fontFamily: '"Helvetica Now Display", "Helvetica", "Arial", sans-serif' }}
        >
          Infinite Machine
        </h1>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Bottom CTA (Meet Olto) */}
      <div className="absolute bottom-10 right-12 z-20 flex items-center gap-3 group cursor-pointer">
        <span className="w-4 h-4 rounded-full bg-[#00ff41] shadow-[0_0_12px_rgba(0,255,65,0.4)]" />
        <Link
          href="#olto"
          className="text-white text-[20px] font-normal flex items-center gap-2 hover:opacity-80 transition-opacity"
          style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
        >
          Meet Olto <span className="text-2xl">→</span>
        </Link>
      </div>

      {/* Subtle Lighting Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}