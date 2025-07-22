import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="relative">
      {/* Loading screen */}
      <div 
        className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-4xl font-bold">
          <span className="text-neon-purple">Port</span>
          <span className="text-neon-blue">folio</span>
          <span className="text-white">.</span>
        </div>
      </div>
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Certificates section */}
        <section id="certificates" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-16">
              <h2 className="section-heading">Certificates</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6"></div>
              <p className="text-gray-300 text-center max-w-2xl">
                Professional certifications and achievements that validate my expertise and commitment to continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'AWS Cloud Practitioner',
                  company: 'NXTWave',
                  year: '2024',
                  logo: '/AWS.png',
                  driveLink: 'https://drive.google.com/file/d/1DsnF7u15vXBIu6mQvuhgZ_R2SldI6bvp/view'
                },
                {
                  name: 'UI/UX Design',
                  company: 'NXTWave',
                  year: '2024',
                  logo: '/figma.jpeg',
                  driveLink: 'https://drive.google.com/file/d/1fQZLFLvgvVjoPmvnISAmaIPQt9Y9KDgE/view'
                },
                {
                  name: 'Generative AI',
                  company: 'NXTWave',
                  year: '2024',
                  logo: '/gen.webp',
                  driveLink: 'https://drive.google.com/file/d/15DJ4pFMkHSHZv7ejGdRHIiQuethtbrqn/view'
                },
                {
                  name: 'Microsoft Power BI',
                  company: 'NXTWave',
                  year: '2024',
                  logo: '/powerbi.png',
                  driveLink: 'https://drive.google.com/file/d/1DsnoLsBEwE5yWr-iTco1_MeCnQj3X-Tw/view'
                },
                {
                  name: 'Ethical Hacking',
                  company: 'NXTWave',
                  year: '2023',
                  logo: '/ethiical.png',
                  driveLink: 'https://drive.google.com/file/d/1DqrK1ChK3Zn9pYtODUF0qqRdQHysA1AI/view'
                },
                {
                  name: 'Into to Linear Algebra',
                  company: 'Mathlab',
                  year: '2024',
                  logo: '/mathlas.jpeg',
                  driveLink: 'https://drive.google.com/file/d/1kz-se70E-8Dosgd7Zc4Kqj50hTTCpqac/view'
                }
              ].map((certificate, index) => (
                <div 
                  key={certificate.name} 
                  className="glass p-6 rounded-lg border border-neon-purple/20 animate-slide-up hover:border-neon-blue/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-purple/30 group-hover:border-neon-blue/50 transition-colors duration-300 flex-shrink-0">
                      <img 
                        src={certificate.logo} 
                        alt={`${certificate.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold text-neon-blue mb-1">{certificate.name}</h3>
                      <p className="text-neon-purple text-sm">{certificate.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Issued: {certificate.year}
                    </div>
                    <Button
                      size="sm"
                      className="bg-neon-purple hover:bg-neon-purple/80 text-white transition-all duration-300 group-hover:scale-105"
                      onClick={() => window.open(certificate.driveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Contact />
      </div>
    </div>
  );
};

export default Index;
