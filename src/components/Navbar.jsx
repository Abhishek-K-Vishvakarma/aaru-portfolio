import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Main layout container */}
      <header className="fixed top-8 left-0 w-full z-50 px-8 md:px-16 flex items-center justify-between pointer-events-none">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl md:text-4xl font-light tracking-[10px] text-neutral-900 pointer-events-auto select-none"
        >
          AARU
        </NavLink>

        {/* 
          FIXED: Desktop Desktop Menu Panel:
          - Increased width/spacing using max-w-xl & px-10.
          - Converted shape to standard rectangle using rounded-none (completely sharp edges).
          - Enhanced internal text tracking with tracking-wider and explicit padding.
        */}
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`hidden md:flex flex-row items-center justify-between gap-10 px-10 h-[56px] rounded-none transition-all duration-500 pointer-events-auto border whitespace-nowrap min-w-[460px] max-w-2xl backdrop-blur-xl
            ${ scroll
              ? "bg-white/95 shadow-md border-neutral-300"
              : "bg-white/80 shadow-sm border-neutral-200"
            }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[14px] uppercase tracking-wider font-medium transition duration-300 select-none ${ isActive ? "text-neutral-950" : "text-neutral-500 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                /* Added padding around each link text for premium breathability */
                <span className="relative py-2 px-3 block">
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute left-3 right-3 bottom-0 h-[1.5px] bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </motion.nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden pointer-events-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 bg-white/90 backdrop-blur-md border border-neutral-300 text-2xl text-black shadow-sm"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-6 right-6 bg-white/95 backdrop-blur-xl border border-neutral-300 p-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-2 text-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-medium py-3 transition ${ isActive ? "text-black bg-neutral-100" : "text-neutral-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;