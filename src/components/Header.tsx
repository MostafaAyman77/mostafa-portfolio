import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'skills', id: 'skills' },
    { key: 'projects', id: 'projects' },
    { key: 'experience', id: 'experience' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white hover:opacity-80 transition-opacity"
          >
            Mostafa Elalfy
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://https://github.com/MostafaAyman77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-ayman77/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5" />
              <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in bg-white dark:bg-gray-900">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-semibold text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors py-2"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
