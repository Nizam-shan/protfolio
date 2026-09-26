import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Sparkles,
  ShieldCheck,
  SendHorizontal,
} from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nizamshan27@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919481267420");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const channels = [
    {
      title: "Direct Email",
      value: "nizamshan27@gmail.com",
      action: handleCopyEmail,
      actionText: copiedEmail ? "Copied to Clipboard" : "Copy Email",
      icon: copiedEmail ? Check : Copy,
      secondaryHref: "mailto:nizamshan27@gmail.com",
      secondaryText: "Open Mail App",
      badge: "Fastest Response",
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/nizamshan27",
      actionHref: "https://www.linkedin.com/in/nizamshan27/",
      actionText: "View Profile",
      icon: ArrowUpRight,
      badge: "Professional Network",
      external: true,
    },
    {
      title: "GitHub Portfolio",
      value: "github.com/Nizam-shan",
      actionHref: "https://github.com/Nizam-shan",
      actionText: "Explore Repositories",
      icon: ArrowUpRight,
      badge: "Open Source Code",
      external: true,
    },
    {
      title: "Direct Call & WhatsApp",
      value: "+91 9481267420",
      action: handleCopyPhone,
      actionText: copiedPhone ? "Copied to Clipboard" : "Copy Phone",
      icon: copiedPhone ? Check : Copy,
      secondaryHref: "tel:+919481267420",
      secondaryText: "Call Number",
      badge: "Immediate Contact",
    },
  ];

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/60">
      {/* Anchor for backward compatibility */}
      <div id="contact" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-medium mb-3">
            <SendHorizontal className="w-3.5 h-3.5 text-indigo-500" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Let's Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            No messy forms or delays. Reach out directly through any channel below for roles, projects, or consulting.
          </p>
        </div>

        {/* 2026 Connect Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bento-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    {channel.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                  {channel.title}
                </h3>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300 break-all mb-6">
                  {channel.value}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {channel.action ? (
                  <button
                    onClick={channel.action}
                    className="w-full py-2.5 px-3 rounded-full text-xs font-semibold border border-zinc-300 dark:border-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <channel.icon className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{channel.actionText}</span>
                  </button>
                ) : (
                  <a
                    href={channel.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{channel.actionText}</span>
                    <channel.icon className="w-3.5 h-3.5" />
                  </a>
                )}

                {channel.secondaryHref && (
                  <a
                    href={channel.secondaryHref}
                    className="w-full py-1.5 px-3 rounded-full text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white text-center block transition-colors"
                  >
                    {channel.secondaryText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Status & Availability Strip */}
        <div className="bento-card p-5 grid sm:grid-cols-3 gap-4 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3 sm:justify-start justify-center pb-3 sm:pb-0">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Location</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white">Bangalore, India (Open to Remote)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:justify-start justify-center pt-3 sm:pt-0 sm:pl-5 pb-3 sm:pb-0">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Turnaround Time</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white">Under 24 Hours Guaranteed</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:justify-start justify-center pt-3 sm:pt-0 sm:pl-5">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Work Engagement</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white">Senior Full-Time / Consulting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
