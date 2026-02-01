"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  LineChart,
  Cpu
} from "lucide-react";
import Link from "next/link";

const aiServices = [
  {
    icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    title: "AI Agent Workflows",
    desc:
      "Automate repetitive workflows using intelligent AI agents that operate independently, improving efficiency, accuracy, and cost control.",
    points: [
      "Process Automation",
      "Reduced Manual Work",
      "High Accuracy Execution",
    ],
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    title: "Intelligent Chatbots",
    desc:
      "24/7 AI-powered chatbots that engage customers, answer queries instantly, and help you convert leads even while you sleep.",
    points: [
      "Instant Responses",
      "Lead Nurturing",
      "Global Availability",
    ],
  },
  {
    icon: <LineChart className="w-10 h-10 text-indigo-400" />,
    title: "Predictive AI & Data Analytics",
    desc:
      "Turn raw data into actionable insights with predictive analytics for pricing, vendors, and future planning.",
    points: [
      "Price Forecasting",
      "Vendor Performance Analysis",
      "Proactive Decision Making",
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-purple-400" />,
    title: "Custom AI Solutions",
    desc:
      "Tailor-made AI systems built specifically for your business challenges by experienced ML engineers.",
    points: [
      "Custom Problem Analysis",
      "Scalable Architecture",
      "Business-Focused Results",
    ],
  },
];

export default function AIServicesPage() {
     const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen pt-28 pb-24 px-6 bg-gradient-to-b from-[#000814] via-[#00172f] to-[#000814] text-white">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
          AI Services That Scale Your Business
        </h1>
        <p className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed">
          We design intelligent AI solutions that automate workflows, enhance decision-making,
          and unlock new growth opportunities for modern businesses.
        </p>
      </motion.div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {aiServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#0b1328]/70 backdrop-blur-md border border-blue-900/40 rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-5 leading-relaxed">
              {service.desc}
            </p>
            <ul className="space-y-2 text-gray-300">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

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
    </section>
  );
}
