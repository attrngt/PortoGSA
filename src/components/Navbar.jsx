import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[24px] px-6 py-4 mx-6 mt-6 flex justify-between items-center transition-all">
        {/* Logo */}
        <div className="font-semibold text-sm uppercase tracking-tight text-[#1F1F1F]">
          AttarNgt<span className="text-indigo-600">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.name === "Contact"
                  ? "bg-[#1F1F1F] text-white rounded-full px-5 py-2.5 text-sm hover:bg-black transition"
                  : "text-sm font-medium text-gray-600 hover:text-[#1F1F1F] transition-colors"
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1F1F1F] p-1.5 focus:outline-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Liquid Glass) */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] mx-6 mt-2 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.name === "Contact"
                  ? "block text-center bg-[#1F1F1F] text-white rounded-full px-5 py-2.5 text-sm hover:bg-black transition"
                  : "block text-sm font-medium text-gray-700 hover:text-[#1F1F1F]"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
