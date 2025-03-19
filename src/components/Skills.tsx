import { useEffect, useRef } from 'react';
import { Cloud, Code, Database } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Skills = () => {
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

  return (
    <section id="skills" className="py-12 bg-secondary/50">
    <div ref={containerRef} className="section-container">
      <div className="text-center mb-10 reveal">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
      </div>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="cloud-solutions" className="border-b border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Cloud className="h-5 w-5" />
                </div>
                <span className="font-semibold">Cloud Solutions</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-14">
                <ul className="list-disc space-y-2 pl-5">
                  <li className="text-foreground text-base">Cloud Platforms: AWS, GCP</li>
                  <li className="text-foreground text-base">Infrastructure as Code: Terraform for automated resource provisioning</li>
                  <li className="text-foreground text-base">Containerization: Docker, Amazon ECR, Cloud Run</li>
                  <li className="text-foreground text-base">Serverless Architecture: AWS Lambda functions, API Gateway, S3</li>
                  <li className="text-foreground text-base">Cloud Cost Optimization: Migrated EC2 workloads to Lambda for cost efficiency</li>
                  <li className="text-foreground text-base">Event-Driven Architecture: AWS EventBridge with Lambda workflows</li>
                  <li className="text-foreground text-base">Security & IAM: Role-based access control, policy management</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="backend-development" className="border-b border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Code className="h-5 w-5" />
                </div>
                <span className="font-semibold">Backend Development</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-14">
                <ul className="list-disc space-y-2 pl-5">
                  <li className="text-foreground text-base">Python Development: Django framework, boto3 SDK</li>
                  <li className="text-foreground text-base">API Integration: Building RESTful APIs for data extraction</li>
                  <li className="text-foreground text-base">Automation: Scheduled Python scripts with cron jobs in EC2 for data processing</li>
                  <li className="text-foreground text-base">Linux Systems: Shell scripting (Linux, Debian)</li>
                  <li className="text-foreground text-base">Website performance analysis: Google Analytics & Google Search Console</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="database-management" className="border-b border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Database className="h-5 w-5" />
                </div>
                <span className="font-semibold">Database Management</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-14">
                <ul className="list-disc space-y-2 pl-5">
                  <li className="text-foreground text-base">E-commerce Data: Product database maintenance and optimization</li>
                  <li className="text-foreground text-base">Cloud Databases: Configuring Firestore, Amazon RDS, and S3</li>
                  <li className="text-foreground text-base">Data Migration: Transferring Excel records to PostgreSQL</li>
                  <li className="text-foreground text-base">Data Operations: Implementing CRUD operations with boto3</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Skills;