// Import the base Card component
import React from 'react';
import Card from './Card';

// AboutCard component
export const AboutCard = ({ children, className = '', ...props }) => {
    return (
        <Card className={`about-card ${className}`} {...props}>
            {children}
        </Card>
    );
};

// ContentCard component acts as an intermediary for common features
export const ContentCard = ({ children, date, title, tags, className, ...props }) => {
    return (
        <Card className={`content-card ${className}`} {...props}>
            <div className="card-flex">
                {date ? (
                    <div className="card-date">{date}</div>
                ) : (
                    <></>
                )}
                <div className="card-main-content">
                    <h4 className="card-title">{title}</h4>
                    {children}
                    <ul className="card-tags">
                        {tags.map((tag, index) => (
                            <li key={index}><div className='card-tag-text'>{tag}</div></li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};

// ExperienceCard component
export const ExperienceCard = ({ children, className = '', ...props }) => {
    return (
        <ContentCard className={`experience-card ${className}`} {...props}>
            {children}
        </ContentCard>
    );
};

// ProjectsCard component
export const ProjectsCard = ({ children, className = '', ...props }) => {
    return (
        <ContentCard className={`projects-card ${className}`} {...props}>
            {children}
        </ContentCard>
    );
};
