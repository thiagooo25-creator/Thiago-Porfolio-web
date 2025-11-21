"use client"

import { useEffect, useRef } from "react"

interface ParallaxBackgroundProps {
  image: string
  alt: string
}

export function ParallaxBackground({ image, alt }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate movement based on mouse position (-20 to 20 pixels)
      const moveX = (clientX / innerWidth - 0.5) * 40
      const moveY = (clientY / innerHeight - 0.5) * 40

      imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`
    }

    const handleScroll = () => {
      if (!imageRef.current) return

      const scrollY = window.scrollY
      const parallaxSpeed = 0.5

      imageRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px) scale(1.1)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        ref={imageRef}
        className="absolute inset-[-5%] transition-transform duration-100 ease-out will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}
