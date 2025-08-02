
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    let particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive particle count
    const colors = ['#4EEAFF', '#8B5CF6', '#D946EF', '#4ADE80'];
    
    // Create particles
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
        // Connect particles that are close
        connectParticles(particle, index);
      });
    };

    // Connect nearby particles with lines
    const connectParticles = (particle: Particle, index: number) => {
      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x;
        const dy = particle.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };

    createParticles();
    
    // Animation loop
    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;
