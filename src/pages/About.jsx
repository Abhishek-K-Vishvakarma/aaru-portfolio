import { motion } from "framer-motion";
import {
  Palette,
  Lightbulb,
  MonitorSmartphone,
  Download,
  Sparkles,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Palette size={24} className="text-zinc-700" />,
      title: "Visual Design",
      desc: "Modern interfaces with strong visual hierarchy, elegant typography, and refined color systems.",
    },
    {
      icon: <MonitorSmartphone size={24} className="text-zinc-700" />,
      title: "Responsive Design",
      desc: "Pixel-perfect layouts optimized meticulously for desktop, tablet, and mobile devices.",
    },
    {
      icon: <Lightbulb size={24} className="text-zinc-700" />,
      title: "Problem Solving",
      desc: "Transforming complex business requirements into simple, intuitive user experiences.",
    },
    {
      icon: <Sparkles size={24} className="text-zinc-700" />,
      title: "Design Systems",
      desc: "Building scalable components that keep digital products visually consistent and organized.",
    },
  ];

  return (
    <section className="bg-[#F9F9F8] text-zinc-900 pt-56 sm:pt-64 md:pt-72 pb-24 flex items-center justify-center min-h-screen font-sans">
      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 flex flex-col items-center justify-center gap-16">

        {/* Heading Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center justify-center w-full"
        >
          <span className="text-zinc-500 uppercase tracking-[4px] text-xs font-semibold">
            About Me
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-zinc-900 leading-[1.15] text-balance text-center">
            Creating
            <span className="italic text-zinc-600 font-serif"> Meaningful </span>
            <br className="hidden sm:block" />
            Digital Experiences
          </h2>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-balance text-center">
            I believe great design is not only beautiful — it should also
            solve problems, improve usability, and create memorable, effortless
            experiences for users.
          </p>
        </motion.div>

        {/* Main Split Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-stretch justify-items-center justify-center w-full">

          {/* Left Side: Image and UI/UX Box */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-between gap-6 w-full max-w-[440px]"
          >
            {/* Image Container - Sharp Rectangle with Soft Shadow */}
            <div className="relative w-full aspect-[4/3] sm:h-[360px] border border-zinc-200/80 rounded-none overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                alt="Designer at work"
                className="w-full h-full object-cover grayscale-[20%] contrast-[95%]"
              />
            </div>

            {/* UI/UX Box - Clean Cream/White Stacked Card */}
            <div className="w-full border border-zinc-200/80 bg-white px-6 py-8 text-center flex flex-col items-center justify-center rounded-none shadow-sm flex-grow">
              <h3 className="text-xl font-serif tracking-widest text-zinc-800 uppercase font-medium">
                UI / UX Design
              </h3>
              <p className="text-zinc-500 mt-3 text-sm sm:text-base leading-6 text-center">
                Focused on clean, accessible, and user-centered digital products that balance form and function.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Text Content Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[440px] lg:max-w-none border border-zinc-200/80 bg-white p-8 sm:p-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left rounded-none shadow-sm"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-snug text-zinc-900">
              Designing products that people
              <span className="italic text-zinc-600 block sm:inline"> love to use.</span>
            </h3>

            <p className="mt-6 text-zinc-500 text-sm sm:text-base leading-7">
              My design approach starts with understanding user behavior
              and business goals. Every interface is crafted with
              simplicity, consistency, and usability in mind.
            </p>

            <p className="mt-4 text-zinc-500 text-sm sm:text-base leading-7">
              From wireframes to high-fidelity prototypes, I enjoy turning
              ideas into engaging digital experiences that look beautiful
              and work flawlessly.
            </p>

            {/* Minimalist Premium Button */}
            <button className="mt-8 flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 text-sm sm:text-base font-medium transition-all duration-300 rounded-none w-full sm:w-auto shadow-sm">
              Download Resume
              <Download size={16} />
            </button>
          </motion.div>

        </div>

        {/* Bottom Features Grid - Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center justify-center items-stretch w-full mt-8">
          {features.map((item) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={item.title}
              className="w-full border border-zinc-200/60 bg-white p-6 flex flex-col items-center text-center transition-colors duration-300 hover:border-zinc-400 rounded-none h-full shadow-sm"
            >
              {/* Refined Minimal Icon Wrapper */}
              <div className="h-12 w-12 bg-zinc-100 flex items-center justify-center shrink-0 rounded-none mb-6">
                {item.icon}
              </div>

              <h3 className="text-base font-serif font-medium text-zinc-900 tracking-wide">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-500 text-sm leading-6 text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;