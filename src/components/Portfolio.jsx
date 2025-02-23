import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Monitor, Server, Layout, Menu, X } from 'lucide-react';
import '../styles/custom.css';

import AI from '../assets/Agent.png';
import image from '../assets/vinitha.jpg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Automation",
      description: "AI-powered platform for Agile project management, featuring tools to create stakeholder agents, project managers, Scrum Masters, designers, developers, mind maps, custom agents, and LinkedIn job posting agents",
      image: AI,
      tags: ["React", "Python", "Crew AI"],
      category: "AI"
    },
  ];

  const skills = {
    "Frontend": ["HTML","CSS","JavaScript","Bootstrap","React","Next.js","Tailwind CSS"],
    "Backend": ["Crew AI", "Python", "PostgreSQL", "Django", "PraisonAI"],
    "DevOps": ["Docker"],
    "No Code Automation": ["n8n"],
    "Tools": ["Git", "VS Code", "Github", "Postman"]
  };

  const experiences = [
    {
      company: "Gooroo Mobility India Private Limited,Chennai",
      position: " junior Full Stack Developer",
      period: " Apr 2024 - Present",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              VINITHA A
            </h1>
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`${
                      activeSection === item
                        ? 'text-purple-600'
                        : 'text-gray-600'
                    } hover:text-purple-600 transition-colors capitalize`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg">
              {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 ${
                    activeSection === item
                      ? 'text-purple-600'
                      : 'text-gray-600'
                  } hover:bg-gray-100 transition-colors capitalize`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="block text-gray-900"> VINITHA</span>
          <span className="block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Full Stack Developer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Full Stack Developer specializing in building exceptional digital experiences.
          Focused on creating innovative solutions that make a difference.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            View Projects
          </a>
        </div>
        <div className="flex space-x-4 pt-4 justify-center md:justify-start">
          <a href="https://github.com/Vinitha20013" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/vinitha2001" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:vinithatvm212@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="relative aspect-square flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full animate-pulse" />
        <img
          src={image}
          alt="Profile"
          className="relative z-10 rounded-full w-80 h-80 object-cover object-center md:w-full md:h-full"
             
        />
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white px-4">
        <div className="max-w-12xl mx-auto md:px-40">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-xl bg-white shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category === 'Frontend' && <Layout className="text-purple-600 h-6 w-6" />}
                  {category === 'Backend' && <Server className="text-purple-600 h-6 w-6" />}
                  {category === 'DevOps' && <Code className="text-purple-600 h-6 w-6" />}
                  {category === 'Tools' && <Monitor className="text-purple-600 h-6 w-6" />}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="space-y-2">
                  {items.map((skill, index) => (
                    <div
                      key={index}
                      className="p-2 rounded bg-gray-50 hover:bg-purple-100 transition-colors text-center md:text-left"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-purple-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-600">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="p-8 rounded-xl bg-white shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/Vinitha20013"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vinitha2001"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:vinithatvm212@gmail.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
                
  );
};

export default Portfolio;


