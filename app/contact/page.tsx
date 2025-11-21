"use client"

import { ParallaxBackground } from "@/components/parallax-background"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <ParallaxBackground image="/team-collaboration-coding-together-modern-workspac.jpg" alt="Contact" />

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-12">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-6">
              <div className="text-xs font-light tracking-[0.3em] text-white/60 uppercase animate-fade-up">
                Get In Touch
              </div>
            </div>

            <div className="overflow-hidden mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white animate-fade-up [animation-delay:200ms] leading-none">
                Contact
              </h1>
            </div>

            <form className="space-y-8 max-w-2xl">
              <div className="animate-fade-up [animation-delay:400ms]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none transition-colors font-light"
                />
              </div>

              <div className="animate-fade-up [animation-delay:500ms]">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none transition-colors font-light"
                />
              </div>

              <div className="animate-fade-up [animation-delay:600ms]">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none transition-colors resize-none font-light"
                />
              </div>

              <div className="overflow-hidden">
                <button
                  type="submit"
                  className="group relative inline-block px-12 py-4 border border-white/30 text-xs tracking-[0.3em] text-white uppercase overflow-hidden animate-fade-up [animation-delay:700ms]"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 tracking-[0.3em]">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20">
          <div className="text-[12rem] md:text-[16rem] font-light text-white/5 leading-none animate-fade-left [animation-delay:400ms]">
            04
          </div>
        </div>
      </div>
    </main>
  )
}
