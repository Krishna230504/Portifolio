
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Krishnavamsi'
    };

    emailjs.send(
      'service_fios46v',
      'template_xqowqth',
      templateParams,
      'bc65eBvqnFPya8Ef4'
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('❌ EmailJS error:', error);
      alert('Message failed to send. Try again later.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="animate-slide-right">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-lg border border-neon-purple/20">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Send Message</h3>
              <div className="space-y-6">
                <InputField label="Your Name" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tony Stark" />
                <InputField label="Your Email" id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jarvis@example.com" />
                <InputField label="Subject" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/50"
                    placeholder="Tell me about your project..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white py-6 interactive"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-left">
            <div className="glass p-8 rounded-lg border border-neon-purple/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Contact Information</h3>

              <div className="space-y-8 mb-12">
                <ContactItem 
                  icon={<Mail className="h-6 w-6 text-neon-purple" />}
                  title="Email"
                  content="guntupallikrishnavamsi@gmail.com"
                  href="mailto:hello@yourname.com"
                />
                <ContactItem 
                  icon={<MessageSquare className="h-6 w-6 text-neon-green" />}
                  title="Discord"
                  content="@tom"
                  href="#"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-neon-blue">Social Media</h3>
              <div className="flex space-x-4">
                <SocialLink 
                  icon={<Github className="h-5 w-5" />}
                  href="https://github.com/Krishna230504"
                  label="GitHub"
                />
                <SocialLink 
                  icon={<Linkedin className="h-5 w-5" />}
                  href="https://www.linkedin.com/in/krishnavamsi07/"
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Krishnavamsi. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

const InputField = ({ label, ...props }: any) => (
  <div>
    <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <Input 
      {...props}
      required
      className="bg-gray-900/50 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/50"
    />
  </div>
);

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, href }) => (
  <a 
    href={href}
    className="flex items-center space-x-3 group interactive"
    rel="noopener noreferrer"
  >
    <div className="p-3 rounded-full bg-gray-800/50 border border-neon-purple/20 group-hover:border-neon-purple transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-400">{title}</h4>
      <p className="text-white group-hover:text-neon-blue transition-colors">{content}</p>
    </div>
  </a>
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-full bg-gray-800/50 border border-neon-purple/20 hover:border-neon-purple transition-colors flex items-center justify-center interactive"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;
