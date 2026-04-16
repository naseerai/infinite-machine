'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submit
  }

  return (
    <section className="w-full bg-white border-t border-b border-black/[0.07] py-14 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[15px] font-normal text-black leading-snug max-w-[240px]">
          Stay updated on product news and<br className="hidden md:block" /> upcoming events.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-black/20 w-full md:max-w-[440px] h-[42px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 h-full px-4 text-[12px] text-black placeholder-black/30 outline-none bg-transparent font-normal"
          />
          <button
            type="submit"
            className="h-full px-4 flex items-center justify-center text-black/60 hover:text-black transition-colors"
            aria-label="Subscribe"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
