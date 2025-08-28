import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-950"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary-400/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Nizam Shan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Software Engineer crafting exceptional digital
            experiences with
            <span className="text-primary-400 font-semibold"> React</span>,
            <span className="text-primary-400 font-semibold"> Next.js</span>,
            and
            <span className="text-primary-400 font-semibold"> Spring Boot</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            I build scalable web applications, secure payment systems, and
            data-rich dashboards. Passionate about clean code, performance, and
            user experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-500/30 rounded-xl font-semibold text-primary-400 hover:bg-primary-500/10 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1J-_1YQ-Lh9Fc9fOSCyughPADY4rFM6i_/view?usp=drive_link"
                  target="_blank"
                >
                  View Resume
                </a>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6 mb-8"
          >
            <motion.a
              href="https://github.com/Nizam-shan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-primary-500/20 transition-all duration-300 group"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-primary-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nizamshan27/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-primary-500/20 transition-all duration-300 group"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-primary-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="mailto:nizamshan27@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-primary-500/20 transition-all duration-300 group"
              aria-label="Send email"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-primary-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
