import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "attar.ningrat@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
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
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      value: "@attarsafaningrat",
      href: "https://instagram.com/attrngrt",
      icon: (
        <svg
          className="w-6 h-6"
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
    <section
      id="contact"
      className="min-h-[70vh] bg-white py-20 px-6 flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
        >
          Get In Touch<span className="text-indigo-600">.</span>
        </motion.h2>

        <p className="text-slate-500 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Feel free to contact me with these media
        </p>

        {/* List Sosmed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-[2rem] group hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
            >
              <div className="p-4 bg-white rounded-2xl text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {link.name}
              </h4>
              <p className="text-slate-900 font-bold mt-1">{link.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 — Handcrafted by{" "}
            <span className="text-slate-900 font-bold">attrngt</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
