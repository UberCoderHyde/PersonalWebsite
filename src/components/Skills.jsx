import React from 'react';

const skills = [
  {name:'Python',level:'Advanced'},
  {name:'C#',level:'Advanced'},
  {name:'Java',level:'Intermediate'},
  {name:'HTML',level:'Advanced'},
  {name:'JavaScript',level:'Advanced'},
  {name:'CSS',level:'Intermediate'},
  {name:'React',level:'Intermediate'},
  {name:'Tailwind CSS',level:'Intermediate'},
  {name:'Git',level:'Beginner'},
  {name:'SQL',level:'Intermediate'},
  {name:'Node.js',level:'Beginner'},
  {name:'C++',level:'Beginner'},
  {name:'R',level:'Beginner'}
]

const Skills = () => {
  return(
  <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
    <div className="container mx-auto">
      <h2 className="text-3x font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill,index)=>(
          <div data-aos="fade-right" data-aos-delay="{'${index * 100}'}" key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
