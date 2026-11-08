import React from "react";
import { motion } from "framer-motion";
import DSMBC from "../assets/SertifDSMBC.jpg";
import Hology from "../assets/SertifHology7.0.jpg";
import Zentick from "../assets/Zentick-head.jpg";
import promar from "../assets/promar.png";
import kuls from "../assets/kulsweb.png";
import confirmsystem from "../assets/confirmsystem.png";
import coolye from "../assets/coolweb.png";
import absen from "../assets/absen.png";
import promedui from "../assets/promedui.png";
import hologuy from "../assets/hologuy.jpeg";
import despro from "../assets/despro.jpg";
import spv from "../assets/spv.jpg";
import steg from "../assets/steg.jpeg";
import crevmed from "../assets/crevmed.jpeg";

const Experience = () => {
  // Data Events (Activities / Kepanitiaan)
  const events = [
    {
      name: "Promates Market 2025",
      role: "Product Design Division Staff",
      year: "2025",
      image: despro,
    },
    {
      name: "HOLOGY 7.0",
      role: "Volunteer Staff",
      year: "2024",
      image: hologuy,
      orientation: "potrait",
    },
    {
      name: "Musikal Aku, Kau, dan Musik",
      role: "Volunteer Staff",
      year: "2026",
      image: steg,
    },
    {
      name: "COOLYEAH UI 2026",
      role: "Creative Media Manager",
      year: "2026",
      image: crevmed,
    },
    {
      name: "Prorientation 2026",
      role: "Supervising Manager",
      year: "2026",
      image: spv,
    },
  ];

  // Data Sertifikat (Experience)
  const certificates = [
    {
      title: "Data Science Mini Bootcamp",
      issuer: "BCC FILKOM UB",
      date: "2024",
      image: DSMBC,
    },
    {
      title: "Volunteer HOLOGY 7.0",
      issuer: "FILKOM UB",
      date: "2024",
      image: Hology,
    },
    // {
    //   title: "Product Design Division Promates Market",
    //   issuer: "Himprodia UI",
    //   date: "2025",
    //   image: promar,
    // },
  ];

  // Data Projek
  const projects = [
    {
      title: "Zentick",
      category: "UI/UX Course Final Project, Figma",
      desc: "Interactive website for refreshing your mind",
      image: Zentick,
      link: "https://drive.google.com/file/d/1unKgzk0OHYkNKaHNa2CFFPrO9B1DURQO/view?usp=drive_link",
    },
    {
      title: "Promates Market 2025",
      category: "Product Design, Figma, Adobe Illustrator",
      desc: "Designing Feeds for Social Media and Product",
      image: promar,
      link: "https://www.instagram.com/promates.market/",
    },
    {
      title: "Kuls Studio Website",
      category: "Web Dev, React.JS, tailwindcss",
      desc: "Mid-term project for Gamification Course",
      image: kuls,
      link: "https://betterremake.vercel.app/peminatan/kuls",
    },
    {
      title: "Automation Design Confirmation System",
      category: "Web Dev, API Integration, Automation",
      desc: "Automation System integrated with Google Spreadsheet and LINE Messaging API",
      image: confirmsystem,
      link: "https://confirm-request.vercel.app/",
    },
    {
      title: "Prorientation 2026 Attendance Management System",
      category: "Web Dev, API Integration, Automation",
      desc: "Automation System integrated with Google Spreadsheet to write and read",
      image: absen,
      link: "https://absensi-panitia.vercel.app/",
    },
    {
      title: "COOLYEAH UI 2026 Website",
      category: "HTML, tailwindcss, React.js",
      desc: "Official Website for COOLYEAH UI 2026",
      image: coolye,
      link: "https://coolyeahui-2026.vercel.app/",
    },
    {
      title: "Produksi Media UI Website",
      category: "PHP, HTML, Elementor, PHPMyAdmin, SQL",
      desc: "Junior Engineer for promedui.com using Wordpress CMS",
      image: promedui,
      link: "https://promedui.com/",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* JUDUL STICKY KIRI */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
          <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 inline-block font-medium">
            02 / Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1F1F1F]">
            Experience & Projects
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Selected projects, organizational events, systems engineering, and professional certifications.
          </p>
        </div>

        {/* GRID KARTU KANAN */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section: Projects */}
          <div>
            <div className="mb-6">
              <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium inline-block">
                Featured Projects
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white/90 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-white rounded-[24px] p-4 flex flex-col justify-between overflow-hidden group transition-all duration-300"
                >
                  <div>
                    <div className="aspect-video rounded-[18px] overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {(Array.isArray(proj.category)
                          ? proj.category
                          : proj.category.split(",").map((c) => c.trim())
                        ).map((cat, catIdx) => (
                          <span
                            key={catIdx}
                            className="rounded-full bg-gray-100 text-gray-600 text-xs px-3 py-1 font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#1F1F1F] hover:bg-gray-100 transition"
                          title="Open Project"
                        >
                          <svg
                            className="w-4 h-4"
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
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#1F1F1F] group-hover:text-indigo-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section: Events */}
          <div>
            <div className="mb-6">
              <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium inline-block">
                Events
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white/90 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-white rounded-[24px] p-4 flex flex-col justify-between overflow-hidden group transition-all duration-300"
                >
                  <div>
                    <div className="aspect-video rounded-[18px] overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="rounded-full bg-gray-100 text-gray-600 text-xs px-3 py-1 font-medium">
                        {event.role}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1F1F1F] group-hover:text-indigo-600 transition-colors">
                      {event.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <div className="mb-6">
              <span className="rounded-full bg-gray-100 text-gray-600 text-sm px-4 py-1.5 font-medium inline-block">
                Certifications
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white/90 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-white rounded-[24px] p-4 flex flex-col justify-between overflow-hidden group transition-all duration-300"
                >
                  <div>
                    <div className="aspect-video rounded-[18px] overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="rounded-full bg-gray-100 text-gray-600 text-xs px-3 py-1 font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1F1F1F]">
                      {cert.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
