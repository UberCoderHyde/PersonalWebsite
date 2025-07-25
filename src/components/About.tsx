// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h2
          className="text-6xl font-extrabold text-white dark:text-mint mb-12 text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Two-column grid for content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div
            className="space-y-8 text-gray-700 dark:text-gray-300"
            data-aos="fade-right"
          >
            <p className="text-2xl leading-relaxed">
              Hi, I’m <strong>Colby Meidenbauer</strong>—a Junior Software
              Developer passionate about crafting innovative, user-focused
              solutions that solve real problems.
            </p>
            <p className="text-2xl leading-relaxed">
              I’m proficient in{" "}
              <strong>Python, Java, C#, HTML, CSS, JavaScript</strong>, and{" "}
              <strong>SQL</strong>. With full-stack experience, I build
              efficient, maintainable applications end-to-end.
            </p>
          </div>

          <div
            className="space-y-8 text-gray-700 dark:text-gray-300"
            data-aos="fade-left"
          >
            <p className="text-2xl leading-relaxed">
              Beyond code, I dive into Computer Science coursework at UNCC and
              recharge with gaming or tinkering on side projects—always learning
              something new.
            </p>
            <p className="text-2xl leading-relaxed">
              I’m actively seeking opportunities to grow and contribute. Let’s
              collaborate on your next project and turn ideas into reality!
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div
          className="mt-16 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="#contact"
            className="inline-block bg-mint text-white font-medium rounded-full px-10 py-4 shadow-lg hover:bg-mint/90 focus:outline-none focus:ring-2 focus:ring-mint transition cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
