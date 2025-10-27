"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-[#020817] via-[#010713] to-black text-gray-300 py-12 px-6 border-t border-white/10 overflow-hidden"
    >
      {/* Light Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.08),transparent_70%)] pointer-events-none" />

      {/* Main Footer Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 text-center md:text-left"
      >
        {/* Left Side - Logo & Tagline */}
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Visionary<span className="text-[#00e0ff]">Creatix</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Empowering your digital presence through innovative design,
            strategy, and creativity.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-[#00d4ff] transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#00d4ff] transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#00d4ff] transition duration-200"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#00d4ff] transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-400 text-sm hover:text-[#00e0ff] transition duration-200">
            info@visionarycreatix.com
          </p>
          <p className="text-gray-500 text-xs">Mon – Sun | 24/7 </p>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="relative text-center mt-10 border-t border-white/10 pt-6 text-gray-500 text-sm"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Visionary Creatix</span>. All
          rights reserved.
        </p>
        <p className="mt-1 text-gray-600">
          Designed with 💙 by{" "}
          <span className="text-[#00d4ff]">Visionary Creatix</span>
        </p>
      </motion.div>
    </footer>
  );
}
