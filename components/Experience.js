import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useExperience } from "../hooks/useExperience";

const Experience = () => {
  const exp = useExperience();

  const experiences = [
    {
      id: "arnest",
      company: "Arnest Solutions",
      role: "Senior Software Engineer",
      period: "Jan 2025 — Present",
      location: "Bangalore, India",
      type: "Full-Time",
      current: true,
      summary:
        "Leading full-stack engineering modules for enterprise client deployments, architecting reactive dashboards, and mentoring junior engineers.",
      highlights: [
        "Architected core modules for 3 client web apps maintaining 99.9% uptime",
        "Reduced backend API response times by 40% using optimized MongoDB queries and Redis caching",
        "Constructed automated CI/CD deployment pipelines reducing release deployment times by 60%",
        "Integrated AWS Bedrock and Agentic AI workflows into internal productivity tooling",
      ],
      stack: ["React", "Next.js", "Spring Boot", "Java", "MongoDB", "AWS", "Docker", "Grafana", "Plotly.js", "Agentic AI"],
    },
    {
      id: "xpayback",
      company: "Xpayback",
      role: "Full Stack Developer",
      period: "Feb 2023 — Dec 2024",
      location: "Kochi, India",
      type: "Full-Time",
      current: false,
      summary:
        "Engineered production-facing web applications, payment checkout pipelines, and merchant management dashboards.",
      highlights: [
        "Shipped 5+ production web applications from initial architecture to cloud rollout",
        "Boosted web application Core Web Vitals and interactive responsiveness by 35%",
        "Formulated comprehensive automated regression test suites cutting production defects by 50%",
        "Collaborated cross-functionally with UX and product stakeholders for frictionless transaction UX",
      ],
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Tailwind CSS", "Heroku"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Started on <strong className="text-zinc-900 dark:text-white font-semibold">February 6, 2023</strong> • Total dynamic experience:{" "}
            <span className="text-indigo-600 dark:text-sky-400 font-semibold font-mono">{exp.detailedFull} ({exp.yearsPlusLower})</span>.
          </p>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="bento-card p-6 sm:p-8 relative hover:-translate-y-0.5 transition-all bg-zinc-50/80 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                      {item.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium">
                  {item.type}
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                {item.summary}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  Key Achievements & Impact
                </div>
                {item.highlights.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium"
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

export default Experience;
