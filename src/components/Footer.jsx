import { Link } from "react-router-dom";
import { FaFigma, FaBehance, FaDribbble, FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#070B1A] font-body text-gray-400">

      {/* Subtle Background Glow Subtle Decoration */}
      <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-purple-600/20 to-transparent rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Changed: Turned row layout into a fully centered column stack */}
        <div className="flex flex-col items-center justify-center text-center gap-8 pb-10 border-b border-white/5">

          {/* Brand/Identity Block */}
          <div className="flex flex-col items-center text-center gap-2">
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">
              Aaru<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">.</span>
            </h3>
            <p className="text-sm max-w-sm text-gray-400">
              Designing refined, impactful, and beautiful custom user experiences.
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/projects" className="hover:text-white transition-colors duration-300">
              Projects
            </Link>
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-1 hover:text-white transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} className="text-purple-400" />
            </a>
          </div>

          {/* Social Icons Stack */}
          <div className="flex gap-2 justify-center">
            <a href="#" className="p-2 border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
              <FaFigma size={16} />
            </a>
            <a href="#" className="p-2 border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
              <FaBehance size={16} />
            </a>
            <a href="#" className="p-2 border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/30 transition-all duration-300">
              <FaDribbble size={16} />
            </a>
            <a href="#" className="p-2 border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-gray-500/20 hover:border-gray-500/30 transition-all duration-300">
              <FaGithub size={16} />
            </a>
          </div>

        </div>

        {/* Lower Meta Copyright Bar */}
        {/* Changed: Turned layout into a single row column on mobile and centered layout structure overall */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500 tracking-wide uppercase">
          <p className="text-center md:text-left">© {currentYear} Aaru Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Built with
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold animate-pulse">
              React & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;