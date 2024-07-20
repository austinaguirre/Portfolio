import React, { useRef, useEffect, useState } from 'react';
// import Card from './Card';
import { AboutCard, ExperienceCard, ProjectsCard } from './SpecializedCards';

const MainContent = ({ refs }) => {
    const {aboutRef, experienceRef, projectsRef } = refs;
    const [hovered, setHovered] = useState(false);

    return (
        <div className="main-content"  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div ref={aboutRef}>
                <AboutCard>
                    <p>At the begining of my softmore year in highschool my fascination with Computer Science began. It started with simple gaming projects and introduction to fundamentals. This initial spark led me to explore the depths of coding. Today, I thrive as a student at Worcester Polytechnic Institute WPI, where I blend innovative coding techniques with high-level problem-solving skills to complete projects.</p>
                    <p>My current passion revolves around leveraging problem-solving and high-level thinking for system design for complex software applications. The thrill for me lies in crafting systems that are not only functionally excellent but also architecturally sound, ensuring that they perform seamlessly under various scenarios.</p>
                    <p>When I'm away from my keyboard, you'll find me indulging in my love for physical fitness, whether it's pushing limits at the gym, catching waves while surfing, or simply hanging out with friends. Each session is a chance to disconnect and draw energy from dynamic physical activities, which I bring back to my coding projects with renewed vigor and a fresh perspective.</p>
                </AboutCard>
            </div>
            <div ref={experienceRef}>
                <section>
                    <ExperienceCard className={hovered ? "dimmed" : ""} date="May - Aug 2024" title="Software Engineering Intern" tags={['JavaScript', 'PHP', 'Apache', 'Web Development']}>
                        <p>Silicon Mountain Technologies</p>
                        <p>At SMT, I honed my full-stack development skills through comprehensive work on franchise websites, collaborating closely with diverse companies to streamline their online presence.</p>
                        <p>My role involved utilizing a blend of JavaScript, PHP, and PostgreSQL to deliver robust, scalable solutions tailored to the unique needs of each franchise.</p>
                    </ExperienceCard>
                    <ExperienceCard className={hovered ? "dimmed" : ""} date="May - July 2023" title="Software Engineering Intern" tags={['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Full-Stack']}>
                        <p>Northrup Grumman Corperation</p>
                        <p>Developed an innovative online lab resource scheduling software using ReactJS, JavaScript, and PostgreSQL, enhancing full stack development skills and problem-solving abilities. </p>
                        <p>I achieved this by actively engaging in frontend design, backend implementation, and database management, which led to more efficient task execution as tracked through Jira and utilized Atlassian collaboration tools.</p>
                        <p>Employed the Agile Software Development Life Cycle to significantly improve user experience and system performance measured by project deliverables and feedback.</p>
                    </ExperienceCard>
                    <ExperienceCard className={hovered ? "dimmed" : ""} date="June - Sep 2022" title="Software Engineering Intern" tags={['Java', 'JavaScript', 'Bootstrap', 'Apache', 'PostgreSQL']}>
                        <p>Silicon Mountain Technologies</p>
                        <p>Leveraging my expertise in Java, I engineered comprehensive solutions for both the frontend and backends of company websites. My approach involved crafting custom functionalities that aligned precisely with the companies' specifications, while also integrating advanced PostgreSQL features to bolster the database capabilities.</p>
                    </ExperienceCard>
                    <ExperienceCard className={hovered ? "dimmed" : ""} date="June - Aug 2021" title="Technical Intern" tags={['Java', 'Systems Design', 'Education']}>
                        <p>Silicon Mountain Technologies</p>
                        <p>I begin my professional journey by debugging and refining internal software at Silicon Mountain Technologies, applying precice Java programming techniques to enhance system reliability and performance.</p>
                    </ExperienceCard>
                </section>
            </div>
            <div ref={projectsRef}>
                <section>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Software Engineering Kickstarter Project" tags={['AWS', 'Cloud Computing', 'ReactJS', 'NodeJS', 'PostgreSql']}>
                        <p>Spearheaded the development of a cloud-native, Kickstarter-style website dedicated to project creation and funding. This initiative demonstrated leadership and strategic foresight in harnessing cutting-edge technologies.</p>
                        <p>Utilized a modern technology stack, including ReactJS and NodeJS, to craft a dynamic and responsive frontend. Simultaneously, I engineered robust backend solutions leveraging Amazon Web Services (AWS), notably AWS RDS.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Genetic Algorithm Stock Portfolio Optmized" tags={['Python', 'ML', 'Pytorch', 'FinTech', 'Data Science']}>
                        <p> Built a stock portfolio optimization tool in Python, integrating a genetic algorithm and a simulated annealing algorithm. This tool allocates weights to stocks within the S&P 500, showcasing advanced proficiency in Artificial Intelligence and quantitative analysis.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Advanced Computer Networks: Analysis of ML algorithms for Network Traffic" tags={['Python', 'Pandas', 'Pytorch', 'ML', 'Network Security', 'Data Science', 'Networks', 'Big Data']}>
                        <p>Led an advanced networks project that leveraged Python’s Pandas module and Pytorch modules for robust data handling and manipulation.</p>
                        <p>Implemented a comparative study utilizing 4 state-of-the-art machine learning algorithms. The project focused on the classification of network traffic patterns, showcasing a deep understanding of machine learning techniques and their application in network security</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Zen Garden BCI using EEG" tags={['BCI', 'EEG', 'PhysiolabXR', 'LSL', 'NeuroTech', 'Cognative Science']}>
                        <p>Unity game to facilitate interactive and mindful interactions in virtual environments through EEG (Electroencephalography) signals. The core of the system is the integration of a brain-computer interface (BCI) that enables users to control virtual elements in real-time based on their brain activity</p>
                        <p>Unicorn EEG headset captures EEG data passed to PhysioLabXR via the LSL and classified "calm" then passed to unitys virtual environment.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Neuromorphic Model of the Human Auditory System" tags={['MatLab', 'Signal Processing', 'Neural Processing']}>
                        <p>Physiologically relevant model of the peripheral human auditory system that is implemented in MATLAB.</p>
                        <p>To do this, the model contained parts to model the basilar membrane, inner hair cells, and the auditory nerve. Code was written to simulate the various functions of the encoding of a signal performed by the inner ear. The encoded signal was then decoded in order to assess the validity of the model.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Advanced Custom ML Classification Algorithms" tags={['Data Science', 'ML', 'Python', 'Numpy']}>
                        <p>Created tailored machine learning algorithms, including a Gaussian Mixture Model (GMM), K-Nearest Neighbors (KNN), and Agglomerative Clustering, to address complex classification tasks. The GMM provides nuanced probabilistic classifications, KNN offers straightforward effectiveness, and Agglomerative Clustering builds a hierarchical understanding of data sets.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="Operating Systems Final Project" tags={['C', 'OS', 'System Calls', 'Linux']}>
                        <p>Developed Custom Linux Shell: Basic Linux command prompt functionality written in C foucsed on OS fundamentals and system calls.</p>
                    </ProjectsCard>
                    <ProjectsCard className={hovered ? "dimmed" : ""} title="WPI IQP STEM Education Though Robotics in Panama Public Schools" tags={['Robotics', 'Education', 'Leadership']}>
                        <p>Worked to aid Fundesteam in developing education modules for local 11th and 12th graders. The modules focused on STEAM topics and used Arduino to introduce Robotics concepts</p>
                    </ProjectsCard>
                </section>
            </div>
        </div>
    );
};

export default MainContent;
