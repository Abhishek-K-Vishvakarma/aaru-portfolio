import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from "lucide-react";
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
  },
  {
    id: "02",
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    id: "03",
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh",
  },
];

// FIXED: Added dynamic brand hover classes for backgrounds, text, and borders
const socials = [
  {
    icon: FaLinkedinIn,
    link: "#",
    color: "hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white",
    label: "LinkedIn"
  },
  {
    icon: FaGithub,
    link: "#",
    color: "hover:bg-[#24292e] hover:border-[#24292e] hover:text-white",
    label: "GitHub"
  },
  {
    icon: FaTwitter,
    link: "#",
    color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white",
    label: "Twitter"
  },
  {
    icon: FaInstagram,
    link: "#",
    color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white",
    label: "Instagram"
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F9F9F8] text-zinc-900 flex flex-col justify-start md:justify-center items-center pt-28 pb-24 sm:pt-32 relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 w-full relative z-10 flex flex-col justify-center items-center">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 max-w-3xl w-full"
        >
          <span className="text-zinc-500 uppercase tracking-[4px] text-xs font-semibold block mb-3">
            Get In Touch
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight leading-[1.15] text-zinc-900">
            Let's Build{" "}
            <span className="italic text-zinc-600 font-serif">
              Something Amazing
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-500 text-base md:text-lg leading-relaxed">
            Looking for a creative UI/UX Designer? Let's discuss your next
            project and turn your ideas into beautiful digital experiences.
          </p>
        </motion.div>

        {/* Main Layout Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 w-full items-stretch border border-zinc-200/80 bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm rounded-none">

          {/* Left Side (Contact Cards & Socials Panel) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6 w-full justify-between"
          >
            {/* Contact Cards Container */}
            <div className="flex flex-col gap-5 flex-1">
              {contactInfo.map(({ id, icon: Icon, label, value }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="group relative bg-[#F9F9F8] border border-zinc-200/60 p-6 flex items-center gap-5 hover:border-zinc-400 hover:bg-zinc-50/50 transition-all duration-300 cursor-pointer rounded-none flex-1"
                >
                  <span className="text-zinc-400 font-serif italic text-sm min-w-[24px] group-hover:text-zinc-800 transition-colors">
                    {id}
                  </span>

                  <div className="h-11 w-11 bg-zinc-900 flex items-center justify-center shrink-0 rounded-none shadow-sm text-white">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      {label}
                    </h3>
                    <p className="text-zinc-900 text-base font-medium mt-0.5 truncate">
                      {value}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800 group-hover:translate-x-1 transition-all shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Social Connect Container */}
            <div className="bg-[#F9F9F8] border border-zinc-200/60 p-6 rounded-none">
              <h3 className="text-zinc-800 text-sm font-serif font-medium tracking-wide mb-4 flex items-center gap-2">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, link, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group h-11 w-11 border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 ${ color } transition-all duration-300 rounded-none relative`}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side (The Form Panel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 w-full"
          >
            {/* FIXED: Enhanced padding around the form container (px-8 py-10 to lg:px-12 lg:py-12) */}
            <div className="bg-[#F9F9F8] border border-zinc-200/60 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 rounded-none h-full flex flex-col justify-between">

              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-medium text-zinc-900">
                    Send Message
                  </h3>
                  <p className="text-zinc-500 mt-1 text-sm">
                    Fill out the form below — I usually reply within a day.
                  </p>
                </div>

                {/* FIXED: Added internal form padding (p-2 sm:p-4) & clean gap structure */}
                <form className="space-y-6 mt-8 p-1 sm:p-4 bg-white/50 border border-zinc-200/40 rounded-none flex flex-col" onSubmit={(e) => e.preventDefault()}>

                  {/* Inputs Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] text-zinc-500 font-semibold tracking-wider uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-12 bg-white border border-zinc-200 px-4 text-zinc-900 placeholder:text-zinc-300 focus:border-zinc-400 focus:ring-0 outline-none transition-all duration-200 text-sm rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] text-zinc-500 font-semibold tracking-wider uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        className="w-full h-12 bg-white border border-zinc-200 px-4 text-zinc-900 placeholder:text-zinc-300 focus:border-zinc-400 focus:ring-0 outline-none transition-all duration-200 text-sm rounded-none"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] text-zinc-500 font-semibold tracking-wider uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Let's work together"
                      className="w-full h-12 bg-white border border-zinc-200 px-4 text-zinc-900 placeholder:text-zinc-300 focus:border-zinc-400 focus:ring-0 outline-none transition-all duration-200 text-sm rounded-none"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] text-zinc-500 font-semibold tracking-wider uppercase">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full bg-white border border-zinc-200 p-4 text-zinc-900 placeholder:text-zinc-300 resize-none focus:border-zinc-400 focus:ring-0 outline-none transition-all duration-200 text-sm min-h-[140px] rounded-none"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full h-12 bg-zinc-900 hover:bg-zinc-800 text-sm font-medium text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-200 rounded-none"
                    >
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-zinc-500" />
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