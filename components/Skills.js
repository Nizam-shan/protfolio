import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Cloud, Wrench, Palette } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Backend Technologies",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Java", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      icon: Database,
      title: "Databases & Storage",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "InfluxDB", level: 75 },
        { name: "Elasticsearch", level: 65 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Terraform", level: 65 },
        { name: "Monitoring", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Grafana", level: 80 },
        { name: "Plotly", level: 85 },
        { name: "Jira", level: 80 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 },
        { name: "Performance", level: 80 },
        { name: "SEO", level: 70 },
      ],
    },
  ];

  const ProgressBar = ({ skill, index }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-primary-400 text-sm font-semibold">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900"></div>

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
                Skills & Expertise
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Technical </span>
              <span className="gradient-text">Proficiency</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and expertise
              across the full development stack. Continuously learning and
              adapting to new technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Category Header */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 6 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Additional Skills & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
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
                  <motion.span
                    key={skill}
                    className="px-3 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-primary-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
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
