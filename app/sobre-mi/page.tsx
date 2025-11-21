"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function SobreMiPage() {
  const testimonios = [
    {
      nombre: "María González",
      cargo: "CEO, Tech Solutions",
      texto:
        "Working with Hervin was an exceptional experience. Their attention to detail and creativity exceeded our expectations.",
    },
    {
      nombre: "Carlos Martínez",
      cargo: "Founder, StartupXYZ",
      texto: "The Hervin team transformed our vision into an impressive digital reality. Highly recommended.",
    },
    {
      nombre: "Ana Rodríguez",
      cargo: "Marketing Director, Brand Co",
      texto:
        "Professionalism, creativity and exceptional results. Hervin is our trusted partner for all our digital projects.",
    },
  ]

  const logos = ["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"]

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
                About
                <br />
                <span className="font-semibold">Me</span>
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                Creating memorable digital experiences since 2016
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content with Photo */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                className="relative aspect-[3/4] bg-gray-200 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/creative-professional-portrait-modern.jpg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-light text-[#222222]">Hello, I'm Hervin</h2>
                <p className="text-lg text-[#666666] leading-relaxed">
                  I'm a web designer and developer with over 8 years of experience creating digital experiences that
                  combine aesthetics, functionality and cutting-edge technology.
                </p>
                <p className="text-lg text-[#666666] leading-relaxed">
                  My passion is transforming complex ideas into simple and elegant solutions that help brands connect
                  with their audience in meaningful ways.
                </p>
                <p className="text-lg text-[#666666] leading-relaxed">
                  I've had the privilege of working with innovative startups and established companies, helping them
                  define their digital presence and achieve their business goals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-light text-[#222222] mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Skills
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { categoria: "Design", items: ["UI/UX Design", "Branding", "Motion Design", "Prototyping"] },
                { categoria: "Development", items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Node.js"] },
                { categoria: "Tools", items: ["Figma", "Adobe Creative Suite", "Git", "Vercel"] },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-[#222222] mb-6">{skill.categoria}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-[#666666]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 md:py-32 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-light text-[#222222] mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="text-[#666666] leading-relaxed mb-6 italic">"{testimonio.texto}"</p>
                  <div>
                    <p className="text-[#222222] font-medium">{testimonio.nombre}</p>
                    <p className="text-sm text-[#666666]">{testimonio.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Logos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <h3 className="text-2xl font-light text-[#222222] mb-12 text-center">Trusted By</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <span className="text-2xl font-light text-[#666666]/40 hover:text-[#00adb5] transition-colors duration-300">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
