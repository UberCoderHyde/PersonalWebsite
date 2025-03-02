import React from 'react';

const experiences = [
  {
    jobTitle: 'College Student',
    company: 'University of North Carolina at Charlotte',
    duration: 'August 2021 - Present',
    description: 'I am currently in my Senior Year at UNCC pursuing a degree in Computer Science, where I explore a diverse range of subjects and projects.'
  },
  {
    jobTitle: 'Software Developer',
    company: 'CR Onsurd',
    duration: 'July 2024 - Present',
    description: 'At CR Onsurd, I played a key role in developing an MTConnect-based data collection platform. This system streamlined the acquisition and analysis of machine data, helping to optimize production processes and enhance operational efficiency.'
  },
  {
    jobTitle: 'Intern',
    company: 'PBE',
    duration: 'May 2020 - Aug 2020',
    description: 'Developed an application to generate and scan barcodes for a molding operation. This tool enhanced quality control by tracking when molds needed replacing and monitoring their remaining usage. The project was built using C#, WinForms, and SQL.'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{experience.jobTitle}</h3>
              <h4 className="text-md font-medium mb-1">{experience.company}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{experience.duration}</p>
              <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
