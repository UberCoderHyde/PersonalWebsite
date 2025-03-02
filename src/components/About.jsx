import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I'm Colby Meidenbauer—a Junior Software Developer passionate about crafting innovative solutions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I am proficient in Python, Java, C#, HTML, CSS, JavaScript, and SQL. My solid experience in both frontend and backend development allows me to build well-rounded, efficient applications.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          When I'm not coding, I enjoy diving into my Computer Science coursework at UNCC or unwinding with a good gaming session.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I'm actively seeking new opportunities to further enhance my skills and contribute to exciting projects.
        </p>
        <button data-aos="fade-up" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-4 py-2">
          Contact me and let's work together!
        </button>
      </div>
    </section>
  );
};

export default About;
