'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute top-[32px] right-8 z-50">
      <div className="flex items-center gap-6">
        {['P1', 'Olto', 'About', 'Shop', 'Test Ride'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-[13px] font-medium text-white/80 hover:text-white transition-colors tracking-wide"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}