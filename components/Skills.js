import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Stack" },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Database },
    { id: "data", label: "Data & Storage", icon: Layers },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "ai", label: "AI & Analytics", icon: Cpu },
  ];

  const skillMatrix = [
    // Frontend
    { name: "React 18", category: "frontend", status: "Primary", note: "Hooks, Fiber, Suspense" },
    { name: "Next.js 14", category: "frontend", status: "Primary", note: "App/Pages Router, SSR/SSG" },
    { name: "TypeScript", category: "frontend", status: "Primary", note: "Strict typing, Generics" },
    { name: "Tailwind CSS", category: "frontend", status: "Primary", note: "Design systems, Responsive" },
    { name: "JavaScript (ES6+)", category: "frontend", status: "Expert", note: "Async/Await, DOM, Event loop" },
    { name: "Angular", category: "frontend", status: "Production", note: "Components, Services, RxJS" },
    { name: "Redux Toolkit / Zustand", category: "frontend", status: "Production", note: "Global state management" },
    { name: "HTML5 / Semantic Web", category: "frontend", status: "Expert", note: "Accessibility & Core Web Vitals" },

    // Backend
    { name: "Spring Boot", category: "backend", status: "Primary", note: "Microservices, Security, JPA" },
    { name: "Java", category: "backend", status: "Primary", note: "OOP, Multithreading, Streams" },
    { name: "Node.js", category: "backend", status: "Production", note: "Event-driven runtime" },
    { name: "Express.js", category: "backend", status: "Production", note: "RESTful API routing" },
    { name: "RESTful Microservices", category: "backend", status: "Primary", note: "API design & documentation" },
    { name: "Spring Cloud Gateway", category: "backend", status: "Production", note: "Routing & Rate-limiting" },

    // Data & Storage
    { name: "MongoDB", category: "data", status: "Primary", note: "Aggregation pipeline, Indexing" },
    { name: "PostgreSQL", category: "data", status: "Production", note: "Relational queries, Triggers" },
    { name: "Redis", category: "data", status: "Production", note: "Distributed cache, In-memory" },
    { name: "InfluxDB", category: "data", status: "Production", note: "Time-series telemetry storage" },
    { name: "MySQL", category: "data", status: "Production", note: "Schema design & normalization" },

    // Cloud & DevOps
    { name: "AWS (S3, EC2, Lambda)", category: "cloud", status: "Production", note: "Serverless & compute" },
    { name: "Docker", category: "cloud", level: "Production", status: "Production", note: "Containerization & images" },
    { name: "CI/CD (GitHub Actions)", category: "cloud", status: "Production", note: "Automated pipelines" },
    { name: "Kubernetes Basics", category: "cloud", status: "Familiar", note: "Pods & deployments" },
    { name: "Vercel Deployment", category: "cloud", status: "Production", note: "Edge hosting & domains" },

    // AI & Analytics
    { name: "Plotly.js", category: "ai", status: "Primary", note: "Interactive dynamic charts" },
    { name: "Grafana", category: "ai", status: "Production", note: "Metrics dashboarding & alerts" },
    { name: "AWS Bedrock", category: "ai", status: "Production", note: "Generative AI foundational models" },
    { name: "Agentic AI Workflows", category: "ai", status: "Production", note: "Multi-agent autonomous systems" },
    { name: "RAG & Vector DBs", category: "ai", status: "Production", note: "Embeddings & retrieval" },
    { name: "Postman", category: "ai", status: "Expert", note: "API testing & mock servers" },
  ];

  const filteredSkills = skillMatrix.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium mb-3">
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Engineering Matrix
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-lg">
              Production-hardened languages, frameworks, and database architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  activeTab === cat.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Bento Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bento-card p-4 flex items-center justify-between group hover:-translate-y-0.5 transition-all bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h4>
                  {skill.status === "Primary" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  )}
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  {skill.note}
                </p>
              </div>

              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-medium ${
                  skill.status === "Primary"
                    ? "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 font-semibold"
                    : "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
                }`}
              >
                {skill.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
