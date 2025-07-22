import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-black/80 backdrop-blur-md' 
          : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-neon-purple via-neon-blue to-cyan-400 bg-clip-text text-transparent font-serif interactive">
          Krishnavamsi
        </a>
        
        <div className="hidden md:flex space-x-6">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#certificates">Certificates</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>
        
        <a
          href="/KV%20latex%20resume(ATS2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border-neon-purple hover:bg-neon-purple/20 hover:text-neon-purple interactive"
        >
          <Button variant="outline" className="text-white border-neon-purple hover:bg-neon-purple/20 hover:text-neon-purple interactive">
            Resume
          </Button>
        </a>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 interactive"
  >
    {children}
  </a>
);

export default Navbar;
