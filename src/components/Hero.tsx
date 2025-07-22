import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Star, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ['Developer', 'Designer', 'Creator', 'Innovator'];
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingSpeed = useRef(150);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex.current];
      
      if (isDeleting.current) {
        setTypedText(currentPhrase.substring(0, charIndex.current - 1));
        charIndex.current--;
        typingSpeed.current = 75;
      } else {
        setTypedText(currentPhrase.substring(0, charIndex.current + 1));
        charIndex.current++;
        typingSpeed.current = 150;
      }
      
      // Handle phrase complete
      if (!isDeleting.current && charIndex.current === currentPhrase.length) {
        isDeleting.current = true;
        typingSpeed.current = 1000; // Pause at end
      }
      
      // Handle deletion complete
      if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      }
    };
    
    const timer = setTimeout(type, typingSpeed.current);
    return () => clearTimeout(timer);
  }, [typedText]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center hero-gradient">
      {/* Abstract shapes */}
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-neon-purple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-neon-blue/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
              Hi, I'm <span className="text-neon-purple">Krishnavamsi</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I'm a <span className="text-neon-blue ml-3 relative">{typedText}<span className="absolute right-[-4px] top-0 h-full w-[2px] bg-neon-blue animate-pulse"></span></span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Creating digital experiences that blend creativity with functionality. 
              I'm passionate about building stunning interfaces and powerful applications.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-6 flex items-center gap-2 interactive">
                <Code className="h-5 w-5" />
                View Projects
              </Button>
              
              <a href="#contact">
                <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-6 py-6 flex items-center gap-2 interactive">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <Star className="h-5 w-5 text-neon-green" />
              <span className="text-gray-300">Available for freelance projects</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Profile container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-purple animate-float relative z-10">
                {/* Replace with your own image */}
                <div className="w-full h-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white text-xl">
                  <img src="/profile.jpg" />
                </div>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 border-4 border-dashed border-neon-blue rounded-full animate-rotate-slow"></div>
              
              {/* Blob backgrounds */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-blue/30 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
