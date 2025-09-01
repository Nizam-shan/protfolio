import { useState } from "react";
import { motion } from "framer-motion";
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
  Cpu,
  Zap,
  Smartphone,
  Cloud,
  TestTube,
  Sparkles,
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
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const filters = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Server },
    { id: "fullstack", label: "Full Stack", icon: Globe },
    { id: "web3", label: "Web3", icon: Zap },
    { id: "ml", label: "AI/ML", icon: Cpu },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "testing", label: "Testing", icon: TestTube },
  ];

  const projects = [
    {
      id: 1,
      title: "Merchant Ops Dashboard (Web3)",
      description:
        "A comprehensive Next.js dashboard for merchants to manage profiles, campaigns, settlements, staff, and transactions with real-time data visualization.",
      image: "/api/placeholder/400/300",
      category: "frontend",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Web3",
        "Ethereum",
      ],
      features: [
        "Real-time analytics",
        "Campaign management",
        "Staff management",
      ],
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.com",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Fintech E-commerce Platform",
      description:
        "A full-stack e-commerce solution with secure payment processing, user management, and comprehensive admin panel built with React and Spring Boot.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: [
        "React",
        "Spring Boot",
        "MongoDB",
        "Redis",
        "Stripe",
        "AWS",
      ],
      features: [
        "Secure payments",
        "User authentication",
        "Product management",
      ],
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.com",
      color: "from-cyan-500 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description:
        "Real-time data visualization platform using Plotly, InfluxDB, and Grafana for monitoring system performance and user analytics.",
      image: "/api/placeholder/400/300",
      category: "backend",
      technologies: [
        "Python",
        "Plotly",
        "InfluxDB",
        "Grafana",
        "Docker",
        "Kubernetes",
      ],
      features: ["Real-time monitoring", "Custom dashboards", "Data export"],
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3.com",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Microservices API Gateway",
      description:
        "High-performance API gateway built with Spring Cloud Gateway for routing, authentication, and rate limiting across microservices.",
      image: "/api/placeholder/400/300",
      category: "backend",
      technologies: [
        "Spring Cloud",
        "Java",
        "Redis",
        "Kubernetes",
        "Docker",
        "Prometheus",
      ],
      features: ["Service discovery", "Load balancing", "Rate limiting"],
      githubUrl: "https://github.com/username/project4",
      liveUrl: "https://project4.com",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Automation Testing with Selenium",
      description:
        "A robust test automation framework using Selenium for web applications to ensure quality, reliability, and regression testing.",
      image: "/api/placeholder/400/300",
      category: "testing",
      technologies: [
        "Java",
        "Selenium WebDriver",
        "TestNG",
        "Maven",
        "Jenkins",
        "Allure",
      ],
      features: [
        "Cross-browser testing",
        "Regression test suite",
        "CI/CD integration",
      ],
      githubUrl: "https://github.com/username/project5",
      liveUrl: "https://project5.com",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "AI Model with RAG & Vector DB",
      description:
        "An AI-powered project implementing Retrieval-Augmented Generation (RAG) with vector databases for intelligent question answering.",
      image: "/api/placeholder/400/300",
      category: "ml",
      technologies: [
        "Python",
        "LangChain",
        "VectorDB",
        "Transformers",
        "FastAPI",
        "Redis",
      ],
      features: [
        "Context-aware Q&A",
        "Vector search",
        "Knowledge base integration",
      ],
      githubUrl: "https://github.com/username/project6",
      liveUrl: "https://project6.com",
      color: "from-indigo-500 to-purple-500",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      title: "Voice Agent with DeepSeek",
      description:
        "A voice-driven intelligent agent powered by DeepSeek models, enabling real-time speech recognition and conversational AI.",
      image: "/api/placeholder/400/300",
      category: "ml",
      technologies: [
        "Python",
        "DeepSeek",
        "SpeechRecognition",
        "PyTorch",
        "WebRTC",
        "FastAPI",
      ],
      features: [
        "Voice commands",
        "Real-time speech-to-text",
        "Conversational responses",
      ],
      githubUrl: "https://github.com/username/project7",
      liveUrl: "https://project7.com",
      color: "from-pink-500 to-rose-500",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      id: 8,
      title: "Real Estate App (React Native)",
      description:
        "A mobile app for browsing, filtering, and managing real estate properties with modern UI/UX and smooth performance.",
      image: "/api/placeholder/400/300",
      category: "mobile",
      technologies: [
        "React Native",
        "Expo",
        "Redux",
        "Firebase",
        "Google Maps",
        "Stripe",
      ],
      features: [
        "Property listing & search",
        "Map integration",
        "User authentication",
      ],
      githubUrl: "https://github.com/username/project8",
      liveUrl: "https://project8.com",
      color: "from-teal-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      id: 9,
      title: "AWS Bedrock with Node.js",
      description:
        "A Node.js integration with AWS Bedrock for deploying and managing generative AI models with cloud scalability.",
      image: "/api/placeholder/400/300",
      category: "cloud",
      technologies: [
        "Node.js",
        "AWS Bedrock",
        "Express",
        "Lambda",
        "DynamoDB",
        "CloudFormation",
      ],
      features: [
        "Generative AI deployment",
        "Serverless functions",
        "Secure API endpoints",
      ],
      githubUrl: "https://github.com/username/project9",
      liveUrl: "https://project9.com",
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const ProjectCard = ({ project, index }) => (
    <div
      className="group relative"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: "fadeInUp 0.4s ease-out forwards",
        opacity: 0,
      }}
    >
      <div className="card overflow-hidden glow">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 ${project.gradient} opacity-20`}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 text-heading group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm mb-4 text-body leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs font-mono border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-xs">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${project.gradient}`}
                ></div>
                <span className="text-slate-400 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 ai-particles"></div>
      <div className="absolute inset-0 ai-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Modern Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-elevated border border-cyan-500/30 mb-8 glow"
              whileHover={{ scale: 1.02 }}
            >
              <Code className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">
                Featured Projects
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-heading">
              <span className="text-white">My Creative </span>
              <span className="gradient-text">Portfolio</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed text-body">
              A showcase of my best work, demonstrating expertise in full-stack
              development, modern technologies, and innovative solutions for
              real-world problems.
            </p>
          </motion.div>

          {/* Modern Filter Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => {
                const projectCount =
                  filter.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === filter.id).length;

                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-3 rounded-full glass-elevated border transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${
                      activeFilter === filter.id
                        ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                        : "border-slate-600/30 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <filter.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {filter.label}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-slate-700/50 text-xs font-mono">
                        {projectCount}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Modern Projects Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="card p-12 glow">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-heading">
                      No projects found
                    </h3>
                    <p className="text-slate-400 mb-6 text-body">
                      No projects match the "{activeFilter}" filter. Try
                      selecting a different category.
                    </p>
                    <button
                      onClick={() => setActiveFilter("all")}
                      className="btn-primary px-6 py-3"
                    >
                      View All Projects
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Modern CTA Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="card p-12 glow">
              <h3 className="text-3xl font-bold text-white mb-6 text-heading">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-slate-300 mb-8 text-body max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge
                technology and innovative solutions.
              </p>
              <motion.button
                className="btn-primary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  Get In Touch
                  <Zap className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
