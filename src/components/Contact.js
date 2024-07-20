import React from 'react';

const Contact = ({ toggleVanta }) => {
    return (
        <div className="contact-section">
            <button onClick={toggleVanta} title="Toggle Background Effect">
                <i className="fas fa-power-off"></i>
            </button>
            <a href="https://github.com/austinaguirre" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/austin-aguirre-939b241b0" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:austinaguirre2002@gmail.com">
                <i className="fas fa-envelope"></i> Email Me
            </a>
            <a href="/Aguirre_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i> Resume
            </a>
        </div>
    );
};

export default Contact;
