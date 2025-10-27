"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopment() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000814] via-[#010d20] to-[#000814] text-white overflow-x-hidden will-change-transform">
      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] via-[#0095ff] to-[#0066ff]"
        >
          Web Development
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl text-gray-300 mt-4 text-base md:text-lg"
        >
          We build blazing-fast, modern, and stunning websites using Shopify, WordPress, and custom-coded
          frameworks — tailored to scale your brand and convert your visitors into loyal customers.
        </motion.p>

        <Link
          href="/#contact"
          className="mt-8 bg-gradient-to-r from-[#00d4ff] to-[#007bff] px-6 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(0,150,255,0.2)] hover:scale-105 transition-transform duration-200"
        >
          Let’s Build Your Website
        </Link>

        {/* Decorative background — reduced blur & size for mobile */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-xl top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-xl bottom-[-150px] right-[-150px]" />
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
        >
          Our Web Development Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Shopify Development",
              desc: "Build aesthetic online stores that drive sales and scale effortlessly.",
              img: "/shopify.jpeg",
            },
            {
              title: "WordPress & CMS",
              desc: "Custom CMS websites for flexibility, SEO, and easy management.",
              img: "/wordpress.jpeg",
            },
            {
              title: "Custom Coded Solutions",
              desc: "Next.js, React, or Node.js powered apps — fast, secure, and scalable.",
              img: "/coded.jpeg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-[#0b1425]/60 border border-white/10 rounded-2xl overflow-hidden shadow-md backdrop-blur-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,33vw"
                  priority={i === 0}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Our Development Process
        </motion.h2>

        <div className="relative border-l-2 border-blue-500/30 ml-6 space-y-12">
          {[
            "Discovery & Strategy",
            "Design & Wireframing",
            "Development & Integration",
            "Testing & Launch",
            "Support & Growth",
          ].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="ml-8 relative"
            >
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#000814]" />
              <h3 className="text-xl font-semibold text-[#00baff]">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ali Raza",
              feedback:
                "They built our Shopify store with precision and speed. Our conversion rate doubled!",
            },
            {
              name: "Sara Khan",
              feedback:
                "Our WordPress redesign turned our outdated site into a modern powerhouse.",
            },
            {
              name: "David John",
              feedback:
                "Custom Next.js app delivered on time and fast as lightning. Highly recommended!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-[#0b1425]/60 border border-white/10 p-5 rounded-2xl shadow-md"
            >
              <p className="text-gray-300 italic mb-3">“{t.feedback}”</p>
              <h4 className="text-[#00baff] font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#007bff]/10 to-[#00d4ff]/10">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Build a Stunning Website?
        </motion.h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Let’s transform your idea into a fast, scalable, and visually striking digital experience.
        </p>
        <Link
          href="/#contact"
          className="bg-gradient-to-r from-[#00d4ff] to-[#007bff] px-6 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(0,150,255,0.2)] hover:scale-105 transition-transform duration-200"
        >
          Get Your Free Consultation
        </Link>
      </section>
    </main>
  );
}
