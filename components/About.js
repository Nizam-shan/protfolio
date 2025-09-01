import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User,
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Zap,
  Target,
  Award,
  Briefcase,
  Cpu,
  Brain,
} from "lucide-react";

const About = () => {
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

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, accessible UIs with React, Next.js, Angular and modern CSS frameworks",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Creating robust APIs and microservices with Spring Boot, Node.js, and cloud platforms",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for performance",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description:
        "Implementing security best practices and comprehensive testing strategies",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "DevOps & Deployment",
      description:
        "CI/CD pipelines, containerization, and cloud infrastructure management",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, scalability, and user experience",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* AI-Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 ai-particles"></div>
      <div className="absolute inset-0 ai-grid opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* AI-Inspired Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-elevated border border-cyan-500/30 mb-8 glow"
              whileHover={{ scale: 1.02 }}
            >
              <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">
                About Me
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-heading">
              <span className="text-white">Passionate about </span>
              <span className="gradient-text">Innovation</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed text-body">
              I'm a results-driven software engineer with a passion for building
              exceptional digital experiences. With expertise in both frontend
              and backend technologies, I create seamless, scalable solutions.
            </p>
          </motion.div>

          {/* AI-Inspired Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div className="card p-8 glow">
                  <h3 className="text-2xl font-semibold text-white mb-6 text-heading">
                    Who I Am
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8 text-body">
                    I'm Nizam Shan, a Senior Software Engineer with over 3 years
                    of experience in full-stack development. I specialize in
                    building modern web applications that solve real-world
                    problems while maintaining high code quality and performance
                    standards.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center glow">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-300 text-body">
                        Results-driven approach to development
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-300 text-body">
                        Fast learner and problem solver
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center glow">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-300 text-body">
                        Clean, maintainable code advocate
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card p-8 glow">
                  <h3 className="text-2xl font-semibold text-white mb-6 text-heading">
                    What I Do
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-body">
                    I build scalable web applications, secure payment systems,
                    and data-rich dashboards. My expertise spans the entire
                    development stack, from responsive UIs to robust backend
                    APIs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="card p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer glow"
                    whileHover={{ scale: 1.02, y: -4 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3 text-subheading">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed text-body">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI-Inspired Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "2+", label: "Years Experience", icon: Briefcase },
              { number: "20+", label: "Projects Completed", icon: Code },
              { number: "100%", label: "Client Satisfaction", icon: Award },
              { number: "24/7", label: "Support Available", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center card p-8 glow"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 glow">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
