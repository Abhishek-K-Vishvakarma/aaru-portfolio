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

const MockupFrame = ({ accent, bars }) => (
  <div className="relative h-40 w-full overflow-hidden border-b border-white/10 bg-[#0B1120]">
    <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-red-400/60" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
      <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
    </div>
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
    <div className="w-full bg-[#fafafa] text-slate-800 font-body overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen w-full flex items-center bg-cover bg-center bg-no-repeat px-8 sm:px-16 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.2) 100%), url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Hero Identity Text (Left Aligned) */}
        <div className="max-w-xl z-10 mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl sm:text-8xl lg:text-9xl font-light tracking-widest text-slate-800 font-serif uppercase select-none drop-shadow-sm"
          >
            Aaru
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg tracking-wide text-zinc-600 font-medium font-serif italic"
          >
            Crafting intuitive digital interfaces where empathy meets aesthetic precision.
          </motion.p>
        </div>

        {/* Social Icons Container (Bottom Right) */}
        <div className="absolute bottom-8 right-8 sm:right-16 lg:right-24 flex items-center gap-5 text-slate-400 z-20">
          <a href="#" className="hover:text-slate-800 transition-colors"><FaFigma size={18} /></a>
          <a href="#" className="hover:text-slate-800 transition-colors"><FaBehance size={18} /></a>
          <a href="#" className="hover:text-slate-800 transition-colors"><FaDribbble size={18} /></a>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section id="about" className="relative py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-100 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div {...fadeUp} className="text-center mb-16 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 border border-purple-200 bg-purple-50 px-4 py-2 text-purple-600 text-xs font-semibold tracking-[2px] uppercase">
              <Sparkles size={13} />
              What I Do
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center">
              Design that solves,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                not just decorates
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center justify-items-center">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center border border-slate-100 bg-slate-50/50 p-8 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 w-full max-w-sm"
              >
                <div className="h-14 w-14 flex items-center justify-center border border-slate-200 bg-white text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-slate-50/50 border-t border-slate-100 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-slate-700 text-xs font-semibold tracking-[2px] uppercase shadow-sm">
              <Sparkles size={13} />
              Selected Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              A few recent builds
            </h2>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors mt-1">
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-center justify-items-center">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col items-center text-center border border-slate-200/60 bg-white overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
              >
                <MockupFrame accent={p.accent} bars={p.bars} />
                <div className="p-6 flex flex-col items-center">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                    {p.tag}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-100 flex flex-col items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 border border-purple-100 bg-purple-50/50 px-4 py-2 text-purple-600 text-xs font-semibold tracking-[2px] uppercase">
              <Sparkles size={13} />
              How I Work
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-slate-900">
              A simple, repeatable process
            </h2>
          </motion.div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center justify-items-center">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative border border-slate-100 bg-slate-50/50 p-6 flex flex-col items-center text-center w-full max-w-sm"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-10 w-10 flex items-center justify-center bg-purple-600 text-white">
                    <step.icon size={18} />
                  </div>
                  <span className="font-display text-2xl font-bold text-slate-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-slate-100 w-full flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full text-center flex flex-col items-center justify-center mx-auto">
          <motion.div {...fadeUp} className="flex flex-col items-center justify-center w-full">
            <Quote className="mx-auto text-purple-500" size={32} />
            <p className="mt-6 font-display text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed text-center">
              "Aaru turned a rough idea into a product our users actually
              enjoy using. Every screen felt considered, not just pretty."
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-400 text-center">
              Product Lead, early-stage startup
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="resume" className="relative py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-100 w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex justify-center">
          <motion.div
            {...fadeUp}
            className="relative border border-slate-100 bg-slate-50 p-10 sm:p-14 text-center overflow-hidden w-full flex flex-col items-center justify-center rounded-2xl"
          >
            <h2 className="relative font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              Have an idea worth designing well?
            </h2>
            <p className="relative mt-3 text-slate-500 max-w-md mx-auto text-center">
              I'm currently open to new freelance and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-3 bg-slate-900 px-8 py-3.5 text-white font-semibold text-sm tracking-wide hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/10"
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </Link>
              <button className="inline-flex items-center gap-3 border border-slate-200 bg-white px-8 py-3.5 font-bold text-slate-700 text-sm tracking-wide shadow-sm hover:bg-slate-50 transition-all duration-300">
                <span>Get Resume</span>
                <Download size={18} className="text-purple-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;