import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useInViewObserver } from "react-intersection-observer";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  Palette,
  Cpu,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Layers,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInViewObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      id: "frontend",
      icon: Code,
      title: "Frontend Technologies",
      color: "from-cyan-500 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "JavaScript (ES6+)", level: 95, icon: "💻" },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: "Backend Technologies",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      skills: [
        { name: "Spring Boot", level: 90, icon: "🍃" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚀" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ],
    },
    {
      id: "databases",
      icon: Database,
      title: "Databases & Storage",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "Redis", level: 70, icon: "🔴" },
        { name: "InfluxDB", level: 75, icon: "📈" },
        { name: "Elasticsearch", level: 65, icon: "🔍" },
      ],
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-indigo-500 to-purple-500",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      skills: [
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 70, icon: "⚓" },
        { name: "CI/CD", level: 80, icon: "🔄" },
        { name: "Terraform", level: 65, icon: "🏗️" },
        { name: "Monitoring", level: 75, icon: "📊" },
      ],
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "Grafana", level: 80, icon: "📈" },
        { name: "Plotly", level: 85, icon: "📊" },
        { name: "Jira", level: 80, icon: "🎯" },
      ],
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile & Emerging",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      skills: [
        { name: "React Native", level: 75, icon: "📱" },
        { name: "Flutter", level: 60, icon: "🦋" },
        { name: "AI/ML", level: 70, icon: "🤖" },
        { name: "Web3", level: 65, icon: "⛓️" },
        { name: "Blockchain", level: 60, icon: "🔗" },
        { name: "IoT", level: 55, icon: "🌐" },
      ],
    },
  ];

  const SkillBar = ({ skill, isVisible }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-slate-300">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono">{skill.level}%</span>
      </div>
      <div className="progress-bar h-2">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">
                Technical Proficiency
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-heading">
              <span className="text-white">Skills & </span>
              <span className="gradient-text">Expertise</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed text-body">
              A comprehensive overview of my technical skills and expertise
              across the full development stack. Continuously learning and
              adapting to new technologies.
            </p>
          </motion.div>

          {/* Modern Category Tabs */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full glass-elevated border transition-all duration-300 ${
                    activeCategory === category.id
                      ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                      : "border-slate-600/30 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {category.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Modern Skills Display */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Skills List */}
            <div className="space-y-8">
              <motion.div
                className="card p-8 glow"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      skillCategories.find((c) => c.id === activeCategory)
                        ?.gradient
                    } flex items-center justify-center glow`}
                  >
                    {(() => {
                      const IconComponent = skillCategories.find(
                        (c) => c.id === activeCategory
                      )?.icon;
                      return IconComponent ? (
                        <IconComponent className="w-6 h-6 text-white" />
                      ) : null;
                    })()}
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-heading">
                    {
                      skillCategories.find((c) => c.id === activeCategory)
                        ?.title
                    }
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillCategories
                    .find((c) => c.id === activeCategory)
                    ?.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        isVisible={inView}
                      />
                    ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Representation */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Skill Radar Chart Placeholder */}
              <div className="card p-8 glow h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute inset-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Skill Visualization
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Interactive skill radar chart coming soon
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-6 glow text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">6</div>
                  <div className="text-sm text-slate-400">Categories</div>
                </div>
                <div className="card p-6 glow text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    36
                  </div>
                  <div className="text-sm text-slate-400">Technologies</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Modern Additional Skills */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="card p-8 glow">
              <h3 className="text-2xl font-semibold text-white mb-6 text-heading text-center">
                Additional Skills & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Redux",
                  "Context API",
                  "React Query",
                  "Jest",
                  "Cypress",
                  "Storybook",
                  "Webpack",
                  "Vite",
                  "NPM",
                  "Yarn",
                  "Linux",
                  "MacOS",
                  "Windows",
                  "Agile",
                  "Scrum",
                  "Kanban",
                  "TDD",
                  "BDD",
                  "Microservices",
                  "REST",
                  "GraphQL",
                  "WebSockets",
                  "OAuth",
                  "JWT",
                  "SSL/TLS",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    <span className="text-sm text-slate-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
