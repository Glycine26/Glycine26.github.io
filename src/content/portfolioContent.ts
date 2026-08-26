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
  status: string;
  summary: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  privacyPolicy: ExternalLink;
  preview: Readonly<{ src: string; accessibleName: string; fallback: string }>;
}>;

export type ProjectRecord = ExistingProject | OrbitGlideProject;

const external = (href: string, label: string): ExternalLink => ({ href, label, newContext: true });

export const externalAnchorProps = (link: ExternalLink) => ({
  href: link.href,
  target: "_blank",
  rel: "noopener noreferrer",
});

export const portfolioContent = {
  navigation: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "I'm Diganth S",
    role: "Cloud Automation Engineer | Python Backend Developer",
    certification: "AWS Certified Solutions Architect – Associate",
    portrait: { src: "/lovable-uploads/diganth_s.jpg", alt: "Portrait of Diganth S., the portfolio owner", width: 600, height: 600 },
  },
  projects: [
    {
      kind: "existing", id: "pre-market-pulse", tag: "Freelance project | AWS | Client work", title: "Pre-Market Pulse",
      summary: "Client engagement delivering an AWS cloud architecture for Pre-Market Pulse to process stock market and financial data for analysis, automate resource management, and run on a serverless cloud architecture.",
      responsibilities: [
        "API Development: Built APIs for data extraction from external sources like Dhan API and Yahoo Finance.",
        "Automated Data Processing: Developed Python scripts to fetch data, scheduled execution using cron jobs.",
        "Containerization & Deployment: Created Docker images and managed deployments using Amazon ECR.",
        "Serverless Migration: Converted EC2 workloads to AWS Lambda functions, triggered via EventBridge for efficiency and cost optimization.",
        "Cloud Security: Managed IAM policies to ensure secure access control for cloud resources.",
        "Data Backup Management: Implemented automated backup strategies for datasets.",
      ],
      technologies: ["AWS Cloud", "API Development", "Python Scripting", "CronJobs", "Cloud Storage", "AWS Lambda", "EC2 Migration", "Cloud Security", "Docker", "ECR"],
      image: { src: "/lovable-uploads/premarket_img.png", alt: "Pre-Market Pulse stock-market and financial data interface", width: 1280, height: 720 },
      destination: external("https://premarketpulse.com/", "View Project"),
    },
    {
      kind: "existing", id: "school-of-martial-arts", title: "The School of Martial Arts (TSMA)",
      summary: "Developed an Attendance Management System for TSMA to track student attendance and generate monthly reports.",
      responsibilities: [
        "Backend Development: Built the Django backend for student attendance tracking.",
        "Database Configuration: PostgreSQL database, and AWS S3 for media storage.",
        "Data Migration: Migrated student records from Excel to PostgreSQL and images to S3.",
        "User Authentication: Secure authentication for user login.",
        "Report Generation: Generate monthly attendance reports in PDF format.",
      ],
      technologies: ["Attendance Tracking", "Django", "Backend Development", "PostgreSQL", "AWS S3", "Data Migration", "User Access Control"],
      image: { src: "/lovable-uploads/tsma-img.png", alt: "The School of Martial Arts attendance management interface", width: 1280, height: 720 },
      destination: external("https://www.theschoolofmartialarts.in/", "View Project"),
    },
    {
      kind: "orbit-glide", id: "orbit-glide", title: "Orbit Glide", packageName: "com.glycine26.orbitglide",
      identity: "Android arcade game | Kotlin | Solo project",
      status: "Closed testing on Google Play (public release pending review)",
      oneLineDescription: "Orbit Glide - An endless gravity-slingshot arcade game for Android, built in Kotlin with a hand-written game loop and zero game-engine dependencies.",
      shortBlurb: "Orbit Glide is an endless arcade runner where you slingshot a craft between orbital gravity beacons, dodge asteroid showers, and skim black holes for gravity assists. It is built entirely from scratch in Kotlin - custom game loop, Canvas rendering, orbital physics, and procedurally synthesised audio, with no game engine and no third-party graphics or sound libraries. Ships as a 1.7 MB signed Android App Bundle with no ads, no analytics, and no network access.",
      responsibilities: [
        "Built and shipped a native Android arcade game in Kotlin with a hand-written game loop rendering to a SurfaceView via Canvas, without Unity, Godot, or any game framework.",
        "Implemented the full gameplay system independently: orbital gravity capture and slingshot release physics, collision handling, a combo/multiplier scoring model, pursuing enemy AI, and 12 escalating difficulty tiers.",
        "Wrote a procedural audio engine that synthesises all music and sound effects at runtime, eliminating bundled audio assets and keeping the release binary under 2 MB.",
        "Managed the complete Google Play release pipeline: release keystore and signing, R8 minification with resource shrinking, Android App Bundle with language/density/ABI splits, Data safety and content-rating declarations, and a closed testing rollout.",
        "Migrated the project to Android 16 (API 36) to meet Google Play's target API policy deadline, diagnosing and resolving toolchain, JDK, and dependency resolution failures in a restricted offline build environment.",
      ],
      technicalHighlights: [
        { heading: "No game engine", text: "Rendering, timing, input, physics, audio, and UI are all implemented directly against the Android SDK. Demonstrates understanding of what an engine abstracts away rather than reliance on one." },
        { heading: "No bundled audio", text: "All music and effects are generated procedurally at runtime by a custom SoundEngine. The soundtrack intensifies as difficulty rises." },
        { heading: "Deliberately minimal dependency surface", text: "Four AndroidX/Material libraries total. One Android permission (VIBRATE). No INTERNET permission, which makes network data exfiltration structurally impossible rather than merely absent." },
        { heading: "Privacy by architecture", text: "All state is stored on-device in SharedPreferences and never transmitted. The Play Data safety declaration truthfully reports zero data collection, and that claim is enforced by the permission set rather than by policy." },
        { heading: "Size discipline", text: "1.7 MB release bundle with R8 minification and resource shrinking enabled." },
        { heading: "Broad device reach", text: "minSdk 24 (Android 7.0) through targetSdk 36 (Android 16). Verified on physical hardware, including a low-end Samsung Galaxy J4." },
      ],
      skillFacts: {
        "Languages & Platform": ["Kotlin", "Android SDK (API 24-36)", "JVM/JDK 17"],
        "Graphics & Game Programming": ["Custom game loop and frame timing", "SurfaceView rendering with a dedicated render thread", "Canvas 2D drawing: Paint, Path, gradients, arcs, transforms", "Sprite/bitmap caching to reduce per-frame allocation", "Resolution-independent rendering and letterboxing across screen sizes", "ValueAnimator-driven UI animation", "Custom View subclassing"],
        "Gameplay Systems": ["Orbital gravity simulation, slingshot trajectory mechanics", "Collision detection and response", "Enemy pursuit behaviour", "Combo, multiplier, and progression/tier systems", "In-game currency and consumable economy", "Run suspension and resume across process lifecycle"],
        "Android Application Development": ["Programmatic UI construction (no XML layouts)", "Activity lifecycle and state preservation", "Edge-to-edge immersive display via WindowCompat / WindowInsetsController", "SharedPreferences persistence", "Haptic feedback via Vibrator", "Audio synthesis and playback"],
        "Build, Release & Tooling": ["Gradle Kotlin DSL, Android Gradle Plugin", "R8 code minification and resource shrinking, ProGuard rule authoring", "Release signing with a managed keystore; signature verification", "Android App Bundle (AAB) generation and configuration splits", "ADB: device provisioning, install, logcat diagnosis, screen capture", "Offline/air-gapped dependency resolution and build troubleshooting"],
        "Release Engineering & Compliance": ["Google Play Console end-to-end submission", "Target API level policy compliance (Android 16 / API 36)", "Data safety declaration, content rating (IARC), target audience, advertising ID and ads declarations", "Privacy policy authoring and hosting", "Store listing assets: icon, feature graphic, screenshots", "Closed testing track setup and tester management", "Semantic versionCode/versionName management for update delivery", "Release keystore and signing", "R8 minification with resource shrinking"],
      },
      projectFacts: [
        { field: "Type", value: "Endless arcade / skill game" }, { field: "Platform", value: "Android (phone, portrait)" }, { field: "Language", value: "Kotlin" }, { field: "Architecture", value: "Custom game loop, SurfaceView + Canvas" }, { field: "Engine", value: "None" }, { field: "minSdk / targetSdk", value: "24 (Android 7.0) / 36 (Android 16)" }, { field: "Release artifact", value: "Signed Android App Bundle, ~1.7 MB" }, { field: "Permissions", value: "VIBRATE only" }, { field: "Ads / Analytics", value: "None" }, { field: "Network access", value: "None" }, { field: "Monetisation", value: "None" }, { field: "Team size", value: "Solo (design, code, art, audio, release)" }, { field: "Privacy policy", value: "https://sites.google.com/view/orbit-glide-privacy/" },
      ],
      features: ["12 difficulty ranks from CADET to LEGEND", "Asteroid showers - anchor to a beacon's gravity well to deflect them", "Black holes - risk a close pass for a massive score boost", "Up to 3 Void Hunters stalking you at the highest ranks", "Combo system - chain captures for escalating bonuses", "Procedural electronic soundtrack that intensifies as you climb", "Zero ads. Zero data collection. Pure skill."],
      privacyStatements: ["All state is stored on-device in SharedPreferences and never transmitted", "zero data collection"],
      privacyPolicy: external("https://sites.google.com/view/orbit-glide-privacy/", "Read the Orbit Glide privacy policy"),
      preview: { src: "/orbit_glide_demo.mp4", accessibleName: "Orbit Glide gameplay demonstration", fallback: "Orbit Glide gameplay demonstration preview. Video playback may be unavailable; the complete case study and testing status are provided below." },
    },
  ] as const satisfies readonly [ExistingProject, ExistingProject, OrbitGlideProject],
  about: {
    biography: "As a Cloud Developer, I'm specializing in developing cloud architectures on AWS and GCP, with expertise in infrastructure provisioning & automation, serverless architecture, cloud security & access management, cloud deployment, backend development with Django, and data processing.",
    portrait: { src: "/lovable-uploads/40411277-a489-4bda-92c6-99b79c3c9eeb.png", alt: "Diganth S.", width: 384, height: 384 },
    experience: "2+", experienceLabel: "Years Experience",
    certifications: [
      { image: "/lovable-uploads/aws-solutions-architect.png", alt: "AWS Certified Solutions Architect", label: "AWS Certified Solutions Architect – Associate", destination: external("https://www.credly.com/badges/41d10705-1453-47d1-845d-e2468b8ad8ce/public_url", "AWS Certified Solutions Architect – Associate") },
      { image: "/lovable-uploads/aws-cloud-practitioner.png", alt: "AWS Certified Cloud Practitioner", label: "AWS Certified Cloud Practitioner", destination: external("https://www.credly.com/badges/d22e5c2a-d1ef-46db-8ca5-7064e89264a7/public_url", "AWS Certified Cloud Practitioner") },
    ],
  },
  experience: { employer: "LogiSian Technology Solutions Pvt. Ltd.", role: "Operations - Data & Systems", period: "Aug 2022 - Present", destination: external("https://logisian.in/", "LogiSian Technology Solutions Pvt. Ltd."), accomplishments: ["Managing e-commerce clients database, performing CRUD operations.", "Updating and optimizing product content to enhance discoverability for application users.", "Terraform scripts for automated cloud resource provisioning.", "Deploying and managing applications on Google Cloud Platform (GCP).", "Managing Google Analytics & Google Search Console for website tracking and performance analysis."] },
  skills: [
    { title: "Cloud Solutions", items: ["Cloud Platforms: AWS, GCP", "Infrastructure as Code: Terraform for automated resource provisioning", "Containerization: Docker, Amazon ECR, Cloud Run", "Serverless Architecture: AWS Lambda functions, API Gateway, S3", "Cloud Cost Optimization: Migrated EC2 workloads to Lambda for cost efficiency", "Event-Driven Architecture: AWS EventBridge with Lambda workflows", "Security & IAM: Role-based access control, policy management"] },
    { title: "Backend Development", items: ["Python Development: Django framework, boto3 SDK", "API Integration: Building RESTful APIs for data extraction", "Automation: Scheduled Python scripts with cron jobs in EC2 for data processing", "Linux Systems: Shell scripting (Linux, Debian)", "Website performance analysis: Google Analytics & Google Search Console"] },
    { title: "Database Management", items: ["E-commerce Data: Product database maintenance and optimization", "Cloud Databases: Configuring Firestore, Amazon RDS, and S3", "Data Migration: Transferring Excel records to PostgreSQL", "Data Operations: Implementing CRUD operations with boto3"] },
  ],
  education: { degree: "B.E in Biotechnology Engineering", university: "Visvesvaraya Technological University", period: "2018 - 2022", result: "8.8 CGPA" },
  contact: { phone: "+91-9449195773", email: "daipaldiganths@gmail.com", location: "Bantwala, Dakshina Kannada, Karnataka 574231", github: external("https://github.com/Glycine26", "GitHub"), linkedin: external("https://www.linkedin.com/in/diganths", "LinkedIn") },
} as const;
