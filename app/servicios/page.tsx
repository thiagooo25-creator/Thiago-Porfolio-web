"use client"

import Link from "next/link"
import { Code, Palette, Rocket, Smartphone, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ServiciosPage() {
  const servicios = [
    {
      icon: <Palette className="w-10 h-10" strokeWidth={1.5} />,
      titulo: "Web Design",
      descripcion:
        "We create modern, responsive and optimized websites that highlight your brand and convert visitors into customers.",
    },
    {
      icon: <Code className="w-10 h-10" strokeWidth={1.5} />,
      titulo: "Frontend Development",
      descripcion:
        "We develop intuitive user interfaces with the latest technologies: React, Next.js, Tailwind CSS and more.",
    },
    {
      icon: <Smartphone className="w-10 h-10" strokeWidth={1.5} />,
      titulo: "Mobile Apps",
      descripcion: "We design and develop native and cross-platform mobile applications with exceptional experiences.",
    },
    {
      icon: <Rocket className="w-10 h-10" strokeWidth={1.5} />,
      titulo: "Digital Branding",
      descripcion: "We build strong and coherent brand identities across all digital touchpoints.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f8f8f8] pt-24">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-light text-[#222222] mb-8 animate-slide-up leading-tight">
                Servicios
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed animate-slide-up delay-200">
                Ofrecemos soluciones digitales completas para llevar tu negocio al siguiente nivel
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {servicios.map((servicio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-10 md:p-12 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="text-[#00adb5] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {servicio.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-light text-[#222222] mb-4">{servicio.titulo}</h3>
                  <p className="text-[#666666] leading-relaxed">{servicio.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#222222] mb-16 text-center">Nuestro Proceso</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { numero: "01", titulo: "Descubrimiento", desc: "Entendemos tu visión y objetivos" },
                { numero: "02", titulo: "Estrategia", desc: "Planificamos la mejor solución" },
                { numero: "03", titulo: "Diseño", desc: "Creamos experiencias visuales únicas" },
                { numero: "04", titulo: "Desarrollo", desc: "Construimos con las mejores tecnologías" },
              ].map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-light text-[#00adb5]/20 mb-4">{paso.numero}</div>
                  <h4 className="text-xl font-medium text-[#222222] mb-3">{paso.titulo}</h4>
                  <p className="text-sm text-[#666666]">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#00adb5]">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-light text-white mb-6">Need a Quote?</h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us about your project and we'll send you a personalized proposal
              </p>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#00adb5] text-sm tracking-[0.2em] uppercase font-medium hover:bg-gray-100 transition-all duration-300 hover:gap-5"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
