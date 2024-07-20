import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import VantaBackground from './components/VantaBackground';

function App() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  const [vantaActive, setVantaActive] = useState(true);
  const [activeSection, setActiveSection] = useState('About');
  const mainContentRef = useRef(null);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const mainContentElement = mainContentRef.current;
    if (!mainContentElement) return;


    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const aboutRect = aboutRef.current.getBoundingClientRect();
      const experienceRect = experienceRef.current.getBoundingClientRect();
      const projectsRect = projectsRef.current.getBoundingClientRect();

      const calculateVisibleFraction = (rect) => {
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        return visibleHeight / viewportHeight;
      };

      const aboutVisibleFraction = calculateVisibleFraction(aboutRect);
      const experienceVisibleFraction = calculateVisibleFraction(experienceRect);
      const projectsVisibleFraction = calculateVisibleFraction(projectsRect);

      console.log("scrolling?")

      if (aboutVisibleFraction >= 0.2) {
        setActiveSection('About');
      } else if (experienceVisibleFraction >= 0.2) {
        setActiveSection('Experience');
      } else if (projectsVisibleFraction >= 0.2) {
        setActiveSection('Projects');
      }
    };
    mainContentElement.addEventListener('scroll', handleScroll);

    return () => mainContentElement.removeEventListener('scroll', handleScroll);
  }, [isWideScreen])

  const handleSidebarScroll = (e) => {
    const scrollY = e.deltaY;
    if (mainContentRef.current) {
      mainContentRef.current.scrollBy(0, scrollY);
    }
  };

  const toggleVanta = () => {
    setVantaActive(!vantaActive);
  }

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {vantaActive && <VantaBackground />}
        {isWideScreen ? (
          <>
            <div className="sidebarcontainer" onWheel={handleSidebarScroll}>
              <Sidebar isWideScreen={isWideScreen} activeSection={activeSection} toggleVanta={toggleVanta} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} scrollToRef={scrollToRef} />
            </div>
            <div className="maincontentcontainer" ref={mainContentRef}>
              <Routes>
                <Route path="/" element={<MainContent refs={{ aboutRef, experienceRef, projectsRef }} />} />
              </Routes>
            </div>
          </>
        ) : (
          <>
            <div className="maincontentcontainer" ref={mainContentRef}>
            <Sidebar isWideScreen={isWideScreen} activeSection={activeSection} toggleVanta={toggleVanta} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} scrollToRef={scrollToRef} />
              <Routes>
                <Route path="/" element={<MainContent refs={{ aboutRef, experienceRef, projectsRef }} />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
