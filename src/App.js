import React, { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import { useDarkMode } from './hooks/useDarkMode';

// Loading animation component
const LoadingAnimation = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
    <div className="relative w-16 h-16">
      <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"></div>
    </div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  // Handle initial dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <main className="relative">
          <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />
          
          {/* Scroll to top button */}
          <ScrollToTopButton />
          
          {/* Background gradient */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
        </main>
      )}
    </div>
  );
}

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  );
};

export default App;
