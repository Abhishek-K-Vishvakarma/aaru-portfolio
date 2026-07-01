import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Palette,
  Search,
  Layers,
  Smartphone,
  PenTool,
  Rocket,
  Star,
  Quote,
} from "lucide-react";
import { FaFigma, FaBehance, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

const tools = ["Figma", "Framer", "Webflow", "Photoshop", "Illustrator", "Notion"];

const services = [
  {
    icon: Palette,
    title: "UI Design",
    desc: "Visual interfaces built on grids, type scale and colour systems — the small details that make a product feel finished.",
  },
  {
    icon: Search,
    title: "UX Research",
    desc: "Interviews, flows and usability testing that uncover what users actually need before any pixel gets placed.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Reusable component libraries and tokens that keep a product consistent as teams and features grow.",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    desc: "Interactive, high-fidelity prototypes that let teams validate ideas before a single line of code ships.",
  },
];

const process = [
  { step: "01", icon: Search, title: "Discover", desc: "Research goals, users and constraints." },
  { step: "02", icon: PenTool, title: "Define", desc: "Map user flows and wireframe structure." },
  { step: "03", icon: Palette, title: "Design", desc: "High-fidelity UI, motion and system design." },
  { step: "04", icon: Rocket, title: "Deliver", desc: "Handoff, prototyping and QA support." },
];

const projects = [
  {
    title: "Finlytics",
    tag: "Finance Dashboard · Web App",
    accent: "from-purple-500 to-cyan-400",
    bars: [70, 45, 90, 60],
  },
  {
    title: "Nomad",
    tag: "Travel Companion · Mobile App",
    accent: "from-pink-500 to-purple-500",
    bars: [55, 80, 40, 65],
  },
  {
    title: "Orbit",
    tag: "Component Library · Design System",
    accent: "from-cyan-400 to-blue-500",
    bars: [65, 65, 65, 65],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* Small reusable "device frame" illustration used on project cards.
   Built entirely with CSS so nothing relies on external photos. */
const MockupFrame = ({ accent, bars }) => (
  <div className="relative h-40 w-full overflow-hidden border-b border-white/10 bg-[#0B1120]">
    {/* fake browser chrome */}
    <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-red-400/60" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
      <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
    </div>
    {/* fake layout */}
    <div className="flex h-full gap-2 p-3">
      <div className="flex w-1/4 flex-col gap-1.5">
        <div className={`h-2 w-full bg-gradient-to-r ${ accent } opacity-80`} />
        <div className="h-1.5 w-3/4 bg-white/10" />
        <div className="h-1.5 w-full bg-white/10" />
        <div className="h-1.5 w-2/3 bg-white/10" />
      </div>
      <div className="flex flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 bg-gradient-to-t ${ accent } opacity-70`}
            style={{ height: `${ h }%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="w-full bg-[#070B1A] font-body overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 pb-20 bg-[#0B0F19]">

        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-[160px] animate-pulse duration-[6s]"></div>
          <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse duration-[8s] delay-2000"></div>
        </div>

        {/* Premium Cyber Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(168,85,247,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12">
          {/* Grid System to prevent overlap between text and card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

            {/* LEFT COLUMN: HERO TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left w-full lg:col-span-7"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                className="inline-flex items-center gap-2.5 border border-purple-500/40 bg-gradient-to-r from-purple-500/15 to-cyan-500/5 px-4 py-2 rounded-full backdrop-blur-md"
              >
                <Sparkles size={14} className="text-purple-400" />
                <span className="text-purple-300 text-[10px] font-bold tracking-[3px] uppercase">
                  Available For Remote Projects
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tight"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Aaru</span>
              </motion.h1>

              {/* Subheading / Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              >
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  UI / UX Designer
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg font-medium"
              >
                Crafting high-fidelity, pixel-perfect digital assets. I bridge the gap between complex functionality and breathtaking aesthetic minimalism.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center gap-4 w-full"
              >
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 text-white font-bold text-sm tracking-wide rounded-xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="group inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-8 py-4 font-bold text-white text-sm tracking-wide rounded-xl backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                  <span>Get Resume</span>
                  <Download size={18} className="text-cyan-400" />
                </button>
              </motion.div>

              {/* Tools Marquee */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative mt-12 w-full max-w-md overflow-hidden border-t border-b border-white/[0.05] py-3"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                }}
              >
                <div className="flex w-max gap-8 text-gray-500 text-[10px] font-bold uppercase tracking-[4px] animate-marquee whitespace-nowrap">
                  {[...tools, ...tools].map((t, i) => (
                    <span key={i} className="hover:text-cyan-400 transition-colors duration-300">
                // {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: RECTANGLE PROFILE CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex w-full justify-center lg:col-span-5 z-10"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[3/4] my-8 flex flex-col">

                {/* Outer Card Glow (Removed border radius) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 rounded-none blur-xl opacity-35"></div>

                {/* Card Body Container (Removed border radius) */}
                <div className="relative h-full w-full flex flex-col border border-white/[0.12] bg-[#0E1322]/95 backdrop-blur-2xl rounded-none overflow-hidden shadow-2xl z-10">

                  {/* Top Display Area */}
                  <div className="relative flex-1 flex flex-col items-center justify-center pt-14 pb-12 px-8 bg-gradient-to-br from-purple-900/20 via-[#131B2E] to-cyan-900/20 border-b border-white/[0.08]">

                    {/* Decorative Tech Circles */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                      <div className="absolute h-48 w-48 border border-dashed border-purple-500/20 rounded-full animate-spin duration-[30s]" />
                      <div className="absolute h-56 w-56 border border-double border-cyan-500/10 rounded-full animate-spin duration-[20s]" />
                    </div>

                    {/* Profile Image Blocks */}
                    <div className="relative z-10 h-36 w-36 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-cyan-500 flex items-center justify-center text-7xl font-display font-black text-white shadow-lg shadow-purple-500/30 select-none">
                      A
                    </div>

                    {/* Status Badge */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 whitespace-nowrap flex items-center gap-2 bg-[#0B0F19] px-4 py-2 rounded-full text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-lg">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="tracking-widest uppercase">Open To Work</span>
                    </div>
                  </div>

                  {/* Profile Info & Socials Footer (Increased bottom padding to ensure clean rendering of all icons) */}
                  <div className="pt-10 pb-10 px-6 sm:px-8 bg-gradient-to-b from-transparent to-[#090D1A] flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-black text-white tracking-tight">
                          Aaru
                        </h2>
                        <p className="mt-1 text-cyan-400 text-[11px] font-bold tracking-widest uppercase">Digital Architect</p>
                      </div>

                      {/* Social Icons Layout Container */}
                      <div className="flex gap-1.5 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.05] items-center shrink-0">
                        <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all flex items-center justify-center">
                          <FaFigma size={14} />
                        </a>
                        <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all flex items-center justify-center">
                          <FaBehance size={14} />
                        </a>
                        <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all flex items-center justify-center">
                          <FaDribbble size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Widget 1 - Left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-1/4 z-30 border border-white/[0.1] bg-[#0E1322]/95 px-4 py-3 rounded-xl backdrop-blur-xl shadow-xl text-left min-w-[110px]"
                >
                  <h3 className="text-2xl font-display font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    25+
                  </h3>
                  <p className="text-gray-400 text-[9px] font-bold uppercase tracking-wider mt-0.5">Completed UI</p>
                </motion.div>

                {/* Floating Widget 2 - Right */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -right-10 bottom-1/4 z-30 border border-white/[0.1] bg-[#0E1322]/95 px-4 py-3 rounded-xl backdrop-blur-xl shadow-xl text-left min-w-[110px]"
                >
                  <h3 className="text-2xl font-display font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    2+ Yrs
                  </h3>
                  <p className="text-gray-400 text-[9px] font-bold uppercase tracking-wider mt-0.5">Industry Exp.</p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div {...fadeUp} className="text-center mb-16 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-xs font-semibold tracking-[2px] uppercase">
              <Sparkles size={13} />
              What I Do
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-white text-center">
              Design that solves,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                not just decorates
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-center">
              Four things I care about on every project, from the first
              sketch to final handoff.
            </p>
          </motion.div>

          {/* Added justify-center and justify-items-center to keep row items perfectly aligned */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center justify-items-center">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 w-full max-w-sm"
              >
                <div className="h-14 w-14 flex items-center justify-center border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 group-hover:text-cyan-300 transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            {...fadeUp}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <span className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-purple-300 text-xs font-semibold tracking-[2px] uppercase">
              <Sparkles size={13} />
              Selected Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              A few recent builds
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors mt-1"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Added grid layout constraints to properly align work boxes inside center constraints */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-center justify-items-center">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col items-center text-center border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300 w-full max-w-sm"
              >
                <MockupFrame accent={p.accent} bars={p.bars} />
                <div className="p-6 flex flex-col items-center">
                  <h3 className="font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                    {p.tag}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View case study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-xs font-semibold tracking-[2px] uppercase">
              <Sparkles size={13} />
              How I Work
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-white">
              A simple, repeatable process
            </h2>
          </motion.div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center justify-items-center">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col items-center text-center w-full max-w-sm"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-10 w-10 flex items-center justify-center border border-purple-500/30 bg-gradient-to-br from-purple-600/30 to-cyan-500/30 text-white">
                    <step.icon size={18} />
                  </div>
                  <span className="font-display text-2xl font-bold text-white/10">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      {/* Added flex and items-center to keep the block perfectly centered */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full text-center flex flex-col items-center justify-center mx-auto">
          <motion.div {...fadeUp} className="flex flex-col items-center justify-center w-full">
            <Quote className="mx-auto text-purple-400" size={32} />
            <p className="mt-6 font-display text-xl sm:text-2xl font-medium text-white leading-relaxed text-center">
              "Aaru turned a rough idea into a product our users actually
              enjoy using. Every screen felt considered, not just pretty."
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">
              Product Lead, early-stage startup
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* Added flex and items-center to center the banner container wrapper */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex justify-center">
          <motion.div
            {...fadeUp}
            className="relative border border-white/10 bg-gradient-to-br from-purple-600/20 via-[#111827] to-cyan-600/20 p-10 sm:p-14 text-center overflow-hidden w-full flex flex-col items-center justify-center"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px]" />
            <h2 className="relative font-display text-2xl sm:text-3xl font-bold text-white text-center">
              Have an idea worth designing well?
            </h2>
            <p className="relative mt-3 text-gray-400 max-w-md mx-auto text-center">
              I'm currently open to new freelance and full-time opportunities.
            </p>
            <Link
              to="/contact"
              className="relative mt-7 inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3.5 text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border border-purple-400/30"
            >
              <span>Let's Talk</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;