
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Education from '@/components/Education';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
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
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="mt-[-100px]">
        <Skills />
        </div>

        <div className="mt-[-100px]">
        <Experience />
        </div>
        {/* <Certifications /> */}
        <div className="mt-[-100px]">
        <Projects />
        </div>

        <div className="mt-[-100px]">
        <Education />
        </div>

        <div className="mt-[-100px]">
        <Contact />
        </div>
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
