"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "Creative Vision",
      category: "Web Design",
      year: "2024",
      description:
        "A modern portfolio website for a creative agency showcasing their best work with stunning visuals and smooth animations.",
      image: "/creative-portfolio-showcase.png",
      tags: ["UI/UX", "React", "Next.js"],
    },
    {
      title: "Modern Workspace",
      category: "Branding",
      year: "2024",
      description:
        "Complete brand identity and web platform for a coworking space company focused on creative professionals.",
      image: "/modern-creative-workspace-with-laptop.jpg",
      tags: ["Branding", "Web Design", "Photography"],
    },
    {
      title: "Professional Services",
      category: "Development",
      year: "2024",
      description:
        "Enterprise-level web application for a professional services firm with complex data visualization and reporting.",
      image: "/professional-services-office.jpg",
      tags: ["React", "TypeScript", "Data Viz"],
    },
    {
      title: "Team Collaboration",
      category: "App Design",
      year: "2023",
      description:
        "Mobile-first collaboration platform connecting remote teams with intuitive interfaces and real-time features.",
      image: "/creative-team-collaboration.png",
      tags: ["Mobile", "UI/UX", "SaaS"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <>
      <Navigation />
      <main className="fixed inset-0 overflow-hidden bg-black pt-16">
        {/* Fullscreen slider showcase */}
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full h-full relative flex items-center justify-center">
              {/* Background Image with parallax effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: currentSlide === index ? 1 : 1.1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-white px-8 md:px-16 max-w-6xl">
                <div className="overflow-hidden mb-3">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: currentSlide === index ? 0 : 100, opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xs tracking-[0.3em] uppercase font-light text-white/70"
                  >
                    {project.category} / {project.year}
                  </motion.div>
                </div>

                <div className="overflow-hidden mb-6">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: currentSlide === index ? 0 : 100, opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-heading text-6xl md:text-8xl lg:text-9xl font-light tracking-tight"
                  >
                    {project.title}
                  </motion.h1>
                </div>

                <div className="overflow-hidden mb-8">
                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: currentSlide === index ? 0 : 100, opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light text-white/80 max-w-2xl leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: currentSlide === index ? 0 : 100, opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-3"
                  >
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 border border-white/30 text-xs tracking-wider uppercase hover:bg-white/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1} />
        </button>

        <button
          onClick={nextSlide}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1} />
        </button>

        {/* Slide Counter */}
        <div className="fixed bottom-8 right-8 z-50 text-white/70 font-light text-sm tracking-widest">
          <span className="text-2xl text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="mx-2">/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        {/* Dots Navigation */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white h-8" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Close Button */}
        <Link
          href="/"
          className="fixed top-8 right-8 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
          Close
        </Link>
      </main>
    </>
  )
}
