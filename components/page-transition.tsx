"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayPath, setDisplayPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== displayPath) {
      setIsLoading(true)

      const timer = setTimeout(() => {
        setDisplayPath(pathname)
        setTimeout(() => {
          setIsLoading(false)
        }, 600)
      }, 400)

      return () => clearTimeout(timer)
    }
  }, [pathname, displayPath])

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-black transition-all duration-700 flex items-center justify-center ${
          isLoading ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="text-6xl md:text-8xl font-light text-white/20 tracking-wider">
            {isLoading ? "LOADING" : ""}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`} key={displayPath}>
        {children}
      </div>
    </>
  )
}
