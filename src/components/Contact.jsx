import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "attar.ningrat@gmail.com",
      href: "mailto:attar.ningrat@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "Attar Safaningrat",
      href: "https://www.linkedin.com/in/attarsafangrt/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      value: "@attrngrt",
      href: "https://instagram.com/attrngrt",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            strokeWidth={2}
          />
          <path
            strokeWidth={2}
            d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
          />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} />
        </svg>
      ),
    },
  ];

  return (
    <div className="px-6 md:px-16 max-w-7xl mx-auto py-12">
      <section
        id="contact"
        className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 rounded-[28px] p-8 md:p-14 shadow-sm border border-white/60"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="rounded-full bg-white/70 text-gray-700 text-sm px-4 py-1.5 inline-block font-medium shadow-2xs">
            03 / Contact
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#1F1F1F] tracking-tight"
          >
            Get In Touch<span className="text-indigo-600">.</span>
          </motion.h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Feel free to connect or reach out directly through any of the channels below.
          </p>

          {/* List Sosmed dalam Liquid Glass Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-xl rounded-[24px] hover:bg-white/95 transition-all border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 group-hover:text-indigo-600 shadow-xs transition-transform group-hover:scale-110 mb-3">
                  {link.icon}
                </div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {link.name}
                </h4>
                <p className="text-sm font-semibold text-[#1F1F1F] text-center truncate max-w-full">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-indigo-200/50 text-center">
          <p className="text-gray-500 text-xs font-medium">
            © 2026 — Handcrafted by{" "}
            <span className="text-[#1F1F1F] font-bold">attrngt</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
