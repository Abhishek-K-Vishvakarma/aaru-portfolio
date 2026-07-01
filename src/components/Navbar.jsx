import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${ scrolled
          ? "bg-[#070B1A]/95 border-white/10 backdrop-blur-2xl shadow-2xl shadow-purple-500/10"
          : "bg-[#070B1A]/40 border-white/5 backdrop-blur-md"
          }`}
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-[length:200%_100%] animate-[gradient_6s_ease_infinite] opacity-70" />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3.5 sm:py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wide transition-transform duration-300 group-hover:scale-[1.03]">
                <span className="text-white">Aa</span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  ru
                </span>
              </h1>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
            </div>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${ isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 px-1">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="absolute inset-0 -z-10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-lg rounded-full"></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Hire Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-flex items-center relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3 font-semibold text-white text-sm lg:text-base tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 group border border-purple-400/30"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            <span className="relative flex items-center gap-2.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX className="text-purple-400" />
            ) : (
              <HiMenuAlt3 />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-[#0B1120]/98 to-[#070B1A]/98 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `relative flex items-center gap-4 px-5 py-3.5 font-medium transition-all duration-300 ${ isActive
                          ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-opacity ${ isActive ? "opacity-100" : "opacity-0" }`}></span>
                          <span className="flex-1">{item.name}</span>
                          {isActive && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-full">
                              •
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Hire Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-5 mt-3 border-t border-white/5"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-6 py-4 font-semibold text-white text-base shadow-2xl shadow-purple-500/30 group border border-purple-400/30"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                    <span className="relative flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Hire Me Now
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer — pushes every page's content below the fixed header.
          Height matches the header's natural height (accent line + padding + logo). */}
      <div className="h-[66px] sm:h-[74px]" />
    </>
  );
};

export default Navbar;