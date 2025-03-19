import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "Pre-Market Pulse",
      description: "Developed a AWS cloud-based architecture for Pre-Market Pulse to process Stock market & financial data for analysis, automated resource management, and implemented a serverless cloud architecture.",
      responsibilities: [
        "API Development: Built APIs for data extraction from external sources like Dhan API and Yahoo Finance.",
        "Automated Data Processing: Developed Python scripts to fetch data, scheduled execution using cron jobs.",
        "Containerization & Deployment: Created Docker images and managed deployments using Amazon ECR.",
        "Serverless Migration: Converted EC2 workloads to AWS Lambda functions, triggered via EventBridge for efficiency and cost optimization.",
        "Cloud Security: Managed IAM policies to ensure secure access control for cloud resources.",
        "Data Backup Management: Implemented automated backup strategies for datasets."

      ],
      tags: ["AWS Cloud", "API Development", "Python Scripting", "CronJobs", "Cloud Storage", "AWS Lambda", "EC2 Migration", "Cloud Security", "Docker", "ECR"],
      imageUrl: "/lovable-uploads/premarket_img.png",
      link: "https://premarketpulse.com/"
    },
    {
      title: "The School of Martial Arts (TSMA)",
      description: "Developed an Attendance Management System for TSMA to track student attendance and generate monthly reports.",
      responsibilities: [
        "Backend Development: Built the Django backend for student attendance tracking.",
        "Database Configuration: PostgreSQL database, and AWS S3 for media storage.",
        "Data Migration: Migrated student records from Excel to PostgreSQL and images to S3.",
        "User Authentication: Secure authentication for user login.",
        "Report Generation: Generate monthly attendance reports in PDF format.",
      ],
      tags: ["Attendance Tracking", "Django", "Backend Development", "PostgreSQL", "AWS S3", "Data Migration", "User Access Control"],
      imageUrl: "/lovable-uploads/tsma-img.png",
      link: "https://www.theschoolofmartialarts.in/"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-secondary/50">
      <div ref={containerRef} className="section-container">
        <div className="text-center mb-10 reveal">
          <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
        </div>

        <h2 className="text-gray-600 text-base font-medium">Most Recent Works</h2>
        <div className="mt-6"></div> 
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="reveal stagger-delay-2 overflow-hidden border-none shadow-md bg-white/90 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {project.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </CardDescription>
                
                {/* <h4 className="text-sm font-semibold mb-2">My Contribution:</h4> */}
                <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-gray-700">
                  {project.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {/* View Project <ArrowUpRight className="ml-1 h-4 w-4" /> */}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;