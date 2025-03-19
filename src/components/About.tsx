import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
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
    <section id="about" className="py-12 bg-secondary/50">
    <div ref={containerRef} className="section-container">
      <div className="text-center mb-10 reveal">
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
      </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-6 reveal stagger-delay-1">
              <Avatar className="w-48 h-48 border-2 border-primary/20 flex-shrink-0">
                <AvatarImage src="/lovable-uploads/40411277-a489-4bda-92c6-99b79c3c9eeb.png" alt="Diganth S." className="object-cover" />
                <AvatarFallback>DS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-foreground leading-relaxed text-lg">
                As a Cloud Developer, I'm specializing in developing cloud architectures on AWS and GCP, 
                with expertise in infrastructure provisioning & automation, serverless architecture, cloud security & access management, cloud deployment, backend development with Django, and data processing.                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 space-y-6">
            {/* Years Experience Box */}
            <div className="glass-effect rounded-xl p-4 reveal stagger-delay-2">
              <div className="text-primary text-4xl font-bold mb-1">2+</div>
              <div className="text-muted-foreground text-lg">Years Experience</div>
            </div>
            
            {/* Certifications Section */}
            <div className="flex justify-center mb-8 reveal">
              <div className="inline-block px-5 py-2 bg-primary/10 rounded-full">
              <span className="text-2xl font-bold mb-2">Certifications</span>
              </div>
            </div>
              
              <div className="glass-effect rounded-xl p-5 reveal stagger-delay-4">
                <a 
                  href="https://www.credly.com/badges/41d10705-1453-47d1-845d-e2468b8ad8ce/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/aws-solutions-architect.png" 
                    alt="AWS Certified Solutions Architect" 
                    className="w-20 h-20" 
                  />
                  <div className="text-foreground text-md">AWS Certified Solutions Architect – Associate</div>
                </a>
              </div>
              
              <div className="glass-effect rounded-xl p-5 reveal stagger-delay-5">
                <a 
                  href="https://www.credly.com/badges/d22e5c2a-d1ef-46db-8ca5-7064e89264a7/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/aws-cloud-practitioner.png" 
                    alt="AWS Certified Cloud Practitioner" 
                    className="w-20 h-20" 
                  />
                  <div className="text-foreground text-md">AWS Certified Cloud Practitioner</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;