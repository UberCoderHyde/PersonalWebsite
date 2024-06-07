import React from 'react';
import Grid from "./Grid";
import FinalProject from '../images/3155.png';
import Bonked from '../images/Bonked.png';
import MHA from '../images/MHA.png';
import ConsoleImage from '../images/ConsoleImage.png'
import PersonalSiteImage from '../images/PersonalSiteImage.png'

const projects = [
  {
    title: 'Personal Website',
    description: 'Its this website your on now! You can check out the source code for the components and the pathfinding algorithms in the github repo.',
    imageUrl: PersonalSiteImage,
    link: 'https://github.com/UberCoderHyde/PersonalWebsite'
  },
  {
    title: 'Bonked Squirrel (In Progress)',
    description: 'This is a website for a cycling group to sell merchandise. It has a Django backend and a React frontend',
    imageUrl: Bonked, 
    link: 'https://github.com/UberCoderHyde/BonkedSquirrel'
  },
  {
    title: 'Software Engineering Final Project(202)',
    description: 'This was my final project for a class in college. In a group of 2two we created a website with Django for people to scedule and join tutoring meetings and to communicate on forums to others in the same class',
    imageUrl: FinalProject,
    link: 'https://github.com/UberCoderHyde/3155-Final-Project'
  }, 
  {
    title: 'MarketHack(2021)',
    description: 'This was my first attempt at making a website. It would use Yahoo Finances api to find stock data. It can look up stocks and find their important data and would update the price in real time.',
    imageUrl: MHA,
    link: 'https://github.com/UberCoderHyde/MarketHack'
  },
  {
    title: 'Attendance Checker (2021)',
    description: 'This was my first github repo. It would check a google doc to see who in the class wrote that they were in class. It could also pick a random person. It didn\'t use a google api to acheive the end result',
    imageUrl: ConsoleImage,
    link: 'https://github.com/UberCoderHyde/AttendanceCheckerJavaConsole'
  }

];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={'${index*100}'} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
