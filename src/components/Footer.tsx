
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h2 className="text-xl font-display font-bold tracking-tight">
                Diganth S.
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
            Cloud Solutions Developer | Python Backend Developer
            </p>
            <p className="text-muted-foreground text-sm mt-2">
            AWS Certified Solutions Architect – Associate
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Diganth S. All rights reserved.
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
