import { useEffect, useRef } from 'react';
import Skills from '@/components/Skills';

const Experience = () => {
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
    <section id="experience" className="py-12 bg-secondary/50">
    <div ref={containerRef} className="section-container">
      <div className="text-center mb-10 reveal">
        <h2 className="text-4xl font-bold mb-2">Work Experience</h2>
      </div>
        
      <div className="mt-12 space-y-12">
      <div className="glass-effect rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg reveal stagger-delay-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold">
              <a 
                href="https://logisian.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                LogiSian Technology Solutions Pvt. Ltd.
              </a>
            </h3>
            <p className="text-base text-gray-700">Operations - Data & Systems</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            Aug 2022 - Present
          </div>
        </div>
        <p className="text-muted-foreground mb-6">
          <ul className="list-disc text-foreground space-y-2 pl-5">
            <li>Managing e-commerce clients database, performing CRUD operations.</li>
            <li>Updating and optimizing product content to enhance discoverability for application users.</li>
            <li>Terraform scripts for automated cloud resource provisioning.</li>
            <li>Deploying and managing applications on Google Cloud Platform (GCP).</li>
            <li>Managing Google Analytics & Google Search Console for website tracking and performance analysis.</li>
          </ul>
        </p>
      </div>
    </div>
          
          {/* Skills component is now imported and rendered here */}
          {/* <Skills /> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Experience;