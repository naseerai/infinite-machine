'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero_page.jpg"
          alt="Infinite Machine Scooter"
          fill
          priority
          className="object-cover object-[center_85%] md:object-[center_80%] lg:object-[center_88%] scale-[1.03]"
        />
      </div>

      {/* Subtle Lighting */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      {/* Depth */}
      <div className="absolute inset-0 z-10 shadow-[inset_0_-80px_120px_rgba(0,0,0,0.08)]" />

      {/* Title */}
      <div className="absolute top-0 left-0 w-full px-6 pt-2 z-20">
        <h1 className="
          max-w-[90%] 
          md:max-w-[85%] 
          lg:max-w-[75%] 
          font-black 
          text-white/90 
          leading-[0.85]
          tracking-[-0.04em] 
          text-[clamp(60px,10vw,160px)]
        ">
          INFINITE MACHINE
        </h1>
      </div>

      {/* CTA */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <Link
          href="#olto"
          className="text-white/80 text-[14px] font-medium hover:text-white transition"
        >
          Meet Olto →
        </Link>
      </div>

    </section>
  )
}