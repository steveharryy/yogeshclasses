import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacultyPage from './pages/FacultyPage';
import LifeAtYKCPage from './pages/LifeAtYKCPage';

function App() {
  const location = useLocation();

  // Handle hash navigation for home page sections
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/life-at-ykc" element={<LifeAtYKCPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;