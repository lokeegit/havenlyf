import React, { useState } from 'react';
import Layout from '../components/Layout';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigation}>
      {renderPage()}
    </Layout>
  );
};

export default Index;
