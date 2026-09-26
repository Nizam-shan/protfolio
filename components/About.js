import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Sparkles,
  Zap,
  Globe,
  MapPin,
  CheckCircle2,
  TrendingDown,
  Cpu,
} from "lucide-react";
import { useExperience } from "../hooks/useExperience";

const About = () => {
  const exp = useExperience();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Overview & Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Engineered for Resilience & Speed
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-normal">
            A high-density overview of my engineering journey, architectural principles, and metrics.
          </p>
        </div>

        {/* 2026 Asymmetrical Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Main Story Bento (8 cols) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  01 // Background
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 font-semibold">
                  Career Started 06/02/2023
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Senior Full-Stack Engineer solving real-world scale challenges.
              </h3>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-body">
                I officially began my software development career on{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">February 6, 2023</strong>. Over the past{" "}
                <strong className="text-indigo-600 dark:text-sky-400 font-semibold">{exp.detailedFull} ({exp.yearsPlusLower})</strong>,
                I have evolved from crafting responsive user interfaces into architecting mission-critical, enterprise-grade backends and web applications.
              </p>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed text-body">
                At <span className="text-zinc-900 dark:text-white font-medium">Arnest Solutions</span> in Bangalore, I lead full-stack feature initiatives, build telemetry and analytics dashboards with Plotly, optimize database queries, and integrate cutting-edge AI pipelines like AWS Bedrock and Agentic workflows.
              </p>
            </div>

            {/* Micro Tags */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
              {["Clean Architecture", "Microservices", "Sub-100ms Latency", "Event-Driven APIs", "Next.js 14", "Spring Ecosystem"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Location & Availability Card (4 cols) */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  02 // Location & Reach
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white mb-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Bangalore, Karnataka, India</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-normal leading-relaxed">
                Silicon Valley of India • Open to remote, hybrid, and on-site engineering roles worldwide.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-500 dark:text-zinc-400">Collaboration</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Global Remote</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-zinc-500 dark:text-zinc-400">Work Model</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Full-Time / Contract</span>
              </div>
            </div>
          </div>

          {/* Metric Bento 1 (4 cols) */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                Metric // Latency
              </span>
              <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <TrendingDown className="w-4 h-4" />
              </div>
            </div>
            <div className="my-3">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white">
                -40%
              </div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                API Response Time Reduction
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-3 text-body font-normal">
              Achieved by restructuring MongoDB indexes and implementing distributed Redis caching layers.
            </p>
          </div>

          {/* Metric Bento 2 (4 cols) */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                Metric // Reliability
              </span>
              <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="my-3">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white">
                99.9%
              </div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                Production Application Uptime
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-3 text-body font-normal">
              Maintained across 3 major enterprise client applications with proactive monitoring via Grafana.
            </p>
          </div>

          {/* Metric Bento 3 (4 cols) */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                Metric // Deliverables
              </span>
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <div className="my-3">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white">
                20+
              </div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                Production Modules & Features
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-3 text-body font-normal">
              Shipped across fintech, e-commerce, telemetry dashboards, and intelligent AI tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
