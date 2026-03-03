import React from "react";
import { motion } from "framer-motion";

const Hero = ({ profileImage }) => {
  const name = "Attar Safaningrat";
  const description =
    "First year student Media Production Universitas Indonesia";

  // Data untuk deskripsi singkat kamu
  const tags = ["Creative Media", "Web Dev", "Data Engineer"];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.4, // Nama -> Deskripsi -> Tags
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
      transition: { duration: 1 },
    },
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-4"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
        {/* KIRI: Konten Teks */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="block overflow-hidden py-1">
              <motion.span
                variants={nameVariants}
                className="inline-block text-slate-900"
              >
                {name}
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeVariants}
            className="mt-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed"
          >
            {description}
          </motion.p>

          {/* BAGIAN TAGS: Pengganti Button Contact Me */}
          <motion.div
            variants={fadeVariants}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white border border-slate-200 text-indigo-600 text-sm md:text-base font-bold rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* KANAN: Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-shrink-0 mt-10 md:mt-0 md:ml-12"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-md border-4 border-white">
            <img
              src={profileImage || "https://via.placeholder.com/400"}
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
