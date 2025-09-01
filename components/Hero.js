import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Award,
  Cpu,
  Zap,
} from "lucide-react";
import Image from "next/image";

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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* AI-Inspired Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 ai-particles"></div>
      <div className="absolute inset-0 ai-grid opacity-30"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* AI-Inspired Floating Elements */}
      <motion.div
        className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-48 right-24 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute bottom-48 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      />

      {/* AI-Inspired Pulse Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-500/20 rounded-full"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-500/20 rounded-full"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* AI-Inspired Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-elevated border border-cyan-500/30 mb-12 glow"
          >
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">
              AI-Powered Developer
            </span>
          </motion.div>

          {/* AI-Inspired Avatar */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl glass-elevated glow">
              <Image
                src="/avatar/avatar3.jpeg"
                alt="Nizam Shan - AI-Powered Developer"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              {/* AI Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* AI-Inspired Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 text-heading"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Nizam Shan</span>
          </motion.h1>

          {/* AI-Inspired Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed text-subheading"
          >
            Full-Stack Software Engineer with 2+ years crafting exceptional
            digital experiences with
            <span className="text-cyan-400 font-semibold"> React</span>,
            <span className="text-cyan-400 font-semibold"> Next.js</span>, and
            <span className="text-cyan-400 font-semibold"> Spring Boot</span>
          </motion.p>

          {/* AI-Inspired Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto text-body"
          >
            I architect and build enterprise-grade web applications, secure
            payment systems, and data-rich dashboards. Passionate about clean
            code, performance, and user experience with proven track record of
            delivering scalable solutions.
          </motion.p>

          {/* AI-Inspired CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-10 py-4 text-lg font-semibold group glow"
            >
              <span className="flex items-center gap-3">
                Get In Touch
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary px-10 py-4 text-lg font-semibold group"
            >
              <span className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1J-_1YQ-Lh9Fc9fOSCyughPADY4rFM6i_/view?usp=drive_link"
                  target="_blank"
                  className="text-cyan-400"
                >
                  View Resume
                </a>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* AI-Inspired Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-8 mb-12"
          >
            <motion.a
              href="https://github.com/Nizam-shan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full glass-elevated hover:bg-cyan-500/10 transition-all duration-300 group glow"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nizamshan27/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full glass-elevated hover:bg-cyan-500/10 transition-all duration-300 group glow"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="mailto:nizamshan27@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full glass-elevated hover:bg-cyan-500/10 transition-all duration-300 group glow"
              aria-label="Send email"
            >
              <Mail className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* AI-Inspired Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-cyan-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
