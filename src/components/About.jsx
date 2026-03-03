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
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 flex items-center gap-4 flex-1">
            <span className="text-indigo-600">01.</span>
            {/* Animasi Judul */}
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {content[lang].title}
              </motion.span>
            </AnimatePresence>
            <div className="h-[1px] bg-slate-200 flex-1"></div>
          </h2>

          {/* Tombol Switcher yang Smooth */}
          <div className="relative flex bg-slate-100 p-1 rounded-xl w-fit self-center">
            {["ID", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`relative px-6 py-1.5 z-10 text-sm font-bold transition-colors duration-300 ${
                  lang === l
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {l}
                {lang === l && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* KOLOM KIRI: Deskripsi dengan Fade Animation */}
          <div className="min-h-[250px]">
            {" "}
            {/* Biar layout gak loncat pas transisi */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {content[lang].desc1}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {content[lang].desc2}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* KOLOM KANAN: Pendidikan */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.h3
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold text-slate-900 mb-4"
              >
                {content[lang].eduTitle}
              </motion.h3>
            </AnimatePresence>

            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-indigo-100"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  {item.campus}
                </h4>
                <p className="text-slate-500 font-medium">{item.major}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
