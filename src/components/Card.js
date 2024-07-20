import React from 'react';
import './Card.css'; 

const Card = ({ children, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
