import React from 'react';

const Certifications = () => {
  return (
    <section className="section-container reveal">
      <h2 className="section-heading">Certifications</h2>
      
      <div className="space-y-8">
        <div className="stagger-delay-1">
          <img 
            src="/lovable-uploads/aws-solutions-architect.png" 
            alt="AWS Certified Solutions Architect" 
            className="w-24 h-auto mb-3" 
          />
          <p className="text-sm text-foreground">AWS Certified Solutions Architect – Associate</p>
        </div>
        
        <div className="stagger-delay-2">
          <img 
            src="/lovable-uploads/aws-cloud-practitioner.png" 
            alt="AWS Certified Cloud Practitioner" 
            className="w-24 h-auto mb-3" 
          />
          <p className="text-sm text-foreground">AWS Certified Cloud Practitioner</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;