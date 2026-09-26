import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { useExperience } from "../hooks/useExperience";

const Hero = () => {
  const exp = useExperience();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nizamshan27@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 relative flex items-center justify-center linear-grid overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative High-Contrast Presentation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Senior Full-Stack & Systems Engineer</span>
            </div>

            {/* Main SEO & Personal Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-2">
                Nizam Shan
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-sky-400">
                Senior Full-Stack Engineer • Enterprise Web Architect
              </p>
            </div>

            {/* Dynamic Experience & Capabilities Lead (Crisp High-Contrast Text) */}
            <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-100 leading-relaxed max-w-xl font-normal">
              With over{" "}
              <strong className="text-zinc-950 dark:text-white font-bold underline decoration-indigo-500/50 underline-offset-4">
                {exp.yearsPlusLower}
              </strong>{" "}
              of software engineering experience (started Feb 2023), I architect high-throughput applications, secure fintech workflows, and modern web interfaces using{" "}
              <span className="text-zinc-950 dark:text-white font-semibold">React</span>,{" "}
              <span className="text-zinc-950 dark:text-white font-semibold">Next.js</span>, and{" "}
              <span className="text-zinc-950 dark:text-white font-semibold">Spring Boot</span>.
            </p>

            {/* Action Bar (High Visibility Contrast Buttons) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-6 py-3 text-sm font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
              >
                <span>View Selected Work</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 text-sm font-semibold rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="https://drive.google.com/file/d/1J-_1YQ-Lh9Fc9fOSCyughPADY4rFM6i_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-semibold rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              </a>
            </div>

            {/* Quick Links Footer */}
            <div className="flex items-center gap-4 pt-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
              <span className="font-mono text-zinc-500 dark:text-zinc-400">Connect:</span>
              <a
                href="https://github.com/Nizam-shan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/nizamshan27/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href="mailto:nizamshan27@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek 2026 Linear Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bento-card p-4 sm:p-5 max-w-sm w-full relative group">
              {/* Image Frame with Full Hair and Portrait Ratio */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 mb-4 shadow-sm">
                <Image
                  src="/avatar/avatar3.jpeg"
                  alt="Nizam Shan - Senior Full Stack Software Engineer"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                  sizes="(max-width: 640px) 280px, 340px"
                />
              </div>

              {/* Card Meta Footer */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-zinc-900 dark:text-white text-sm">Nizam Shan</span>
                  <span className="text-xs font-mono font-medium text-indigo-600 dark:text-sky-400">
                    Full-Stack Engineer
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    Bangalore, India
                  </span>
                  <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">
                    Exp: {exp.yearsPlus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
