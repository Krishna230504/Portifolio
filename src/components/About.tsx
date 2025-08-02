import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and decoration */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-neon-purple glass animate-float">
              {/* Replace with your actual image */}
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center text-white">
                <img src="/profile2.jpg" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-neon-blue rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 right-6 w-40 h-40 bg-neon-purple/20 rounded-full filter blur-xl"></div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-neon-blue animate-slide-right">
              Creative Developer & Designer
            </h3>
            
            <div className="space-y-4 text-gray-300 mb-8 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <p>
                I'm a passionate web developer with expertise in creating engaging digital experiences. 
                With a background in design and programming, I bridge the gap between aesthetics and functionality.
              </p>
              
              <p>
                My journey began 5 years ago when I discovered my passion for coding and creating visually stunning interfaces. 
                Since then, I've worked on various projects ranging from simple websites to complex web applications.
              </p>
              
              <p>
                I'm driven by the desire to create meaningful digital experiences that not only look good but also solve real problems.
                I believe in clean code, user-centered design, and continuous learning.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-slide-right" style={{ animationDelay: '0.4s' }}>
              <StatCard icon={<Briefcase className="h-6 w-6" />} value="1+" label="Years Experience" />
              <StatCard icon={<Award className="h-6 w-6" />} value="5+" label="Completed Projects" />
            </div>
          </div>
        </div>
        
        {/* Journey Timeline */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-neon-blue">My Journey</h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple to-neon-blue"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: '2025',
                  title: 'Frontend Developer Intern',
                  company: 'Karkhana.io',
                  description: 'Part of a team developing a web platform to automate CAD file costing, handling customer uploads and frontend user interface workflows.'
                },
                {
                  year: '2024',
                  title: 'Intern',
                  company: 'BHEL(Bharat Heavy Electricals Limited)',
                  description: '◦ Optimized automation processes by implementing PLC logic, enhancing system efficiency by 5% through streamlined signal processing and reduced cycle times.'
                }
              ].map((item, index) => (
                <div 
                  key={item.year} 
                  className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}
                >
                  {/* Content box */}
                  <div className="w-5/12">
                    <div className="glass p-6 rounded-lg border border-neon-purple/20 animate-slide-up">
                      <div className="text-xl font-bold text-neon-purple mb-2">{item.year}</div>
                      <h4 className="text-lg font-bold text-neon-blue">{item.title}</h4>
                      <h5 className="text-neon-purple mb-2">{item.company}</h5>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-neon-purple border-4 border-background"></div>
                  </div>
                  
                  {/* Empty space on the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="glass p-4 rounded-lg border border-neon-purple/20 text-center">
    <div className="text-neon-blue mb-2 flex justify-center">
      {icon}
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

export default About;
