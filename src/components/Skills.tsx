
import React, { useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, icon: '💻', color: 'from-yellow-300 to-yellow-500' },
    { name: 'React', level: 85, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 80, icon: '📘', color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 75, icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', color: 'from-orange-400 to-red-500' },
    { name: 'UI/UX Design', level: 85, icon: '🎯', color: 'from-neon-purple to-neon-pink' },
<<<<<<< HEAD
    { name: 'Express.js', level: 80, icon: '⚡', color: 'from-gray-600 to-gray-900' },
    { name: 'Tailwind CSS', level: 90, icon: '🌊', color: 'from-cyan-400 to-blue-500' },
    { name: 'Generative AI', level: 80, icon: '🤖', color: 'from-fuchsia-500 to-purple-700' },
    { name: 'Google Firebase', level: 75, icon: '🔥', color: 'from-yellow-400 to-orange-600' },
    { name: 'Machine Learning', level: 85, icon: '🧠', color: 'from-green-300 to-blue-500' },
    { name: 'Streamlit', level: 70, icon: '📊', color: 'from-pink-400 to-red-500' },
=======
    { name: 'Next.js', level: 80, icon: '⚡', color: 'from-gray-600 to-gray-900' },
    { name: 'Tailwind CSS', level: 90, icon: '🌊', color: 'from-cyan-400 to-blue-500' },
>>>>>>> 619c606b01a0cd038d3df5c670f0fb84dca475d1
  ];

  return (
    <section id="skills" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Here are the technologies and skills I've mastered over my journey as a developer.
            I'm continuously learning and expanding this list.
          </p>
        </div>
        
        <div 
          ref={containerRef} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card glass"
              style={{ animation: `slide-up 0.5s ease-out forwards`, animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%`, animation: `slide-right 1s ease-out forwards`, animationDelay: `${index * 0.1 + 0.3}s` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass p-6 rounded-lg max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 text-center text-neon-blue">Personal Development</h3>
            <p className="text-gray-300 mb-6 text-center">
              Beyond technical skills, I value constant learning, problem-solving, and creative thinking. 
              I'm dedicated to writing clean, efficient code and creating exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
<<<<<<< HEAD
              {['Leadership', 'Creative Thinking', 'Communication', 'Team Collaboration', 'Adaptability', 'Attention to Detail'].map((skill, index) => (
=======
              {['Problem Solving', 'Creative Thinking', 'Communication', 'Team Collaboration', 'Adaptability', 'Attention to Detail'].map((skill, index) => (
>>>>>>> 619c606b01a0cd038d3df5c670f0fb84dca475d1
                <div 
                  key={skill} 
                  className="py-2 px-4 rounded-full bg-secondary border border-neon-purple/30 text-sm"
                  style={{ animation: `fade-in 0.5s ease-out forwards`, animationDelay: `${index * 0.1 + 1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
