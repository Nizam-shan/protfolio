import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nizamshan27@gmail.com",
      link: "mailto:nizamshan27@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9481267420",
      link: "tel:+919481267420",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const ContactInfoCard = ({ info }) => (
    <motion.div
      variants={itemVariants}
      className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <info.icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>

      <motion.a
        href={info.link}
        className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        aria-label={`Contact via ${info.title.toLowerCase()}`}
      >
        {info.value}
      </motion.a>
    </motion.div>
  );

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder,
  }) => (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-300"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
        aria-describedby={`${name}-error`}
      />
    </div>
  );

  const TextAreaField = ({ label, name, required = false, placeholder }) => (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-300"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
        aria-describedby={`${name}-error`}
      />
    </div>
  );

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              <Mail className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">Get In Touch</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Let's Work </span>
              <span className="gradient-text">Together</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'm here to help bring your
              ideas to life. Let's discuss how we can work together to create
              something amazing.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((info) => (
              <ContactInfoCard key={info.title} info={info} />
            ))}
          </motion.div>

          {/* Contact Form & Additional Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <InputField
                    label="Subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                  />

                  <TextAreaField
                    label="Message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                  />

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        submitStatus === "success"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>
                        {submitStatus === "success"
                          ? "Message sent successfully! I'll get back to you soon."
                          : "Something went wrong. Please try again."}
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Why work with me?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Fast response time - I typically reply within 24 hours",
                      "Clear communication throughout the project",
                      "Proven track record of successful deliveries",
                      "Ongoing support and maintenance options",
                      "Flexible collaboration approaches",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    What I can help with
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Web application development",
                      "Mobile-responsive design",
                      "API development and integration",
                      "Database design and optimization",
                      "Performance optimization",
                      "Security implementation",
                      "DevOps and deployment",
                      "Technical consulting",
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
