import React from "react";
import { motion } from "framer-motion";

const Hero = ({ profileImage }) => {
  const name = "Attar Safaningrat";
  const description =
    "A student from Media Production at Universitas Indonesia";

  // Data untuk deskripsi singkat kamu
  const tags = ["Creative Media", "Web Dev", "Data Engineer"];

  // Tools & Technologies online icons (tidak menggunakan inline SVG)
  const tools = [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Antigravity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antigravity/antigravity-original.svg",
      fallback: "https://cdn.iconscout.com/icon/free/png-256/free-antigravity-google-icon-svg-download-png-14514961.png",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const nameVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-indigo-50/70 via-purple-50/50 to-teal-50/40 animate-gradient-slow px-6 md:px-16 py-20 pt-32 min-h-screen flex items-center justify-center"
    >
      {/* Animated Liquid Gradient Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-300/35 via-violet-300/30 to-pink-300/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 35, 0],
            y: [0, 45, -45, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] bg-gradient-to-br from-teal-200/35 via-sky-300/30 to-indigo-300/35 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 35, -45, 0],
            y: [0, -35, 35, 0],
            scale: [0.95, 1.1, 1, 0.95],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 left-1/3 w-[26rem] h-[26rem] bg-gradient-to-r from-violet-200/35 via-fuchsia-200/25 to-emerald-100/35 rounded-full blur-3xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
        {/* KIRI */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Label Status Pill */}
          <motion.div
            variants={fadeVariants}
            className="rounded-full bg-teal-50 text-teal-700 text-xs px-4 py-2 flex items-center gap-2 mb-8 font-medium border border-teal-100/60"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>AVAILABLE FOR COLLAB</span>
          </motion.div>

          {/* Judul Besar */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-[#1F1F1F]">
            <span className="block">Hello, I'm</span>
            <span className="block overflow-hidden py-1">
              <motion.span
                variants={nameVariants}
                className="inline-block text-[#1F1F1F]"
              >
                {name}
              </motion.span>
            </span>
          </h1>

          {/* Paragraf */}
          <motion.p
            variants={fadeVariants}
            className="mt-6 text-gray-500 text-sm max-w-md leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Tombol CTA Pill Hitam */}
          <motion.div variants={fadeVariants} className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-[#1F1F1F] text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-black transition shadow-sm"
            >
              Contact Me!
            </a>
          </motion.div>
        </motion.div>

        {/* KANAN: Grid 2 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full items-stretch">
          {/* 1. Kartu Profil (Liquid Glass) */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[28px] overflow-hidden p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="font-bold text-lg text-[#1F1F1F]">Attar Ningrat</h3>
              <p className="text-xs text-gray-400 mt-0.5">Bogor, Indonesia</p>
            </div>
            <div className="mt-4 p-3 bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-100/80 flex flex-col gap-2">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-white/90 text-gray-700 text-[10px] font-semibold rounded-full border border-gray-200/70 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full w-fit">
                UI/UX & Web Dev
              </div>
            </div>
          </div>

          {/* 2. Foto Profil */}
          <div className="rounded-[28px] shadow-md overflow-hidden aspect-square bg-gray-100 border border-white/70">
            <img
              src={profileImage || "https://via.placeholder.com/400"}
              alt="profile"
              className="w-full h-full rounded-[28px] object-cover"
            />
          </div>

          {/* 3. Kartu Brand */}
          <div className="bg-gradient-to-br from-indigo-200 via-violet-300 to-indigo-400 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] rounded-[24px] p-6 flex flex-col justify-between text-indigo-950 min-h-[160px]">
            <p className="text-xs font-semibold text-indigo-950/80 leading-relaxed">
              The most recent brands & projects I proudly developed
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold tracking-wider uppercase text-indigo-950/90">
              <span>Zentick</span>
              <span>•</span>
              <span>Promed UI</span>
              <span>•</span>
              <span>COOLYEAH</span>
              <span>•</span>
              <span>SPICE Studio</span>
            </div>
          </div>

          {/* 4. Tools & Technologies Icons Online (Liquid Glass, No SVG) */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[28px] p-5 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Tools & Stack
              </span>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                10 Tools
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 items-center justify-items-center">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/90 backdrop-blur-md border border-white/90 rounded-full shadow-2xs flex items-center justify-center p-2 hover:bg-white hover:scale-115 hover:shadow-md transition-all duration-200 cursor-pointer"
                  title={tool.name}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain pointer-events-none"
                    loading="lazy"
                    onError={(e) => {
                      if (tool.fallback) e.currentTarget.src = tool.fallback;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
