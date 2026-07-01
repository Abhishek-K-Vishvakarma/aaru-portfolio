import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const contactInfo = [
  {
    id: "01",
    icon: Mail,
    label: "Email",
    value: "hello@aaruui.com",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "02",
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "03",
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const socials = [
  { icon: FaLinkedinIn, link: "#", color: "hover:bg-[#0A66C2]", label: "LinkedIn" },
  { icon: FaGithub, link: "#", color: "hover:bg-[#333]", label: "GitHub" },
  { icon: FaTwitter, link: "#", color: "hover:bg-[#1DA1F2]", label: "Twitter" },
  { icon: FaInstagram, link: "#", color: "hover:bg-[#E4405F]", label: "Instagram" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#070B1A] via-[#0B1120] to-[#1E1B4B] flex flex-col justify-start md:justify-center items-center pt-28 pb-16 sm:pt-32 md:py-24 relative overflow-hidden"
    >
      {/* Animated Background Global Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 flex flex-col justify-center items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-5 py-2 border border-purple-500/20 mb-5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-xs font-semibold tracking-[3px] uppercase">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Looking for a creative UI/UX Designer? Let's discuss your next
            project and turn your ideas into beautiful digital experiences.
          </motion.p>
        </motion.div>

        {/* Main Layout Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 w-full items-stretch bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/40">

          {/* Left Side (Contact Cards & Socials Panel) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6 w-full justify-between"
          >
            {/* Contact Cards Container */}
            <div className="flex flex-col gap-5 flex-1">
              {contactInfo.map(({ id, icon: Icon, label, value, gradient }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="group relative bg-white/[0.02] border border-white/10 p-7 flex items-center gap-5 hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer overflow-hidden flex-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${ gradient } opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <span className="text-gray-600 font-mono font-bold text-sm min-w-[24px] group-hover:text-purple-400 transition-colors">
                    {id}
                  </span>

                  <div className={`h-12 w-12 bg-gradient-to-br ${ gradient } flex items-center justify-center shrink-0 shadow-lg`}>
                    <Icon className="text-white" size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-purple-300 transition-colors">
                      {label}
                    </h3>
                    <p className="text-white text-base font-medium mt-0.5 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {value}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Social Connect Container */}
            <div className="bg-white/[0.02] border border-white/10 p-7 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-3">
                <span className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400"></span>
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, link, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group h-12 w-12 border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white ${ color } transition-all duration-300 hover:border-transparent hover:shadow-xl relative`}
                    aria-label={label}
                  >
                    <Icon size={18} />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 px-2 py-0.5 border border-white/10 pointer-events-none whitespace-nowrap z-20">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side (The Form Panel) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 w-full"
          >
            <div className="relative bg-white/[0.02] border border-white/10 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 transition-all duration-300 h-full flex flex-col justify-between">
              {/* Radial Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

              <div className="relative space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-pink-400"></span>
                    Send Message
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Fill out the form below — I usually reply within a day.
                  </p>
                </div>

                <form className="space-y-6 mt-8 flex flex-col" onSubmit={(e) => e.preventDefault()}>

                  {/* Inputs Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-14 bg-slate-950/50 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 outline-none transition-all duration-300 text-base shadow-inner"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        className="w-full h-14 bg-slate-950/50 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 outline-none transition-all duration-300 text-base shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Let's work together"
                      className="w-full h-14 bg-slate-950/50 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 outline-none transition-all duration-300 text-base shadow-inner"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Write your message..."
                      className="w-full bg-slate-950/50 border border-white/10 p-5 text-white placeholder:text-gray-600 resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 outline-none transition-all duration-300 text-base min-h-[160px] shadow-inner"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group relative w-full h-14 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 py-4 text-base font-semibold text-white flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                      <span className="relative flex items-center gap-3">
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-4">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>I'll respond within 24 hours</span>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;