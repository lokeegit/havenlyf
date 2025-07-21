import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import ServiceChatbot from './ServiceChatbot';
import SpinTheWheel from './SpinTheWheel';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'About Us', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-elegant border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Header Layout */}
          <div className="flex md:hidden justify-between items-center relative">
            {/* Mobile Menu Button on Left */}
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors z-20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Centered Logo */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gradient cursor-pointer z-10"
              onClick={() => handleNavigation('home')}
            >
              HAVENLYF
            </div>
            {/* Invisible placeholder for right side to keep logo centered */}
            <div className="w-10 h-10"></div>
          </div>
          {/* Desktop Header Layout */}
          <div className="hidden md:flex justify-between items-center">
            {/* Logo */}
            <div 
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              HAVENLYF
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`font-medium transition-all duration-300 relative ${
                    currentPage === item.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {currentPage === item.path && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
                  )}
                </button>
              ))}
            </nav>
            {/* Contact Button */}
            <button
              onClick={() => handleNavigation('contact')}
              className="hidden md:block btn-primary"
            >
              Get Free Consultation
            </button>
          </div>
          {/* Mobile Navigation Dropdown with Animation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border animate-slide-down motion-safe:animate-fade-in-up origin-top-left">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`text-left font-medium transition-colors ${
                      currentPage === item.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavigation('contact')}
                  className="btn-primary w-full text-center mt-4"
                >
                  Get Free Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      <ServiceChatbot />
      <SpinTheWheel />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-gradient">HAVENLYF</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your Partner in Innovative Marketing, Seamless Events, and Intelligent Automation. 
                We empower businesses with cutting-edge solutions and personalized service.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/havenlyf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail size={16} />
                  <span>havenlyf@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone size={16} />
                  <span>+91 72002 33933</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone size={16} />
                  <span>+91 97910 72572</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone size={16} />
                  <span>+91 90036 55255</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HAVENLYF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;