import React from 'react';
import Grid from "./Grid";
import FinalProject from '../images/3155.png';
import Bonked from '../images/Bonked.png';
import MHA from '../images/MHA.png';
import ConsoleImage from '../images/ConsoleImage.png';
import PersonalSiteImage from '../images/PersonalSiteImage.png';

const projects = [
  {
    title: 'Personal Website',
    description: "It's this website you're on now! Check out the source code for the components and pathfinding algorithms in the GitHub repo.",
    imageUrl: PersonalSiteImage,
    link: 'https://github.com/UberCoderHyde/PersonalWebsite'
  },
  {
    title: 'Bonked Squirrel (In Progress)',
    description: 'A website for a cycling group to sell merchandise, featuring a Django backend and a React frontend.',
    imageUrl: Bonked, 
    link: 'https://github.com/UberCoderHyde/BonkedSquirrel'
  },
  {
    title: 'Software Engineering Final Project (2023)',
    description: 'A collaborative project from college where we built a Django website for scheduling tutoring sessions and hosting class forums.',
    imageUrl: FinalProject,
    link: 'https://github.com/UberCoderHyde/3155-Final-Project'
  }, 
  {
    title: 'MarketHack (2021)',
    description: "A stock lookup website that uses Yahoo Finance's API to retrieve and update real-time stock data.",
    imageUrl: MHA,
    link: 'https://github.com/UberCoderHyde/MarketHack'
  },
  {
    title: 'Attendance Checker (2021)',
    description: "A Java console application that checked a Google Doc for class attendance and could randomly select a participant—without using a Google API.",
    imageUrl: ConsoleImage,
    link: 'https://github.com/UberCoderHyde/AttendanceCheckerJavaConsole'
  },
  {
    title: 'Recipe App (Senior Project)',
    description: 'My senior project—a full-stack recipe application that allows users to browse recipes based off the ingredients they have at home.',
    imageUrl: FinalProject, // Placeholder image; update if you have a dedicated image.
    link: 'https://github.com/UberCoderHyde/SeniorProject'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-right" 
              data-aos-delay={index * 100} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <img src={project.imageUrl} alt={project.title} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        <Grid rows={20} cols={40} />
      </div>
    </section>
  );
};

export default Projects;
