'use client'

import Link from 'next/link'

const connectLinks = ['Instagram', 'YouTube', 'Threads', 'X', 'iOS App', 'Google Play', 'Contact']
const exploreLinks = ['P1', 'Olto', 'Test Ride', 'Press', 'FAQ', 'Careers', 'Newsroom']
const legalLinks = ['Terms', 'Privacy']

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/[0.08] pt-10 pb-10 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo + Copyright */}
        <div className="flex flex-col justify-between gap-16">
          {/* Logo: 3 vertical bars */}
          <div className="flex items-end gap-[3px]" aria-label="Infinite Machine Logo">
            <div className="w-[5px] bg-black rounded-sm" style={{ height: '20px' }} />
            <div className="w-[5px] bg-black rounded-sm" style={{ height: '26px' }} />
            <div className="w-[5px] bg-black rounded-sm" style={{ height: '20px' }} />
          </div>
          <div>
            <p className="text-[10px] text-black/40 font-normal leading-relaxed">
              © Infinite Machine Technologies, Inc.
              <br />
              New York, NY
            </p>
          </div>
        </div>

        {/* Right: Link Columns */}
        <div className="flex gap-14 md:gap-20 flex-wrap">
          {/* Connect */}
          <div className="flex flex-col gap-[3px]">
            <span className="text-[11px] font-medium text-black mb-2">Connect</span>
            {connectLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[11px] text-black/45 hover:text-black transition-colors leading-relaxed font-normal"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-[3px]">
            <span className="text-[11px] font-medium text-black mb-2">Explore</span>
            {exploreLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[11px] text-black/45 hover:text-black transition-colors leading-relaxed font-normal"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-[3px]">
            <span className="text-[11px] font-medium text-black mb-2">Legal</span>
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[11px] text-black/45 hover:text-black transition-colors leading-relaxed font-normal"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
