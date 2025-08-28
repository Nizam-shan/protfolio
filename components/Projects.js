import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Database,
  Server,
  Globe,
  Shield,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "web3", label: "Web3" },
    { id: "ml", label: "AI/ML" },
    { id: "mobile", label: "Mobile" },
    { id: "cloud", label: "Cloud" },
    { id: "testing", label: "Testing" },
  ];

  const projects = [
    {
      id: 1,
      title: "Merchant Ops Dashboard (Web3)",
      description:
        "A comprehensive Next.js dashboard for merchants to manage profiles, campaigns, settlements, staff, and transactions with real-time data visualization.",
      image: "/api/placeholder/600/400",
      category: "web3",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MUI",
        "Web3.js",
      ],
      features: [
        "Real-time analytics",
        "Campaign management",
        "Staff management",
        "Transaction tracking",
        "Settlement processing",
      ],
      liveUrl: "",
      githubUrl: "",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Fintech E-commerce Platform",
      description:
        "A full-stack e-commerce solution with secure payment processing, user management, and comprehensive admin panel built with React and Spring Boot.",
      image: "/api/placeholder/600/400",
      category: "fullstack",
      technologies: [
        "React",
        "Spring Boot",
        "MongoDB",
        "Redis",
        "Stripe",
        "Docker",
      ],
      features: [
        "Secure payments",
        "User authentication",
        "Product management",
        "Order tracking",
        "Admin dashboard",
      ],
      liveUrl: "",
      githubUrl: "",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description:
        "Real-time data visualization platform using Plotly, InfluxDB, and Grafana for monitoring system performance and user analytics.",
      image: "/api/placeholder/600/400",
      category: "backend",
      technologies: [
        "Python",
        "Plotly",
        "InfluxDB",
        "Grafana",
        "FastAPI",
        "Docker",
      ],
      features: [
        "Real-time monitoring",
        "Custom dashboards",
        "Data export",
        "Alert system",
        "Performance metrics",
      ],
      liveUrl: "",
      githubUrl: "",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Microservices API Gateway",
      description:
        "High-performance API gateway built with Spring Cloud Gateway for routing, authentication, and rate limiting across microservices.",
      image: "/api/placeholder/600/400",
      category: "backend",
      technologies: [
        "Spring Cloud",
        "Java",
        "Redis",
        "Kubernetes",
        "Prometheus",
        "ELK Stack",
      ],
      features: [
        "Service discovery",
        "Load balancing",
        "Rate limiting",
        "Authentication",
        "Monitoring",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/javaSpringBootRestApi",
      icon: Server,
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Automation Testing with Selenium",
      description:
        "A robust test automation framework using Selenium for web applications to ensure quality, reliability, and regression testing.",
      image: "/api/placeholder/600/400",
      category: "testing",
      technologies: [
        "Java",
        "Selenium WebDriver",
        "TestNG",
        "Maven",
        "Jenkins",
      ],
      features: [
        "Cross-browser testing",
        "Regression test suite",
        "CI/CD integration",
        "Detailed reports",
        "Reusable test scripts",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/Automation_Testing_Selenium",
      icon: Shield,
      color: "from-red-500 to-orange-500",
    },
    {
      id: 7,
      title: "AI Model with RAG & Vector DB",
      description:
        "An AI-powered project implementing Retrieval-Augmented Generation (RAG) with vector databases for intelligent question answering.",
      image: "/api/placeholder/600/400",
      category: "ml",
      technologies: [
        "Python",
        "LangChain",
        "VectorDB",
        "Transformers",
        "FastAPI",
      ],
      features: [
        "Context-aware Q&A",
        "Vector search",
        "Knowledge base integration",
        "Scalable model deployment",
        "API for AI services",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/AI_Model_with_RAG_vectorDB",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "Voice Agent with DeepSeek",
      description:
        "A voice-driven intelligent agent powered by DeepSeek models, enabling real-time speech recognition and conversational AI.",
      image: "/api/placeholder/600/400",
      category: "ml",
      technologies: [
        "Python",
        "DeepSeek",
        "SpeechRecognition",
        "PyTorch",
        "WebSockets",
      ],
      features: [
        "Voice commands",
        "Real-time speech-to-text",
        "Conversational responses",
        "Custom intents",
        "Integration ready",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/VoiceagentDeepseek",
      icon: Globe,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 9,
      title: "Real Estate App (React Native)",
      description:
        "A mobile app for browsing, filtering, and managing real estate properties with modern UI/UX and smooth performance.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: [
        "React Native",
        "Expo",
        "Redux",
        "Firebase",
        "Google Maps API",
      ],
      features: [
        "Property listing & search",
        "Map integration",
        "User authentication",
        "Favorites & saved searches",
        "Cross-platform support",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/reactNativeRealestate",
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 10,
      title: "AWS Bedrock with Node.js",
      description:
        "A Node.js integration with AWS Bedrock for deploying and managing generative AI models with cloud scalability.",
      image: "/api/placeholder/600/400",
      category: "cloud",
      technologies: ["Node.js", "AWS Bedrock", "Express", "Lambda", "Docker"],
      features: [
        "Generative AI deployment",
        "Serverless functions",
        "Secure API endpoints",
        "Cloud-native integration",
        "Scalable infrastructure",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Nizam-shan/Aws_bedrock_nodejs",
      icon: Server,
      color: "from-gray-500 to-slate-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -10, scale: 1.02 }}
      layout
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
        <div
          className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
        >
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`View live ${project.title}`}
          >
            <Eye className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`View source code for ${project.title}`}
          >
            <Github className="w-5 h-5 text-white" />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 border border-slate-700">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              <Code className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">
                Featured Projects
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">My Creative </span>
              <span className="gradient-text">Portfolio</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my best work, demonstrating expertise in full-stack
              development, modern technologies, and innovative solutions for
              real-world problems.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                    : "glass text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interested in working together?
              </h3>
              <p className="text-slate-300 mb-6">
                Let's discuss your project and see how I can help bring your
                ideas to life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
