import { motion } from "framer-motion";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
// Path check karlein: assets ke root mein aaru.pdf hai
import resumePdf from "../assets/aaru.pdf";

const Resume = () => {
  // Framer Motion Variants for clean staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-[#fafafa] text-slate-800 font-body px-6 sm:px-8 lg:px-16 py-12 flex flex-col items-center"
    >
      {/* Top Navigation Row */}
      <motion.div variants={itemVariants} className="w-full max-w-5xl flex items-center justify-between mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-2xl font-serif tracking-wide text-slate-900 font-light uppercase hidden sm:block">
          My Resume
        </h1>

        <a
          href={resumePdf}
          download="Aaru_Resume.pdf"
          className="inline-flex items-center gap-2 bg-slate-900 px-5 py-2.5 text-white font-semibold text-sm tracking-wide hover:bg-slate-800 transition-all duration-300 shadow-md rounded-lg"
        >
          <span>Download PDF</span>
          <Download size={16} />
        </a>
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-5xl bg-white border border-slate-200 shadow-xl shadow-slate-100 rounded-2xl overflow-hidden flex flex-col items-center p-4 sm:p-6"
      >
        {/* PDF Frame Viewer */}
        <div className="relative w-full h-[75vh] md:h-[85vh] bg-slate-100 rounded-xl overflow-hidden border border-slate-200/60">
          <iframe
            src={`${ resumePdf }#toolbar=0&navpanes=0`}
            title="Aaru Resume"
            className="w-full h-full border-none"
          />
        </div>

        {/* Mobile/Fallback Helper text */}
        <div className="mt-4 text-center sm:hidden">
          <p className="text-xs text-slate-400 mb-2">
            PDF preview not loading properly on your device?
          </p>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:underline"
          >
            Open in new tab <ExternalLink size={12} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;