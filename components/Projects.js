import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  FolderGit2,
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Microservices & Telemetry" },
    { id: "ai", label: "AI & Emerging" },
  ];

  const projects = [
    {
      id: "merchant-ops",
      title: "Merchant Operations & Settlement Portal (Web3)",
      category: "fullstack",
      scope: "Enterprise SaaS • 2024",
      description:
        "High-performance operations portal enabling enterprise merchants to oversee real-time transactions, manage multi-tier staff permissions, and process cryptographic settlement batches.",
      metrics: ["Real-time transaction streams", "Role-Based Access Control", "Exportable audit ledgers"],
      stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Web3 / Ethers.js"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
    {
      id: "fintech-core",
      title: "Fintech E-Commerce & Checkout Engine",
      category: "fullstack",
      scope: "Fintech Platform • 2023 - 2024",
      description:
        "End-to-end payment processing web architecture supporting dynamic card checkouts, webhook settlement handling, real-time inventory locking, and admin analytics.",
      metrics: ["Sub-100ms catalog caching", "PCI-compliant checkout pipeline", "Zero-failure webhook queues"],
      stack: ["React", "Spring Boot", "MongoDB", "Redis", "Stripe API", "AWS"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
    {
      id: "telemetry-viz",
      title: "Real-Time Telemetry & Data Visualizer",
      category: "backend",
      scope: "Data Platform • 2025",
      description:
        "Industrial telemetry platform combining custom high-frequency Plotly.js chart modules, InfluxDB time-series streaming, and automated anomaly alert thresholds.",
      metrics: ["High-frequency time-series plots", "Automated anomaly alerts", "Configurable widget export"],
      stack: ["Python", "Plotly.js", "InfluxDB", "Grafana", "Docker", "REST APIs"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
    {
      id: "api-gateway",
      title: "Distributed Microservices API Gateway",
      category: "backend",
      scope: "System Architecture • 2024",
      description:
        "Resilient API gateway utilizing Spring Cloud Gateway for centralized token authentication, route discovery, Redis token-bucket rate limiting, and circuit breaking.",
      metrics: ["Token-bucket rate limiting", "Fault-tolerant circuit breakers", "Distributed trace logs"],
      stack: ["Spring Cloud", "Java", "Redis", "Docker", "Prometheus", "JWT"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
    {
      id: "rag-ai",
      title: "RAG Intelligent Document Assistant",
      category: "ai",
      scope: "AI Engineering • 2025",
      description:
        "Context-aware enterprise retrieval assistant implementing vector embeddings, LangChain pipeline chunking, and generative AI models for instant internal knowledge search.",
      metrics: ["Sub-second hybrid search", "Vector database embeddings", "Streaming markdown responses"],
      stack: ["Python", "FastAPI", "VectorDB", "LangChain", "AWS Bedrock", "Redis"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
    {
      id: "realestate-native",
      title: "Real Estate Property Exploration App",
      category: "fullstack",
      scope: "Mobile & Web • 2024",
      description:
        "Mobile property discovery app featuring interactive map clusters, saved portfolio bookmarks, offline state synchronization, and instant direct inquiry routing.",
      metrics: ["Interactive geolocation markers", "Offline bookmark sync", "Smooth native gestures"],
      stack: ["React Native", "Expo", "Redux Toolkit", "Firebase", "Google Maps SDK"],
      github: "https://github.com/Nizam-shan",
      live: "https://github.com/Nizam-shan",
    },
  ];

  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Categorical Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-lg font-normal">
              Production systems, architecture designs, and real-world software products.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  filter === cat.id
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2026 Work-First Bento Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bento-card p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 bg-zinc-50/80 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {item.scope}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      aria-label="View Project"
                      title="View Project Link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5 text-body font-normal">
                  {item.description}
                </p>

                {/* Key Deliverable Metrics */}
                <div className="space-y-1.5 mb-6">
                  {item.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
