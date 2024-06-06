import React from 'react';

const experiences = [
  {
    jobTitle: 'College Student',
    company: 'University of North Carolina at Charlotte',
    duration: 'August 2021 - Present',
    description: 'Im currently in my Senior Year at UNCC for computer science and taking classes in a wide variety of things!'
  },
  {
    jobTitle: 'Intern',
    company: 'PBE',
    duration: 'May 2020 - Aug 2020',
    description: 'Built a application to create and scan barcodes for a molding operation. This helped the company know when they needed to replace molds to keep quality high and how many more uses a mold has in it. It was created using C#, WinForms and SQL'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={'${index*100}'} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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

