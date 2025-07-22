
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  // Project placeholders - replace with your actual projects
  const projects: Project[] = [
    {
      title: 'Project Cost Management',
      description: 'Built an interactive web application for managing project costs and expenses. Implemented features for adding, editing, and deleting project items, with real-time updates and validation.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
      tags: ['React', 'typescript', 'Firebase', 'Material UI'],
      github: 'https://github.com/Krishna230504/Project_Cost_Manager',
      demo: 'https://projectcostmanager.netlify.app'
    },
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot that helps to resolve your simple queries like a itenary for a trip, weather, etc.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      tags: ['HTML', 'OpenAI API', 'CSS', 'Hugging Face'],
      github: 'https://github.com/Krishna230504/chatbot',
      demo: 'https://aiofkv.ccbp.tech/'
    },
    {
      title: '3D Portfolio Website',
      description: 'An interactive portfolio website featuring 3D elements, animations, and immersive user experience.',
      image: '/port.png',
      tags: ['Three.js', 'React', 'GSAP', 'Tailwind CSS'],
      github: 'https://github.com/Krishna230504/crazy-portfolio-lab',
      demo: '#'
    },
    {
      title: ' Match and Score Game',
      description: 'Match & Score is a fast-paced, interactive game that randomly displays an image from 3 or more categories, such as fruits and animals. Players must select the correct category. A correct match increases the score by 1, while an incorrect match instantly ends the game.',
      image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['React','REST API','Express'],
      github: 'https://github.com/Krishna230504/MatchGame',
      demo: 'https://matchgame230504.ccbp.tech/'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Check out some of my recent work. Each project represents unique challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card"
              style={{ animation: `slide-up 0.6s ease-out forwards`, animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-all duration-500"
              />
              
              <div className="project-overlay">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-neon-purple/20 border border-neon-purple/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
        {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="sm"
        className="interactive flex items-center gap-2 border-neon-purple text-neon-purple hover:bg-neon-purple/20"
      >
        <Github className="h-4 w-4" />
        Code
      </Button>
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="sm"
        className="interactive flex items-center gap-2 bg-neon-blue hover:bg-neon-blue/80"
      >
        <Code className="h-4 w-4" />
        Live Demo
      </Button>
    </a>
  )}
</div>

              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-6 interactive">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
