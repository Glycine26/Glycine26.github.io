import { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
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
    <section id="education" className="py-12 bg-secondary/30">
      <div ref={containerRef} className="section-container">
        <div className="text-center mb-10 reveal">
          <h2 className="text-4xl font-bold mb-2">Education</h2>
          <p className="text-gray-600">My academic background</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 md:p-8 reveal stagger-delay-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold">B.E in Biotechnology Engineering</h3>
                <p className="text-gray-600">Visvesvaraya Technological University</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">2018 - 2022</span>
                  <span className="text-primary font-medium">8.8 CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;