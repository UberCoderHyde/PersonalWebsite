import React from 'react';

const About = () => {
  return(
  <section id="about" className="p-8 bg-gray-100 dark:bg-gray-900 text-grey-800 dark:text-white text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        Hi, i'm Colby Meidenbauer, Im a Jr. Software Developer wanting to create anything and everything.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        I have experience in using Python, Java, C#, HTML, CSS, JavaScript and SQL. I have a strong background in frontend and backend making me a well rounded developer.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Whem i'm not programming currently im working on other things, for example im in college at UNCC for Computer Science so im doing class work or gaming.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        I'm currently looking for new opportunities to use and improve my skills and work on exciting projects.
    </p>
      <button data-aos="fade-up" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-4 py-2">
        Contact me and let's work together!
      </button>
    </div>
  </section>
  );
};
export default About;
