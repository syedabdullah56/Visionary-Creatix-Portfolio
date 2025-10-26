"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full py-24 px-6 bg-gradient-to-b from-[#010713] via-[#020e1f] to-[#010713] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full text-center space-y-6"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#00e0ff] via-[#00b4ff] to-[#007bff] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,200,255,0.8)]">
          Let’s Talk Business
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Have a project in mind? We’d love to hear from you!  
          You can reach us directly at{" "}
          <span className="text-[#00d4ff] font-semibold">
            info@visionarycreatix.com
          </span>{" "}
          or simply fill out the form below.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 mt-8 text-left bg-[#0b0f1c]/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-[0_0_35px_rgba(0,150,255,0.2)]"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e0ff] transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e0ff] transition-all duration-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e0ff] transition-all duration-300"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            className="w-full py-4 bg-gradient-to-r from-[#00e0ff] via-[#00b4ff] to-[#007bff] font-extrabold rounded-full shadow-[0_0_45px_rgba(0,200,255,0.8)] hover:shadow-[0_0_65px_rgba(0,200,255,1)] transition duration-300"
          >
            {status === "loading"
              ? "Sending..."
              : status === "success"
              ? "Message Sent ✅"
              : "Send Message"}
          </motion.button>
        </motion.form>

        {status === "error" && (
          <p className="text-red-400 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.div>
    </section>
  );
}
