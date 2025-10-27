"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000814] via-[#010d20] to-[#000814] text-white overflow-x-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] via-[#0095ff] to-[#0066ff]"
        >
          Web Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-gray-300 mt-6 text-lg"
        >
          We build blazing-fast, modern, and stunning websites using Shopify, WordPress, and Custom-coded
          frameworks — tailored to scale your brand and convert your visitors into loyal customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-[#00d4ff] to-[#007bff] px-8 py-3 rounded-full font-semibold shadow-[0_10px_40px_rgba(0,150,255,0.25)] hover:scale-105 transition-transform"
          >
            Let’s Build Your Website
          </Link>
        </motion.div>

        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl top-[-200px] left-[-200px]" />
          <div className="absolute w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />
        </div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Our Web Development Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Shopify Development",
              desc: "Build powerful and aesthetic online stores that drive sales and handle scale effortlessly.",
              img: "/shopify.jpeg",
            },
            {
              title: "WordPress & CMS",
              desc: "Custom WordPress and CMS websites for businesses that need flexibility, SEO, and easy updates.",
              img: "/wordpress.jpeg",
            },
            {
              title: "Custom Coded Solutions",
              desc: "Next.js, React, or Node.js powered web apps — performance-driven, secure, and tailored to you.",
              img: "/coded.jpeg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#0b1425]/60 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== PROCESS TIMELINE ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Our Development Process
        </motion.h2>

        <div className="relative border-l-2 border-blue-500/40 ml-6 space-y-16">
          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              desc: "We understand your business, audience, and goals to design a winning web strategy.",
            },
            {
              step: "02",
              title: "Design & Wireframing",
              desc: "Pixel-perfect, user-centric designs built for conversion and brand alignment.",
            },
            {
              step: "03",
              title: "Development & Integration",
              desc: "Clean, scalable code built on modern frameworks for speed and SEO performance.",
            },
            {
              step: "04",
              title: "Testing & Launch",
              desc: "Rigorous cross-browser testing, mobile responsiveness, and optimization before go-live.",
            },
            {
              step: "05",
              title: "Support & Growth",
              desc: "We stay with you post-launch — updates, analytics, and ongoing optimization.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="ml-10 relative"
            >
              <div className="absolute -left-8 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#000814]" />
              <h3 className="text-2xl font-semibold text-[#00baff]">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ali Raza",
              feedback:
                "They built our Shopify store with precision and speed. Conversion rate doubled within a month!",
            },
            {
              name: "Sara Khan",
              feedback:
                "Our WordPress redesign turned our outdated site into a modern, SEO-optimized powerhouse.",
            },
            {
              name: "David John",
              feedback:
                "Custom Next.js app delivered on time, fully responsive, and fast as lightning. Highly recommended!",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#0b1425]/60 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <p className="text-gray-300 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-[#00baff] font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-r from-[#007bff]/10 to-[#00d4ff]/10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Build a Stunning Website?
        </motion.h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s transform your idea into a fast, scalable, and visually striking digital experience.
        </p>
        <Link
          href="/#contact"
          className="bg-gradient-to-r from-[#00d4ff] to-[#007bff] px-8 py-4 rounded-full font-semibold shadow-[0_10px_40px_rgba(0,150,255,0.25)] hover:scale-105 transition-transform"
        >
          Get Your Free Consultation
        </Link>
      </section>
    </main>
  );
}
