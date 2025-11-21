"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HervinHome() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      title: "Creative Studio",
      subtitle: "Design & Development",
      image: "/modern-creative-workspace-with-laptop.jpg",
    },
    {
      title: "Portfolio",
      subtitle: "Our Latest Works",
      image: "/creative-portfolio-showcase.png",
    },
    {
      title: "Services",
      subtitle: "What We Offer",
      image: "/professional-services-office.jpg",
    },
    {
      title: "About Us",
      subtitle: "Our Story",
      image: "/creative-team-collaboration.png",
    },
    {
      title: "Contact",
      subtitle: "Let's Talk",
      image: "/modern-office-contact-space.jpg",
    },
  ]

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) nextSlide()
        else if (e.deltaY < 0) prevSlide()
      }, 50)
    }
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentSlide, isAnimating])

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      {/* Navigation Component */}
      <Navigation />

      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-creative-workspace-with-laptop.jpg"
            alt="Creative workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-light text-white tracking-tight leading-none mb-8">
              Creative
              <br />
              <span className="font-semibold">Studio</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-white/90 text-lg md:text-2xl font-light tracking-wide mb-14 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We craft immersive digital experiences that inspire and engage
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00adb5] text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-[#008c94] transition-all duration-500 hover:gap-6"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"
            />
          </motion.div>
        </div>
      </main>

      {/* Slides Container - Horizontal Scroll */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
              <div className="overflow-hidden mb-4">
                <h2
                  className={`text-sm tracking-[0.3em] uppercase font-light transition-transform duration-1000 ${
                    currentSlide === index ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.subtitle}
                </h2>
              </div>
              <div className="overflow-hidden">
                <h1
                  className={`text-7xl md:text-9xl font-light tracking-tight transition-transform duration-1000 ${
                    currentSlide === index ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" strokeWidth={1} />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" strokeWidth={1} />
      </button>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 z-50 text-white/70 font-light text-sm tracking-widest">
        <span className="text-2xl text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Dots Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white h-8" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
