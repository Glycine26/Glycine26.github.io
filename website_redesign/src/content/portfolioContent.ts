export type ExternalLink = Readonly<{ href: string; label: string; newContext: true }>;

export type ExistingProject = Readonly<{
  kind: "existing";
  id: "pre-market-pulse";
  tag: string;
  title: string;
  summary: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  image: Readonly<{ src: string; alt: string; width: number; height: number }>;
  destination: ExternalLink;
}>;

export type OrbitGlideProject = Readonly<{
  kind: "orbit-glide";
  id: "orbit-glide";
  tag: string;
  title: "Orbit Glide";
  subtitle: string;
  status: string;
  summary: string;
  highlights: readonly { title: string; desc: string; icon: string }[];
  technologies: readonly string[];
  privacyPolicy: ExternalLink;
  preview: Readonly<{ src: string; accessibleName: string; fallback: string }>;
}>;

export type ProjectRecord = ExistingProject | OrbitGlideProject;

export type ExperienceItem = Readonly<{
  employer: string;
  role: string;
  period: string;
  destination: ExternalLink;
  isCurrent?: boolean;
  accomplishments: readonly string[];
}>;

const external = (href: string, label: string): ExternalLink => ({ href, label, newContext: true });

export const externalAnchorProps = (link: ExternalLink) => ({
  href: link.href,
  target: "_blank",
  rel: "noopener noreferrer",
});

export const portfolioContent = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hello, I'm",
    name: "Diganth S",
    title: "Cloud Automation Engineer | Python Developer",
    subtitle: "AWS Cloud Solutions • Python/Flask Backends • Android Development with Kotlin",
    certification: "AWS Certified Solutions Architect – Associate",
    connectButtonText: "Connect with Diganth",
    exploreButtonText: "Explore Projects",
    portrait: {
      src: "/lovable-uploads/diganth_s.jpg",
      alt: "Portrait of Diganth S",
      width: 600,
      height: 600,
    },
  },
  about: {
    title: "About Me",
    experienceHeading: "Work Experience",
    experienceValue: "4+",
    experienceLabel: "Years of Experience",
    bioParagraph1:
      "Working as a Senior Systems Engineer with deep hands-on experience building scalable automation solutions, cloud-based applications on AWS, Flask backends, workflow orchestration, and business intelligence solutions.",
    bioParagraph2:
      "Recently, I have expanded into native Android development — designing and engineering responsive mobile games with Kotlin. My first arcade title, Orbit Glide, is currently in active testing and will soon be ready to download on the Google Play Store.",
    certifications: [
      {
        image: "/lovable-uploads/aws-solutions-architect.png",
        alt: "AWS Certified Solutions Architect",
        label: "AWS Certified Solutions Architect – Associate",
        destination: external(
          "https://www.credly.com/badges/41d10705-1453-47d1-845d-e2468b8ad8ce/public_url",
          "Verify Credly Badge"
        ),
      },
      {
        image: "/lovable-uploads/aws-cloud-practitioner.png",
        alt: "AWS Certified Cloud Practitioner",
        label: "AWS Certified Cloud Practitioner",
        destination: external(
          "https://www.credly.com/badges/d22e5c2a-d1ef-46db-8ca5-7064e89264a7/public_url",
          "Verify Credly Badge"
        ),
      },
    ],
  },
  projects: [
    {
      kind: "orbit-glide",
      id: "orbit-glide",
      tag: "Featured Android Game • Solo Project",
      title: "Orbit Glide",
      subtitle: "Native Android Gravity-Arcade Game in Kotlin",
      status: "In Testing • Soon Available on Google Play Store",
      summary:
        "Orbit Glide is an endless arcade game for Android where players slingshot a spacecraft between orbital gravity beacons, dodge asteroid showers, and skim cosmic hazards. Built 100% from scratch in Kotlin with a custom game loop, zero external game engine bloat, procedurally synthesized real-time audio, and total privacy with no ads or data collection.",
      highlights: [
        {
          title: "Native Android & Kotlin",
          desc: "Handcrafted SurfaceView & Canvas 2D rendering loop with zero engine overhead.",
          icon: "Smartphone",
        },
        {
          title: "Custom Physics & AI",
          desc: "Orbital gravity capture, slingshot trajectories, and pursuing AI enemies.",
          icon: "Orbit",
        },
        {
          title: "Procedural Audio Engine",
          desc: "Runtime-synthesized adaptive soundtrack keeping the APK under 2 MB.",
          icon: "Music",
        },
        {
          title: "100% Privacy & Offline",
          desc: "Zero network permissions, zero tracking, zero ads — true on-device gaming.",
          icon: "ShieldCheck",
        },
      ],
      technologies: ["Kotlin", "Android SDK", "SurfaceView / Canvas 2D", "Procedural Audio", "Physics Loop", "R8 / ProGuard"],
      privacyPolicy: external(
        "https://sites.google.com/view/orbit-glide-privacy/",
        "View Privacy Policy"
      ),
      preview: {
        src: "/media/orbit-glide-demo.mp4",
        accessibleName: "Orbit Glide Android gameplay demo video",
        fallback: "Orbit Glide gameplay preview video.",
      },
    },
    {
      kind: "existing",
      id: "pre-market-pulse",
      tag: "Cloud Architecture • Client Engagement",
      title: "Pre-Market Pulse",
      summary:
        "Engineered an automated serverless AWS cloud infrastructure for Pre-Market Pulse to ingest, process, and analyze high-frequency financial & stock market data with scheduled Lambda workflows and secure containerized pipelines.",
      responsibilities: [
        "Built automated REST APIs for financial data extraction from Dhan API and Yahoo Finance.",
        "Containerized core processing services using Docker and managed deployments via Amazon ECR.",
        "Converted monolithic EC2 compute workloads into event-driven AWS Lambda functions via EventBridge.",
        "Implemented automated database backup policies and granular IAM role-based security.",
      ],
      technologies: [
        "AWS Cloud",
        "AWS Lambda",
        "Python",
        "Docker",
        "Amazon ECR",
        "EventBridge",
        "REST APIs",
        "Cloud Security (IAM)",
      ],
      image: {
        src: "/lovable-uploads/premarket_img.png",
        alt: "Pre-Market Pulse stock-market and financial data interface",
        width: 1280,
        height: 720,
      },
      destination: external("https://premarketpulse.com/", "Visit Platform"),
    },
  ] as const satisfies readonly [OrbitGlideProject, ExistingProject],
  experiences: [
    {
      employer: "Infosys Ltd., Mangalore",
      role: "Senior Systems Engineer",
      period: "June 2025 - Present",
      isCurrent: true,
      destination: external("https://www.infosys.com/", "Infosys Ltd., Mangalore"),
      accomplishments: [
        "Leading the process automation in AWS cloud architecture.",
        "Saving FTE for BPM (Business Process Management) processes.",
      ],
    },
    {
      employer: "LogiSian Technology Solutions Pvt. Ltd.",
      role: "Software Engineer - Cloud",
      period: "Nov 2022 - June 2025",
      isCurrent: false,
      destination: external("https://logisian.in/", "LogiSian Technology Solutions Pvt. Ltd."),
      accomplishments: [
        "Managing e-commerce clients database, performing CRUD operations.",
        "Updating and optimizing product content to enhance discoverability for application users.",
        "Terraform scripts for automated cloud resource provisioning.",
        "Deploying and managing applications on Google Cloud Platform (GCP).",
        "Managing Google Analytics & Google Search Console for website tracking and performance analysis.",
      ],
    },
  ] as const satisfies readonly ExperienceItem[],
  skills: [
    {
      title: "Cloud & Infrastructure",
      items: [
        "AWS (Lambda, S3, EC2, ECR, EventBridge, IAM)",
        "Microsoft Azure & Cloud Services",
        "Terraform (Infrastructure as Code)",
        "Docker & Container Workflows",
        "Serverless & Event-Driven Architecture",
      ],
    },
    {
      title: "Backend & Systems",
      items: [
        "Python & Flask Framework",
        "RESTful API Design & Integration",
        "Workflow Automation & Cron Scheduling",
        "Linux/Unix Shell Scripting & CI/CD",
        "Business Intelligence & Telemetry",
      ],
    },
    {
      title: "Android & Databases",
      items: [
        "Android Development with Kotlin",
        "Custom Game Loops & Canvas 2D Graphics",
        "PostgreSQL & AWS RDS",
        "NoSQL & Cloud Databases",
        "Data Migration & ETL Processing",
      ],
    },
  ],
  education: {
    degree: "B.E in Biotechnology Engineering",
    university: "Visvesvaraya Technological University",
    period: "2018 - 2022",
    result: "8.8 CGPA",
  },
  contact: {
    phone: "+91-9449195773",
    email: "daipaldiganths@gmail.com",
    location: "Mangalore, Karnataka India 574231",
    github: external("https://github.com/Glycine26", "GitHub"),
    linkedin: external("https://www.linkedin.com/in/diganths", "LinkedIn"),
  },
} as const;
