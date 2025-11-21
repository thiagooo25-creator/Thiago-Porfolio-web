"use client"

import Link from "next/link"
import { ParallaxBackground } from "@/components/parallax-background"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <ParallaxBackground image="/cloud-deployment-dashboard-modern-interface.jpg" alt="About Us" />

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-12">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-6">
              <div className="text-xs font-light tracking-[0.3em] text-white/60 uppercase animate-fade-up">
                About Us
              </div>
            </div>

            <div className="overflow-hidden mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white animate-fade-up [animation-delay:200ms] leading-none">
                Creative
                <br />
                Studio
              </h1>
            </div>

            <div className="space-y-8 max-w-2xl">
              <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed animate-fade-up [animation-delay:400ms]">
                We are a team of passionate designers and developers dedicated to creating exceptional digital
                experiences that inspire and engage.
              </p>

              <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed animate-fade-up [animation-delay:600ms]">
                Our work combines innovative design thinking with technical excellence to deliver solutions that exceed
                expectations.
              </p>
            </div>

            <div className="mt-16 overflow-hidden">
              <Link
                href="/contact"
                className="group relative inline-block px-12 py-4 border border-white/30 text-xs tracking-[0.3em] text-white uppercase overflow-hidden animate-fade-up [animation-delay:800ms]"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 tracking-[0.3em]">
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20">
          <div className="text-[12rem] md:text-[16rem] font-light text-white/5 leading-none animate-fade-left [animation-delay:400ms]">
            03
          </div>
        </div>
      </div>
    </main>
  )
}
