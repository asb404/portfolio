export const profile = {
  name: "Antara Bhavsar",
  title: "Founding Software Engineer",
  company: "ForbocAI",
  email: "antarabhavsar44@gmail.com",
  // Opens a Gmail compose window in the browser; mailto: links do nothing without a desktop mail app.
  composeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=antarabhavsar44@gmail.com",
  github: "https://github.com/asb404",
  linkedin: "https://www.linkedin.com/in/antara-bhavsar-74b7a4187/",
  resume:
    "https://drive.google.com/file/d/1d0vbRdrSNrECzBgwexD_NHe-LHwaVVIT/view?usp=sharing",
};

export const stats = [
  { value: "3+", label: "Years of industry experience" },
  { value: "100K+", label: "Users served in production" },
  { value: "4", label: "Engineering organizations" },
  { value: "1", label: "Research publication" },
];

export const capabilities = [
  {
    title: "Backend & Distributed Systems",
    summary:
      "Microservices, real-time pipelines and APIs built for reliability and low latency.",
    skills: ["Java", "Spring Boot", "REST / GraphQL", "WebSockets", "Microservices", "Event-Driven Design"],
  },
  {
    title: "Applied AI & LLM Systems",
    summary:
      "Agentic RAG, tool-augmented LLMs and inference services that move from research to production.",
    skills: ["Python", "FastAPI", "LangChain", "LangGraph", "RAG", "Vector Search"],
  },
  {
    title: "Cloud & Platform",
    summary:
      "Cloud-native infrastructure with monitoring, CI/CD and automated recovery built in.",
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "CI/CD", "CloudWatch"],
  },
  {
    title: "Mobile & Client Engineering",
    summary:
      "Performance-critical Android and web interfaces shipped to large user bases.",
    skills: ["Kotlin", "Android SDK", "Jetpack Compose", "TypeScript", "React", "Vue.js"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Founding Software Engineer",
    company: "ForbocAI, Inc.",
    location: "Remote",
    period: "May 2026 – Present",
    current: true,
    summary:
      "Founding engineer building the backend and inference platform behind AI-powered NPC systems.",
    points: [
      "Lead founding engineering efforts for AI-powered NPC systems, architecting scalable Java-based backend microservices, low-latency infrastructure, and real-time communication pipelines for production-ready applications.",
      "Build modular, high-performance backend services and inference platforms, designing scalable architectures that deliver reliable, low-latency real-time experiences.",
      "Drive product and engineering direction by designing REST APIs, microservices, and WebSocket-based communication systems, translating ambiguous requirements into scalable, distributed systems.",
    ],
    tech: ["Java", "Microservices", "WebSockets", "REST APIs", "AI Inference"],
  },
  {
    role: "Software Engineer (Research Assistant)",
    company: "CNS – Indiana University",
    location: "Bloomington, IN",
    period: "Mar 2025 – May 2026",
    summary:
      "Research engineering at the Cyberinfrastructure for Network Science Center on AI systems, data pipelines and performance-critical computation.",
    points: [
      "Built FastAPI services using Claude and local LLMs to power agentic RAG pipelines for semantic access to Allen Brain Atlas datasets.",
      "Implemented tool-augmented LLM agents using LangChain and LangGraph with function calling and dynamic routing, integrating 10+ data and analysis tools, evaluation workflows, and response caching to reduce inference latency by 35%.",
      "Optimized Python-based data processing for large-scale tissue mapping and projection, improving throughput by 30% and enabling precise alignment of 1,000+ tissue blocks; this work contributed to the AMAP cross-atlas alignment publication.",
      "Built reusable, production-quality data transformation modules following SDLC best practices, reducing preprocessing time by 25%.",
      "Implemented multithreaded, memory-efficient pipelines with algorithmic and data-structure optimizations, accelerating large-scale computations by 20%.",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "RAG", "Data Pipelines"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Denver, CO",
    period: "Jun 2025 – Aug 2025",
    summary:
      "Cloud-native monitoring and automation systems supporting large-scale operational workflows.",
    points: [
      "Designed distributed, cloud-native monitoring pipelines on AWS (Lambda, CloudWatch, CloudFormation, DynamoDB, SQS, DLQ), centralizing order event tracking and alerting and boosting on-call efficiency by 35%.",
      "Implemented embedding-based vector retrieval over 100K+ operational records, enabling semantic search and 30% faster incident resolution.",
      "Applied Dependency Injection and Registry design patterns to automate DLQ redrive operations, improving extensibility by 65% and reducing MTTR by 40%.",
      "Built CI/CD pipelines with automated unit, integration, and regression tests (JUnit, Mockito), shortening release cycles by 25%.",
    ],
    tech: ["AWS", "Java", "TypeScript", "Vector Search", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "Motorola Mobility",
    location: "Bangalore, India",
    period: "Aug 2022 – Aug 2024",
    summary:
      "AI-enabled Android and backend systems delivering performance-critical features to production users.",
    points: [
      "Built AI-driven Android features (Pay Attention, Remember This) with Java, Kotlin, Jetpack Compose, and AOSP, delivering smooth experiences to 100K+ users with an 18% performance gain.",
      "Optimized mobile performance and memory usage with multithreaded data processing and Android-specific memory management, reducing latency by 20%.",
      "Built custom Jetpack Compose and React Native UI components for consistent cross-platform experiences, improving maintainability by 15%.",
      "Led end-to-end development of the “Care for Dependents” device mode with AI-powered decision logic, earning 2nd place at the Motorola India Hackathon 2023.",
    ],
    tech: ["Android", "Kotlin", "Java", "Spring Boot", "Mobile AI"],
  },
];

export const publications = [
  {
    title:
      "Bridging Biomedical Atlas Ecosystem: Cross-Atlas Alignment and Scalable Tissue Specimen Registration",
    authors: [
      "Yashvardhan Jain",
      "Bhargav Desai",
      "Danial Qaurooni",
      "Antara Bhavsar",
      "Peter Kienle",
      "Alison M. Pouch",
      "Kathleen O'Neill",
      "Siddharth Apte",
      "Bruce W. Herr II",
      "Stephen A. Fisher",
      "Katy Börner",
    ],
    venue: "bioRxiv",
    type: "Preprint · Bioinformatics",
    date: "August 2026",
    org: "Cyberinfrastructure for Network Science Center (CNS), Indiana University",
    summary:
      "Introduces AMAP (Automated Alignment and Projection), a Python pipeline that aligns 3D organ models via point-cloud registration and projects registered tissue blocks between atlases. AMAP aligns the Human Reference Atlas with six external organ models and bulk-registers tissue blocks across five organs, integrating 300+ tissue extraction sites.",
    highlights: ["3D point-cloud registration", "Human Reference Atlas", "300+ tissue sites integrated"],
    doi: "10.64898/2026.08.13.744704",
    url: "https://www.biorxiv.org/content/10.64898/2026.08.13.744704v1.full",
  },
];

export const projects = [
  {
    title: "AI-Powered Procurement Optimization System",
    category: "Backend + ML",
    year: 2026,
    featured: true,
    description:
      "End-to-end restaurant sourcing pipeline — menu → ingredients → pricing trends → distributor matching → RFP emails → quote parsing → supplier recommendation — orchestrated by local-LLM agents.",
    tech: ["Python", "FastAPI", "Ollama (Local LLM)", "SQLite", "Streamlit"],
    link: "https://github.com/asb404/Restaurant-Procurement-Ai",
  },
  {
    title: "Autonomous Problem-Solving Agent",
    category: "AI Systems",
    year: 2025,
    featured: true,
    description:
      "Hybrid multi-agent LLM system using a Supervisor pattern that diagnoses issues, retrieves context via semantic search, and iteratively generates and refines solutions.",
    tech: ["Python", "LangChain", "AutoGen", "RAG", "Vector DB"],
    link: "https://github.com/asb404/PSA-Agent",
  },
  {
    title: "SentiCloud",
    category: "Cloud & ML",
    year: 2025,
    featured: true,
    description:
      "Cloud-native Kubernetes platform on GCP for parallel sentiment analysis, sustaining 5K+ messages/sec with sub-second latency and 99.9% uptime.",
    tech: ["Kubernetes", "GCP", "Python", "Docker", "Autoscaling"],
    link: "https://github.com/asb404/senti-cloud",
  },
  {
    title: "Scheduler Microservice",
    category: "Backend",
    year: 2025,
    featured: true,
    description:
      "Distributed scheduler for cron and event-driven jobs with REST APIs, RabbitMQ dispatch, durable job storage, and Kubernetes deployment.",
    tech: ["Java", "Spring Boot", "RabbitMQ", "MongoDB", "Kubernetes"],
    link: "https://github.com/asb404/Schuduler-microservice",
  },
  {
    title: "Intelligent Credit Risk & Limit Optimization",
    category: "Machine Learning",
    year: 2024,
    featured: true,
    description:
      "End-to-end ML pipeline for credit risk and dynamic limit optimization, reaching 91% accuracy — a 12% improvement over baseline.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Feature Engineering"],
    link: "https://github.com/asb404/Intelligent-Optimal-Credit-Risk",
  },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 – May 2026",
    detail: "GPA 3.9 / 4.0 · Applied ML, Artificial Intelligence, Cloud Computing, Applied Algorithms",
  },
  {
    degree: "B.E. Computer Science & Engineering",
    school: "BNM Institute of Technology, Bangalore",
    period: "Aug 2018 – Jul 2022",
    detail: "CGPA 9.26 / 10",
  },
];
