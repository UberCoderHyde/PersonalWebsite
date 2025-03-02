import React from 'react';

const skills = [
  { name: 'Python', level: 'Advanced' },
  { name: 'C#', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'Django', level: 'Intermediate' },
  { name: 'Node.js (Express.js)', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'SQLite', level: 'Intermediate' },
  { name: 'SQL', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
  { name: 'R', level: 'Beginner' },
  { name: 'C++', level: 'Beginner' },
  { name: 'Hadoop (HDFS, MapReduce)', level: 'Beginner' },
];

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
