import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20">
      <div ref={containerRef} className="section-container">
        <div className="text-center mb-8 reveal">
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <p className="text-gray-600">Get in touch</p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-1 gap-8">
          <div className="space-y-8 reveal stagger-delay-2 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium">Phone</p>
                  <p className="text-gray-500">+91-9449195773</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium">Email</p>
                  <a href="mailto:daipaldiganths@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
                    daipaldiganths@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium">Location</p>
                  <p className="text-gray-500">Bantwala, Dakshina Kannada, Karnataka 574231</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Glycine26" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/diganths" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;