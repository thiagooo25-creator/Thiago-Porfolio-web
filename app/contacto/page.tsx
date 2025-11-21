"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call - In production, this would send to your email endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("[v0] Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({ nombre: "", email: "", mensaje: "" })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f8f8f8] pt-24">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-light text-[#222222] mb-8 leading-tight">
                Let's Work
                <br />
                <span className="font-semibold">Together</span>
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                Have a project in mind? I'd love to hear from you
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Contact Info */}
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h2 className="font-heading text-3xl font-light text-[#222222] mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00adb5]/10 rounded-full flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#00adb5]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#222222] font-medium mb-1">Email</p>
                        <a
                          href="mailto:hello@hervin.com"
                          className="text-[#666666] hover:text-[#00adb5] transition-colors"
                        >
                          hello@hervin.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00adb5]/10 rounded-full flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#00adb5]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#222222] font-medium mb-1">Phone</p>
                        <a href="tel:+34123456789" className="text-[#666666] hover:text-[#00adb5] transition-colors">
                          +34 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00adb5]/10 rounded-full flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#00adb5]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#222222] font-medium mb-1">Location</p>
                        <p className="text-[#666666]">Madrid, Spain</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-light text-[#222222] mb-5">Follow Me</h3>
                  <div className="flex gap-5">
                    {[
                      { name: "LinkedIn", url: "#" },
                      { name: "Instagram", url: "#" },
                      { name: "Twitter", url: "#" },
                      { name: "Dribbble", url: "#" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-[#666666] hover:text-[#00adb5] transition-colors text-sm tracking-wider"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form with AJAX submission */}
              <motion.div
                className="bg-white p-10 md:p-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-[#222222] mb-3 tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-5 py-4 border border-[#e0e0e0] focus:border-[#00adb5] focus:outline-none transition-colors bg-white text-[#222222] placeholder:text-[#999]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-3 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border border-[#e0e0e0] focus:border-[#00adb5] focus:outline-none transition-colors bg-white text-[#222222] placeholder:text-[#999]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-[#222222] mb-3 tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-5 py-4 border border-[#e0e0e0] focus:border-[#00adb5] focus:outline-none transition-colors resize-none bg-white text-[#222222] placeholder:text-[#999]"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-8 py-5 bg-[#00adb5] text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-[#008c94] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#00adb5] text-sm text-center bg-[#00adb5]/10 py-3 px-4"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center bg-red-50 py-3 px-4"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
