import React from 'react';
import Contact from './Contact';

const Sidebar = ({ isWideScreen, activeSection, toggleVanta, aboutRef, experienceRef, projectsRef, scrollToRef }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <h1>Austin Aguirre</h1>
                <h4>Dedicated Computer Science professional specializing in full-stack development with a strong foundation in software engineering principles.</h4>
                {isWideScreen ? (
                    <ul>
                        <li className={activeSection === 'About' ? 'active' : ''} onClick={() => scrollToRef(aboutRef)}>About</li>
                        <li className={activeSection === 'Experience' ? 'active' : ''} onClick={() => scrollToRef(experienceRef)}>Experience</li>
                        <li className={activeSection === 'Projects' ? 'active' : ''} onClick={() => scrollToRef(projectsRef)}>Projects</li>
                    </ul>
                ) : (
                    <></>
                )}
            </div>
            <Contact toggleVanta={toggleVanta} />
        </div>
    );
};

export default Sidebar;
