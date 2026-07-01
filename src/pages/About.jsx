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
      icon: <Palette size={28} />,
      title: "Visual Design",
      desc: "Modern interfaces with strong visual hierarchy, typography and color systems.",
    },
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Responsive Design",
      desc: "Pixel-perfect layouts optimized for desktop, tablet and mobile devices.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Problem Solving",
      desc: "Transforming complex business requirements into simple user experiences.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Design Systems",
      desc: "Building scalable components that keep products visually consistent.",
    },
  ];

  return (
    // Fixed overlap issue from image_1a8014.png by applying explicit top padding safety clearance (pt-56 sm:pt-64 md:pt-72)
    <section className="bg-[#070B1A] text-white pt-56 sm:pt-64 md:pt-72 pb-24 flex items-center justify-center min-h-screen">
      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 flex flex-col items-center justify-center gap-16">

        {/* Heading Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center justify-center w-full"
        >
          <span className="text-cyan-400 uppercase tracking-[6px] text-xs sm:text-sm font-medium">
            About Me
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-balance text-center">
            Creating
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Meaningful
            </span>
            <br className="hidden sm:block" />
            {" "}Digital Experiences
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-balance text-center">
            I believe great design is not only beautiful — it should also
            solve problems, improve usability, and create memorable
            experiences for users.
          </p>
        </motion.div>

        {/* Main Split Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-stretch justify-items-center justify-center w-full">

          {/* Left Side: Image and UI/UX Box */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-6 w-full max-w-[440px]"
          >
            {/* Image Container - Sharp Rectangle */}
            <div className="relative w-full aspect-[4/3] sm:h-[360px] border border-white/10 rounded-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=20"
                alt="Designer at work"
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            {/* UI/UX Box - Clean Stacked Rectangle */}
            <div className="w-full border border-white/10 bg-[#111827] px-6 py-6 text-center flex flex-col items-center justify-center rounded-none flex-grow">
              <h3 className="text-2xl font-bold text-cyan-400 uppercase tracking-wider">
                UI / UX
              </h3>
              <p className="text-gray-400 mt-3 text-sm sm:text-base leading-6 text-center">
                Focused on clean, accessible and user-centered digital products.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Text Content Box */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[440px] lg:max-w-none border border-white/10 bg-[#111827] p-8 flex flex-col items-center justify-center text-center rounded-none"
          >
            <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-balance text-center">
              Designing products that people
              <span className="text-purple-400"> love to use.</span>
            </h3>

            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-7 text-center">
              My design approach starts with understanding user behavior
              and business goals. Every interface is crafted with
              simplicity, consistency and usability in mind.
            </p>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7 text-center">
              From wireframes to high-fidelity prototypes, I enjoy turning
              ideas into engaging digital experiences that look beautiful
              and work flawlessly.
            </p>

            <button className="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3.5 text-sm sm:text-base font-semibold transition-transform duration-300 hover:scale-105 rounded-none w-full sm:w-auto">
              Download Resume
              <Download size={18} />
            </button>
          </motion.div>

        </div>

        {/* Bottom Features Grid - Uniform layout tracking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center justify-center items-stretch w-full mt-8">
          {features.map((item) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={item.title}
              className="w-full border border-white/10 bg-[#111827] p-6 flex flex-col items-center text-center transition-colors duration-300 hover:border-white/20 rounded-none h-full"
            >
              {/* Sharp Icon Wrapper */}
              <div className="h-14 w-14 bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shrink-0 rounded-none">
                {item.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-center tracking-wide">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-6 text-center">
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