import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Monitor, Server, Layout, Menu, X, Moon, Sun } from 'lucide-react';

// Import your images
import AI from '../assets/Agent.png';
import image from '../assets/vinitha.jpg';

// Custom CSS
const customStyles = `
  @keyframes gradientBG {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .gradient-text {
    background: linear-gradient(45deg, #6366f1, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% 200%;
    animation: gradientBG 3s ease infinite;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .transition-all {
    transition: all 0.3s ease;
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Sample data objects
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
    "Frontend": ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Next.js", "Tailwind CSS"],
    "Backend": ["Crew AI", "Python", "PostgreSQL", "Django", "PraisonAI"],
    "DevOps": ["Docker"],
    "No Code Automation": ["n8n"],
    "Tools": ["Git", "VS Code", "Github", "Postman"]
  };

  const experiences = [
    {
      company: "Gooroo Mobility India Private Limited,Chennai",
      position: "Junior Full Stack Developer",
      period: "Apr 2024 - Present",
    },
  ];

  // Add custom styles to document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll handler for active section
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

  // Theme handlers
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-all duration-300`}>
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="gradient-text text-xl font-bold">
              VINITHA A
            </h1>

            <div className="flex items-center space-x-8">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`transition-colors capitalize ${
                      activeSection === item
                        ? 'text-purple-500'
                        : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } hover:text-purple-500`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-600 hover:text-purple-500"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden absolute left-0 right-0 top-full ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg transition-all duration-300`}>
              {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 capitalize ${
                    activeSection === item
                      ? 'text-purple-500'
                      : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } hover:bg-gray-100 transition-colors`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className={`pt-32 pb-20 px-4 ${isVisible.home ? 'slide-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="block gradient-text">VINITHA</span>
                <span className="block gradient-text">Full Stack Developer</span>
              </h1>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full Stack Developer specializing in building exceptional digital experiences.
                Focused on creating innovative solutions that make a difference.
              </p>
              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className={`px-6 py-3 rounded-full border ${
                    isDarkMode ? 'border-gray-600' : 'border-gray-300'
                  } hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  View Projects
                </a>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 pt-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/Vinitha20013" 
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/vinitha2001" 
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:vinithatvm212@gmail.com" 
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-all duration-300 transform hover:scale-110`}
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            {/* Profile Image */}
            <div className="relative aspect-square flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full animate-pulse" />
              <img
                src={image}
                alt="Profile"
                className="relative z-10 rounded-full w-80 h-80 object-cover object-center md:w-full md:h-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} px-4 ${
          isVisible.projects ? 'slide-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="gradient-text text-3xl font-bold text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-purple-500 bg-purple-100/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
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
      </section>

         {/* Skills Section - With interactive animations */}
         <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-4 ${isVisible.skills ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div
                key={category}
                className={`card-hover p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category === 'Frontend' && <Layout className="text-purple-500 h-6 w-6" />}
                  {category === 'Backend' && <Server className="text-purple-500 h-6 w-6" />}
                  {category === 'DevOps' && <Code className="text-purple-500 h-6 w-6" />}
                  {category === 'Tools' && <Monitor className="text-purple-500 h-6 w-6" />}
                  <h3 className="text-xl font-bold gradient-text">{category}</h3>
                </div>
                <div className="space-y-2">
                  {items.map((skill, index) => (
                    <div
                      key={index}
                      className={`skill-item-hover p-2 rounded ${
                        isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-50'
                      } text-center md:text-left`}
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

      {/* Experience Section - With slide-in animations */}
      <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} px-4 ${isVisible.experience ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`card-hover p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-purple-500">{exp.company}</p>
                  </div>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {exp.period}
                  </span>
                </div>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Contact Section - With form animations */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-4 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className={`card-hover p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-purple-600 focus:border-purple-600'
                    } focus:outline-none focus:ring-2`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-purple-600 focus:border-purple-600'
                    } focus:outline-none focus:ring-2`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-purple-600 focus:border-purple-600'
                    } focus:outline-none focus:ring-2`}
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
              
              
              
              <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/Vinitha20013"
                    className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-colors`}
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vinitha2001"
                    className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-colors`}
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:vinithatvm212@gmail.com"
                    className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-colors`}
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
