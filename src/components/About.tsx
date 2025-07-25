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
              Hi, I’m <strong>Colby Meidenbauer</strong>—a Software Developer at{" "}
              <strong>C.R. Onsrud</strong>, building web applications to monitor
              and analyze CNC machine data.
            </p>
            <p className="text-2xl leading-relaxed">
              I graduated from the University of North Carolina at Charlotte in{" "}
              <strong>May 2025</strong> with a B.S. in Computer Science. I now
              work full-time using <strong>TypeScript, React, Python,</strong>{" "}
              and <strong>C#</strong> to create intuitive tooling and internal
              dashboards.
            </p>
          </div>

          <div
            className="space-y-8 text-gray-700 dark:text-gray-300"
            data-aos="fade-left"
          >
            <p className="text-2xl leading-relaxed">
              At C.R. Onsrud, I focus on designing and implementing features
              that improve operator workflows and data visualization using React
              and TSX.
            </p>
            <p className="text-2xl leading-relaxed">
              I’m continuously learning technologies like AWS to enhance my
              full-stack capability and deliver scalable solutions.
            </p>
            <p className="text-2xl leading-relaxed">
              Ready to contribute and grow—let’s build something impactful
              together.
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
