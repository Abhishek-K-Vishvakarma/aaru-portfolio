import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaFigma } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery App",
    category: "Mobile App UI",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
    description: "Modern food ordering application with intuitive user flow and beautiful interface.",
  },
  {
    title: "Finance Dashboard",
    category: "Web Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    description: "Analytics dashboard focused on data visualization and business performance.",
  },
  {
    title: "E-Commerce Website",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description: "Premium online shopping experience with modern product browsing.",
  },
  {
    title: "Travel Booking",
    category: "UI Case Study",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    description: "Travel booking platform designed for seamless user experience.",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#070B1A] min-h-screen pb-24 flex flex-col items-center relative z-10">

      {/* FIXED: This invisible block pushes EVERYTHING down below your navbar */}
      <div className="h-28 sm:h-36 md:h-44 w-full clear-both" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 w-full"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 text-xs md:text-sm font-semibold block mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mt-3">
            Featured
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            A collection of UI/UX projects focused on usability, accessibility, and delightful user experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative border border-white/5 bg-[#0d1527] shadow-2xl flex flex-col w-full overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] w-full bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover duration-700 ease-out group-hover:scale-105 group-hover:opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 text-cyan-400 text-[10px] tracking-[3px] uppercase font-bold border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center text-center flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 md:mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-center w-full">
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 md:px-8 py-2.5 md:py-3 text-white text-sm font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 duration-200 shadow-lg shadow-purple-900/20 border border-purple-400/30 transition-all hover:shadow-purple-500/40">
                    Live Preview
                    <ExternalLink size={16} />
                  </button>

                  <button className="border border-white/10 bg-white/5 px-6 md:px-8 py-2.5 md:py-3 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/10 active:scale-95 duration-200 transition-all hover:border-white/30">
                    Figma
                    <FaFigma size={16} />
                  </button>
                </div>
              </div>

              {/* Corner Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-out">
                <div className="h-9 w-9 md:h-10 md:w-10 bg-cyan-400 flex items-center justify-center text-black shadow-lg">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <button className="border border-white/15 bg-white/5 px-10 md:px-12 py-4 text-white font-semibold text-sm tracking-wide backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;