import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      title: "About Me",
      desc1:
        "I am a student at Universitas Indonesia majoring in Media Production. I have a deep interest in how technology and creativity intersect, which led me to explore fields like Data Engineering, Web Development, and the Arts.",
      desc2:
        "I enjoy solving complex problems and turning ideas into functional, aesthetic digital products. My goal is to bridge the gap between technical data processes and creative media.",
      eduTitle: "Education",
    },
    ID: {
      title: "Tentang Saya",
      desc1:
        "Saya adalah mahasiswa Produksi Media di Universitas Indonesia. Saya memiliki ketertarikan mendalam pada titik temu antara teknologi dan kreativitas, yang mendorong saya untuk mengeksplorasi bidang seperti Data Engineering, Web Development, dan Seni.",
      desc2:
        "Saya senang memecahkan masalah kompleks dan mengubah ide menjadi produk digital yang fungsional dan estetis. Tujuan saya adalah menjembatani celah antara proses data teknis dan media kreatif.",
      eduTitle: "Pendidikan",
    },
  };

  const education = [
    {
      year: "2025 - Present",
      campus: "Universitas Indonesia",
      major: "Produksi Media",
    },
    {
      year: "2024 - 2025",
      campus: "Universitas Brawijaya",
      major: "Sistem Informasi",
    },
    { year: "2022 - 2024", campus: "SMAN 1 Kota Bogor", major: "MIPA" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* JUDUL STICKY KIRI */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
          <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 inline-block font-medium">
            01 / Profile
          </span>
          <AnimatePresence mode="wait">
            <motion.h2
              key={lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#1F1F1F]"
            >
              {content[lang].title}
            </motion.h2>
          </AnimatePresence>

          {/* Language Switcher */}
          <div className="inline-flex bg-gray-200/70 p-1 rounded-full">
            {["ID", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  lang === l
                    ? "bg-white text-[#1F1F1F] shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* GRID KARTU KANAN */}
        <div className="lg:col-span-8 grid grid-cols-1 gap-6">
          {/* Card 1: Overview */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] rounded-[24px] p-6 md:p-8">
            <div className="mb-4">
              <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium inline-block">
                Overview
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base"
              >
                <p>{content[lang].desc1}</p>
                <p>{content[lang].desc2}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card 2: Education */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] rounded-[24px] p-6 md:p-8">
            <div className="mb-6">
              <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium inline-block">
                {content[lang].eduTitle}
              </span>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-base font-bold text-[#1F1F1F]">
                      {item.campus}
                    </h4>
                    <p className="text-sm text-gray-500 mt-0.5">{item.major}</p>
                  </div>
                  <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium w-fit sm:self-auto">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
