import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Building2,
} from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      company: "Arnest Solutions",
      position: "Senior Software Engineer",
      duration: "2025 - Present",
      location: "Bangalore, India",
      description:
        "Leading full-stack development initiatives for enterprise clients, mentoring junior developers, and architecting scalable solutions.",
      achievements: [
        "Led development of 3 major client projects with 99.9% uptime",
        "Reduced API response time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 5 junior developers in best practices",
      ],
      technologies: [
        "React",
        "Next.js",
        "Spring Boot",
        "MongoDB",
        "AWS",
        "Docker",
        "Angular",
        "Grafana",
        "Agentic  Ai",
        "AWS bedrock",
        "Plotly",
        "React native",
      ],
      companyUrl: "",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      company: "Xpayback",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
      location: "Kochi, India",
      description:
        "Developed and maintained multiple web applications, collaborated with cross-functional teams, and contributed to technical architecture decisions.",
      achievements: [
        "Built 5+ production applications from concept to deployment",
        "Improved application performance by 35%",
        "Collaborated with UX team to enhance user experience",
        "Participated in code reviews and technical planning",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "Heroku",
      ],
      companyUrl: "",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const ExperienceCard = ({ experience, index, isLast }) => (
    <motion.div variants={itemVariants} className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>
      )}

      <div className="flex gap-6">
        {/* Timeline Dot */}
        <div className="relative z-10">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
          >
            <Building2 className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <motion.div
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <motion.a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-primary-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${experience.company} website`}
              >
                <ExternalLink className="w-4 h-4 text-primary-400" />
              </motion.a>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-4">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              <Briefcase className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">
                Professional Journey
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Work </span>
              <span className="gradient-text">Experience</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development, showcasing
              growth, achievements, and the diverse projects I've contributed to
              across different companies.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to add to my experience?
              </h3>
              <p className="text-slate-300 mb-6">
                I'm always open to new opportunities and exciting projects.
                Let's discuss how we can work together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
