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
    <section className="bg-[#F9F9F8] text-zinc-900 min-h-screen pb-24 flex flex-col items-center relative z-10 font-sans">

      {/* Invisible block ensuring content clears your navbar safely */}
      <div className="h-28 sm:h-36 md:h-44 w-full clear-both" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 w-full"
        >
          <span className="uppercase tracking-[4px] text-zinc-500 text-xs font-semibold block mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-zinc-900 tracking-tight mt-3">
            Featured
            <span className="italic text-zinc-600 font-serif"> Projects</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            A collection of UI/UX projects focused on usability, accessibility, and delightful user experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative border border-zinc-200/80 bg-white shadow-sm flex flex-col w-full overflow-hidden rounded-none"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] w-full bg-zinc-100 border-b border-zinc-200/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover duration-700 ease-out grayscale-[15%] contrast-[95%] group-hover:scale-102"
                  loading="lazy"
                />

                {/* Subtle, soft image overlay overlay instead of deep dark gradient */}
                <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 duration-300" />

                {/* Refined Minimal Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-zinc-800 text-[10px] tracking-[2px] uppercase font-semibold border border-zinc-200/60 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center text-center flex-grow bg-white">
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-zinc-900 tracking-tight group-hover:text-zinc-600 duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 md:mt-4 text-zinc-500 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-center w-full">

                  {/* Premium Solid Button */}
                  <button className="bg-zinc-900 hover:bg-zinc-800 px-6 md:px-8 py-2.5 md:py-3 text-white text-sm font-medium flex items-center gap-2 duration-200 shadow-sm rounded-none transition-all">
                    Live Preview
                    <ExternalLink size={14} />
                  </button>

                  {/* Clean Outline Button */}
                  <button className="border border-zinc-300 bg-transparent px-6 md:px-8 py-2.5 md:py-3 text-zinc-700 text-sm font-medium flex items-center gap-2 hover:bg-zinc-50 hover:border-zinc-400 duration-200 transition-all rounded-none">
                    Figma
                    <FaFigma size={14} className="text-zinc-600" />
                  </button>
                </div>
              </div>

              {/* Sharp Elegant Corner Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-out">
                <div className="h-9 w-9 bg-zinc-900 flex items-center justify-center text-white shadow-sm">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call-to-Action View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <button className="border border-zinc-900 bg-transparent text-zinc-900 px-10 md:px-12 py-4 font-medium text-sm tracking-wide hover:bg-zinc-900 hover:text-white transition-all duration-300 flex items-center gap-3 rounded-none">
            View All Projects
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;