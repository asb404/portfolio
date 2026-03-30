"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer - Research Assistant",
    company: "CNS - Indiana University",
    period: "Aug 2025 – Present",
    description:
      "Built distributed AI systems and agentic RAG pipelines for large-scale biomedical datasets.",
    points: [
      "Translated ambiguous domain queries into production-grade RAG pipelines, designing system workflows and iterating based on real-world usage and feedback.",
      "Designed and deployed FastAPI-based distributed backend services for agentic RAG systems using Claude and local LLMs, enabling semantic access to large-scale datasets.",
      "Built tool-augmented LLM agents using LangChain and LangGraph with dynamic routing and function calling, integrating 10+ tools; reduced latency by 35% and achieved >99% reliable inference via caching and fault-tolerant design."
    ],
    tech: ["FastAPI", "RAG", "LangChain", "LangGraph", "Distributed Systems"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    period: "Jun 2025 – Aug 2025",
    description:
      "Worked on cloud-native distributed systems for AI-powered automation and real-time operational decisioning.",
    points: [
      "Designed cloud-native distributed data pipelines on AWS for LLM and embedding-powered automation, enabling real-time AI decisioning at scale.",
      "Implemented vector search and embedding-based retrieval over 100K+ records, enabling semantic search and reducing incident resolution time by 30%.",
      "Built production-grade AI agent workflows using Amazon Q and Bedrock with deterministic control logic to automate DLQ triage and redrive, reducing manual effort by 60% and improving MTTR by 40%.",
      "Developed secure, scalable microservices and APIs integrated with AWS IAM, ensuring reliable and auditable AI-driven operations."
    ],
    tech: ["AWS", "Bedrock", "Vector Search", "Microservices", "Distributed Systems"],
  },
  {
    role: "Software Engineer - Research Assistant",
    company: "CNS - Indiana University",
    period: "Mar 2025 – May 2025",
    description:
      "Engineered high-performance data pipelines and optimized large-scale computational workflows.",
    points: [
      "Optimized large-scale data processing pipelines for tissue mapping using parallel and distributed computation, improving throughput by 30% across 1,000+ data units.",
      "Built reusable data processing modules following SDLC best practices, reducing preprocessing time by 25% and improving system maintainability.",
      "Engineered multithreaded, memory-efficient pipelines with algorithmic optimizations, accelerating large-scale computations by 20%."
    ],
    tech: ["Python", "Data Pipelines", "Multithreading", "Distributed Systems"],
  },
  {
    role: "Software Engineer",
    company: "Motorola Mobility",
    period: "Aug 2022 – Aug 2024",
    description:
      "Built AI-enabled mobile and backend systems delivering scalable, performance-critical features to production users.",
    points: [
      "Built AI-driven features leveraging on-device ML and scalable distributed backend services with APIs and asynchronous processing, serving 100K+ users with an 18% performance improvement.",
      "Engineered low-latency inference pipelines using multithreading and memory-optimized design, reducing latency by 20% and increasing system throughput.",
      "Architected AI-powered decision logic for system workflows, driving production releases and securing 2nd place at Motorola India Hackathon 2023.",
      "Applied algorithmic and data structure optimizations across system components, improving application responsiveness, reliability, and execution efficiency."
    ],
    tech: ["Android", "Kotlin", "Machine Learning", "Backend", "System Design"],
  },
];

// Simple Chevron SVG component
const ChevronRight = ({ className = "", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title mb-12">Experience</h2>

      {/* Single column layout with wider cards */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
              bg-neutral-900/70 backdrop-blur
              border border-neutral-800
              rounded-2xl
              p-8
              hover:border-sky-400/40
              transition-all duration-300
              hover:shadow-xl hover:shadow-sky-400/5
              w-full
            "
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              {/* Left side - Role and Company */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-sky-400 font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
              </div>

              {/* Right side - Tech stack pills */}
              <div className="flex flex-wrap gap-2 md:justify-end">
                {exp.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-sky-400/10
                      text-sky-400
                      border border-sky-400/20
                      text-sm font-medium
                      hover:bg-sky-400/20
                      transition-colors
                    "
                  >
                    {tech}
                  </span>
                ))}
                {exp.tech.length > 4 && (
                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      bg-neutral-800
                      text-slate-400
                      border border-neutral-700
                      text-sm font-medium
                    "
                  >
                    +{exp.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

            {/* Description */}
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {exp.description}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8">
              {exp.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + i * 0.1 }}
                  className="flex gap-3 group"
                >
                  <ChevronRight
                    className="
                      text-sky-400 mt-1 flex-shrink-0
                      group-hover:translate-x-1
                      transition-transform
                    "
                    size={20}
                  />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            
          </motion.div>
        ))}
      </div>

      {/* Stats section (optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
          max-w-6xl mx-auto mt-12
          grid grid-cols-2 md:grid-cols-4 gap-6
        "
      >
        {[
          { label: "Years Experience", value: "2+" },
          { label: "Projects Delivered", value: "15+" },
          { label: "Companies", value: "3" },
          { label: "Tech Stack", value: "20+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="
              bg-neutral-900/50
              border border-neutral-800
              rounded-xl
              p-6
              text-center
              hover:border-sky-400/30
              transition-colors
            "
          >
            <div className="text-3xl font-bold text-sky-400 mb-2">
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
      
    </section>
    
  );
}