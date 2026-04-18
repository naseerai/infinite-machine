'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    /* top-[13vw] keeps the menu perfectly aligned to the bottom of the Title on all screens */
    <nav className="absolute top-[13.5vw] right-14 z-50">
      <div className="flex items-center gap-6">
        {['P1', 'Olto', 'About', 'Shop', 'Test Ride'].map((item) => (
          <Link
            key={item}
            href="#"
            className="
              text-[16.3px] 
              font-[400] 
              text-white 
              hover:opacity-60 
              transition-opacity 
              tracking-tight
            "
            style={{ 
              fontFamily: '"Helvetica Now Display", "Helvetica", sans-serif',
              verticalAlign: 'middle' 
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}