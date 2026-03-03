import React from "react";
import { motion } from "framer-motion";
import DSMBC from "../assets/SertifDSMBC.jpg";
import Hology from "../assets/SertifHology7.0.jpg";
import Zentick from "../assets/Zentick-head.jpg";
import promar from "../assets/promar.png";

const Experience = () => {
  // Data Sertifikat (Experience)
  const certificates = [
    {
      title: "Data Science Mini Bootcamp",
      issuer: "BCC FILKOM UB",
      date: "2024",
      image: DSMBC, // Ganti dengan file di assets lo
    },
    {
      title: "Volunteer HOLOGY 7.0",
      issuer: "FILKOM UB",
      date: "2024",
      image: Hology, // Ganti dengan file di assets lo
    },
    {
      title: "Product Design Division Promates Market",
      issuer: "Himprodia UI",
      date: "2025",
      image: promar,
    },
  ];

  // Data Projek
  const projects = [
    {
      title: "Zentick",
      category: "UI/UX Course Final Project",
      desc: "Interactive website for refreshing your mind",
      image: Zentick,
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* === SECTION: EXPERIENCE (CERTIFICATES) === */}
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4">
          <span className="text-indigo-600">02.</span> Experience
          <div className="h-[1px] bg-slate-200 flex-1"></div>
        </h2>

        {/* Grid Sertifikat */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 ">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="aspect-video bg-slate-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  {cert.issuer}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === SECTION: PROJECTS === */}
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4">
          <span className="text-indigo-600">03.</span> Projects
          <div className="h-[1px] bg-slate-200 flex-1"></div>
        </h2>

        {/* Grid Projek */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm group"
            >
              {/* Container Foto Dokumentasi */}
              <div className="aspect-video overflow-hidden bg-slate-100">
                <motion.img
                  whileHover={{ scale: 1.05 }} // Efek zoom halus pas di-hover
                  transition={{ duration: 0.4 }}
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover" // Dokumentasi biasanya lebih bagus 'cover' biar penuh
                />
              </div>

              {/* Konten Teks */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {proj.category}
                  </span>
                  <a
                    href={proj.link}
                    className="text-slate-400 hover:text-indigo-600"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
