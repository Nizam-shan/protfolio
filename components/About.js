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

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, accessible UIs with React, Next.js, Angular and modern CSS frameworks",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Creating robust APIs and microservices with Spring Boot, Node.js, and cloud platforms",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for performance",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description:
        "Implementing security best practices and comprehensive testing strategies",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "DevOps & Deployment",
      description:
        "CI/CD pipelines, containerization, and cloud infrastructure management",
      color: "from-indigo-500 to-blue-500",
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">About Me</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Passionate about </span>
              <span className="gradient-text">Innovation</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm a results-driven software engineer with a passion for building
              exceptional digital experiences. With expertise in both frontend
              and backend technologies, I create seamless, scalable solutions.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Who I Am
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    I'm Nizam Shan, a Senior Software Engineer with over 3 years
                    of experience in full-stack development. I specialize in
                    building modern web applications that solve real-world
                    problems while maintaining high code quality and performance
                    standards.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary-400" />
                      <span className="text-slate-300">
                        Results-driven approach to development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary-400" />
                      <span className="text-slate-300">
                        Fast learner and problem solver
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary-400" />
                      <span className="text-slate-300">
                        Clean, maintainable code advocate
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    What I Do
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
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
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
