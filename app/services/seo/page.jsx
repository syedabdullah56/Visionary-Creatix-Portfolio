"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Link, Globe } from "lucide-react";

const seoServices = [
  {
    icon: <Search className="w-10 h-10 text-green-400" />,
    title: "On-Page SEO",
    description:
      "Optimizing your website content, meta tags, and structure to ensure search engines understand and rank your pages effectively.",
  },
  {
    icon: <Link className="w-10 h-10 text-blue-400" />,
    title: "Off-Page SEO",
    description:
      "Building strong backlinks, improving domain authority, and boosting your brand’s reputation across the web.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
    title: "Technical SEO",
    description:
      "Enhancing site speed, mobile responsiveness, and crawlability for a smoother and more search-friendly experience.",
  },
  {
    icon: <Globe className="w-10 h-10 text-purple-400" />,
    title: "Local & International SEO",
    description:
      "From Google My Business to global visibility — we tailor strategies that make you discoverable everywhere your audience searches.",
  },
];

export default function SEOPage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white min-h-screen pt-24 pb-20 px-6 sm:px-12 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">
          Rank Higher. Grow Faster. Shine Brighter.
        </h1>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl leading-relaxed">
          With Visionary Creatix SEO services, your business doesn’t just appear
          online — it dominates search results. Let’s turn traffic into growth
          and clicks into loyal customers.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {seoServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-400/20 border border-gray-700 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-center text-white">
              {service.title}
            </h2>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Let’s Take Your Brand to the Top
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Partner with Visionary Creatix and experience the difference
          world-class SEO can make to your brand visibility, traffic, and
          revenue.
        </p>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-green-400/40 transition duration-300"
        >
          Get a Free SEO Audit
        </motion.a>
      </motion.div>
    </div>    
  );
}
