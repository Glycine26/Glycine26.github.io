import { ArrowDown, Mail, Phone, MapPin, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  
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

  const toggleWidget = (widget: string) => {
    if (activeWidget === widget) {
      setActiveWidget(null);
    } else {
      setActiveWidget(widget);
    }
  };

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Fixed position sidebar for contact widgets */}
      <div className="fixed left-6 top-1/3 flex flex-col items-center space-y-4 z-10">
        <button 
          onClick={() => toggleWidget('email')}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </button>
        <button 
          onClick={() => toggleWidget('phone')}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
          aria-label="Phone"
        >
          <Phone className="h-5 w-5" />
        </button>
        <button 
          onClick={() => toggleWidget('location')}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
          aria-label="Location"
        >
          <MapPin className="h-5 w-5" />
        </button>
      </div>

      {/* Contact information widgets */}
      {activeWidget === 'email' && (
        <div className="fixed left-24 top-1/3 bg-white rounded-lg shadow-lg p-4 animate-fadeIn z-10 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Email</h3>
            <button onClick={() => setActiveWidget(null)} className="text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
          </div>
          <a href="mailto:daipaldiganths@gmail.com" className="text-blue-600 hover:underline">
            daipaldiganths@gmail.com
          </a>
        </div>
      )}
      
      {activeWidget === 'phone' && (
        <div className="fixed left-24 top-1/3 bg-white rounded-lg shadow-lg p-4 animate-fadeIn z-10 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Phone</h3>
            <button onClick={() => setActiveWidget(null)} className="text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
          </div>
          <p>+91-9449195773</p>
        </div>
      )}
      
      {activeWidget === 'location' && (
        <div className="fixed left-24 top-1/3 bg-white rounded-lg shadow-lg p-4 animate-fadeIn z-10 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Location</h3>
            <button onClick={() => setActiveWidget(null)} className="text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
          </div>
          <p>Bantwala, Dakshina Kannada, Karnataka 574231</p>
        </div>
      )}
      
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#f0f4f8,_transparent_40%),radial-gradient(circle_at_bottom_left,_#e6f0fa,_transparent_40%)]"
        aria-hidden="true"
      ></div>
      
      <div 
        ref={containerRef}
        className="section-container text-center flex flex-col items-center justify-center"
      >
        <div className="space-y-6 max-w-3xl mx-auto">
          <Avatar className="w-60 h-60 mx-auto mb-8 border-2 border-primary/20 flex-shrink-0">
            <div className="w-60 h-60 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
              <img 
                src="/lovable-uploads/diganth_s.jpg" 
                alt="Diganth S." 
                className="w-full h-full object-cover" 
                style={{ objectPosition: "center 35%" }}
              />
            </div>            
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <p className="text-gray-500 text-sm md:text-base font-medium tracking-wider uppercase reveal stagger-delay-2">
            HELLO, I'M
          </p>
          <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight reveal stagger-delay-3">
            Diganth S.
          </h1>
          <p className="text-xl md:text-2xl text-foreground reveal stagger-delay-4 max-w-2xl mx-auto">
            Cloud Solutions Developer | Python Backend Developer
          </p>
          <p className="text-lg md:text-xl text-foreground reveal stagger-delay-5 max-w-2xl mx-auto">
            AWS Certified Solutions Architect – Associate
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500 mb-2">Scroll down</span>
            <ArrowDown className="h-5 w-5 text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;